"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import { MapMarker, MarkerType } from "@/lib/map-markers";
import { ruMapMarkers } from "@/lib/ru/map-markers";

const BASE_URL = "/assets/images/map/base.webp";
const MAP_W = 3891;
const MAP_H = 3891;

// Classification -> canonical MarkerType（与英文版 MapCanvas 一致）
const CLASS_TO_TYPE: Record<string, MarkerType | "boneGate"> = {
  Beacon: "beacon",
  Gate: "gate",
  Shell: "shell",
  Weapon: "weapon",
  Sidearm: "sidearm",
  Dungeon: "dungeon",
  "Bone Gate": "boneGate",
  "Corrupted Statue": "corruptedStatue",
  "Map Fragment": "mapFragment",
  Tarstone: "tarstone",
  "Key Item": "keyItem",
  Boss: "boss",
  Enemy: "enemy",
  Collectible: "collectible",
};

type FilterKey = MarkerType | "boneGate";

const TYPE_COLORS: Record<FilterKey, string> = {
  shell: "#d4af37",
  boss: "#8f2a2a",
  tarstone: "#e74c3c",
  beacon: "#5a7fb0",
  weapon: "#9d7ac9",
  sidearm: "#7a96c9",
  dungeon: "#a05a2c",
  gate: "#70756a",
  keyItem: "#1abc9c",
  mapFragment: "#6aa880",
  corruptedStatue: "#b05a7a",
  enemy: "#a86a50",
  collectible: "#d4af37",
  boneGate: "#9e8866",
} as const;

// 俄语分类标签
const TYPE_LABEL: Record<FilterKey, string> = {
  shell: "Оболочка",
  boss: "Босс",
  tarstone: "Тарстоун",
  beacon: "Маяк",
  weapon: "Оружие",
  sidearm: "Вспомог. оружие",
  dungeon: "Подземелье",
  gate: "Врата",
  keyItem: "Ключевой предмет",
  mapFragment: "Фрагмент карты",
  corruptedStatue: "Оскверн. статуя",
  enemy: "Враг",
  collectible: "Предмет",
  boneGate: "Костяные врата",
};

const TYPE_GLYPH: Record<FilterKey, string> = {
  shell: "⛨",
  boss: "☠",
  tarstone: "◈",
  beacon: "▲",
  weapon: "⚔",
  sidearm: "🗡",
  dungeon: "▣",
  gate: "▨",
  keyItem: "🗝",
  mapFragment: "▤",
  corruptedStatue: "☥",
  enemy: "☢",
  collectible: "✦",
  boneGate: "⟇",
};

type FilterGroup = {
  key: string;
  label: string;
  keys: FilterKey[];
};

const FILTER_GROUPS: FilterGroup[] = [
  {
    key: "poi",
    label: "Точки интереса",
    keys: [
      "beacon",
      "gate",
      "shell",
      "weapon",
      "sidearm",
      "dungeon",
      "boneGate",
      "corruptedStatue",
      "mapFragment",
    ],
  },
  {
    key: "collectibles",
    label: "Коллекционные предметы",
    keys: ["tarstone", "keyItem"],
  },
];

function resolveFilterKey(m: MapMarker): FilterKey {
  const byClass = CLASS_TO_TYPE[m.classification];
  if (byClass) return byClass;
  return m.type as FilterKey;
}

function escHtml(s: string | null | undefined): string {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function popupContent(m: MapMarker): string {
  const fk = resolveFilterKey(m);
  const label = TYPE_LABEL[fk] || m.classification || "Точка";
  const color = TYPE_COLORS[fk] || "#d4af37";

  const head =
    '<div class="pop-head">' +
    `<strong class="pop-title">${escHtml(m.title)}</strong>` +
    `<span class="pop-tag pop-type" style="background:${color}22;color:${color};border:1px solid ${color}66;">${label}</span>` +
    "</div>";

  const desc = m.description ? `<p class="pop-desc">${escHtml(m.description)}</p>` : "";

  return '<div class="pop">' + head + desc + "</div>";
}

export default function MapCanvasRu() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markersByKeyRef = useRef<Map<string, L.Marker[]>>(new Map());
  const allMarkersRef = useRef<Map<string, L.Marker>>(new Map());

  const totals = useMemo(() => {
    const t: Partial<Record<FilterKey, number>> = {};
    for (const m of ruMapMarkers) {
      const fk = resolveFilterKey(m);
      t[fk] = (t[fk] || 0) + 1;
    }
    return t as Record<FilterKey, number>;
  }, []);

  const allFilterKeys = useMemo(
    () =>
      FILTER_GROUPS.flatMap((g) => g.keys).filter(
        (k) => (totals[k] || 0) > 0
      ) as FilterKey[],
    [totals]
  );

  const [selectedClass, setSelectedClass] = useState<string>("world");
  const [search, setSearch] = useState("");
  const [hideChecked, setHideChecked] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({
    collectibles: false,
  });
  const [enabled, setEnabled] = useState<Record<FilterKey, boolean>>(() => {
    const obj = {} as Record<FilterKey, boolean>;
    (Object.keys(TYPE_COLORS) as FilterKey[]).forEach((k) => (obj[k] = true));
    return obj;
  });
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;
    const allMarkers = allMarkersRef.current;
    const searchNeedle = search.trim().toLowerCase();

    for (const [mId, marker] of allMarkers) {
      const fk = (marker as any)._ms2Fk as FilterKey;
      const title = (marker as any)._ms2Title as string;
      const checkedOn = !!checked[mId];

      let show = true;
      if (!enabled[fk]) show = false;
      if (hideChecked && checkedOn) show = false;
      if (searchNeedle && !title.toLowerCase().includes(searchNeedle)) {
        show = false;
      }

      if (show) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else {
        if (map.hasLayer(marker)) map.removeLayer(marker);
      }

      const container = (marker as any)._icon as HTMLElement | undefined;
      if (container) {
        const existingTitle = container.querySelector(".mm-title");
        if (displayTitle && show) {
          if (!existingTitle) {
            const tEl = document.createElement("div");
            tEl.className = "mm-title";
            tEl.textContent = title;
            container.appendChild(tEl);
          } else if ((existingTitle as HTMLElement).textContent !== title) {
            (existingTitle as HTMLElement).textContent = title;
          }
        } else if (existingTitle) {
          existingTitle.remove();
        }
        container.dataset.checked = checkedOn ? "1" : "0";
      }
    }
  }, [enabled, search, hideChecked, checked, displayTitle]);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const mapEl = mapRef.current;

    const failMap = (msg: string) => {
      mapEl.innerHTML =
        '<div style="padding:2rem;color:#e3b341;font-family:ui-monospace,monospace;white-space:pre-wrap;font-size:13px;">' +
        "Не удалось загрузить карту.\\n\\n" +
        msg +
        "</div>";
    };

    try {
      const map = L.map(mapEl, {
        crs: L.CRS.Simple,
        minZoom: -3,
        maxZoom: 5,
        zoomSnap: 0.25,
        zoomDelta: 0.5,
        attributionControl: false,
        zoomControl: true,
        preferCanvas: false,
      });
      mapInstance.current = map;

      const southWest = map.unproject([0, MAP_H], 0);
      const northEast = map.unproject([MAP_W, 0], 0);
      const bounds = L.latLngBounds(southWest, northEast);

      const forceVisible = () => {
        try {
          if (!bounds.isValid()) return;
          map.setMaxBounds(bounds.pad(0.05));
          const ok = map.fitBounds(bounds, {
            padding: [12, 12],
            animate: false,
            maxZoom: -1,
          });
          try {
            const z = map.getZoom();
            if (z === undefined || isNaN(z) || z === map.getMaxZoom()) {
              map.setZoom(-1);
              map.panTo(bounds.getCenter(), { animate: false });
            }
          } catch (_) { }
          return ok;
        } catch (_) {
          try {
            map.setZoom(-1);
            map.panTo(bounds.getCenter(), { animate: false });
          } catch (_) { }
          return map;
        }
      };

      const alive = () => mapInstance.current === map;

      const refresh = () => {
        if (!alive()) return;
        try { map.invalidateSize({ animate: false }); } catch (_) { }
        try { forceVisible(); } catch (_) { }
      };

      const baseLayer = L.imageOverlay(BASE_URL, bounds, {
        interactive: false,
        className: "ms2-base",
        errorOverlayUrl: "",
        crossOrigin: false,
        opacity: 1,
        zIndex: 1,
      });
      baseLayer.addTo(map);

      const img = baseLayer.getElement?.() as HTMLImageElement | undefined;
      if (img) {
        const onImgReady = () => {
          if (!alive()) return;
          try { map.invalidateSize({ animate: false }); } catch (_) { }
          try { forceVisible(); } catch (_) { }
        };
        if (img.complete && img.naturalWidth > 0) {
          onImgReady();
        } else {
          img.addEventListener("load", onImgReady, { once: true });
          img.addEventListener(
            "error",
            () => {
              if (!alive()) return;
              failMap(
                `Не удалось загрузить базовое изображение карты: ${BASE_URL}\n\n` +
                "Проверьте, что файл public/assets/images/map/base.webp существует.",
              );
            },
            { once: true },
          );
        }
      }

      try { map.invalidateSize({ animate: false, debounceMoveend: true }); } catch (_) { }
      map.whenReady(() => {
        if (!alive()) return;
        refresh();
        requestAnimationFrame(() => { if (alive()) refresh(); });
      });

      let ro: ResizeObserver | null = null;
      if (typeof ResizeObserver !== "undefined" && mapEl?.parentElement) {
        ro = new ResizeObserver(() => {
          if (!alive()) return;
          map.invalidateSize({ animate: false, debounceMoveend: true });
        });
        ro.observe(mapEl.parentElement);
        ro.observe(mapEl);
      }

      const tSafety = window.setTimeout(() => {
        if (!alive()) return;
        try { map.invalidateSize({ animate: false, debounceMoveend: true }); } catch (_) { }
        try { forceVisible(); } catch (_) { }
      }, 16);

      let io: IntersectionObserver | null = null;
      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(
          (entries) => {
            if (!alive()) return;
            for (const e of entries) {
              if (e.isIntersecting) {
                try { map.invalidateSize({ animate: false, debounceMoveend: true }); } catch (_) { }
                try { forceVisible(); } catch (_) { }
                break;
              }
            }
          },
          { root: null, threshold: 0.05 },
        );
        io.observe(mapEl);
      }

      const byKey = markersByKeyRef.current;
      const all = allMarkersRef.current;
      const created: L.Marker[] = [];
      let skippedMarkers = 0;

      for (const m of ruMapMarkers) {
        try {
          const fk = resolveFilterKey(m);
          const xNum = typeof m.x === "number" ? m.x : Number(m.x);
          const yNum = typeof m.y === "number" ? m.y : Number(m.y);
          if (!isFinite(xNum) || !isFinite(yNum)) { skippedMarkers++; continue; }
          const px = (xNum / 100) * MAP_W;
          const py = (yNum / 100) * MAP_H;
          const latLng = map.unproject([px, py], 0);
          if (!latLng || typeof latLng.lat !== "number") { skippedMarkers++; continue; }

          const isLg = fk === "boss" || fk === "shell" || fk === "dungeon";
          const isMd = fk === "beacon" || fk === "weapon" || fk === "tarstone";
          const sz = isLg ? 18 : isMd ? 14 : 11;
          const szAttr = isLg ? "lg" : isMd ? "md" : "sm";

          const html = `<div class="mm-icon" data-t="${fk}" data-sz="${szAttr}"></div>`;

          const icon = L.divIcon({
            className: "map-marker",
            html,
            iconSize: [sz, sz],
            iconAnchor: [sz / 2, sz / 2],
            popupAnchor: [0, -Math.round(sz / 2 + 2)],
          });

          const marker = L.marker(latLng, { icon });
          (marker as any)._ms2Fk = fk;
          (marker as any)._ms2Title = m.title;
          (marker as any)._ms2Id = m.id;

          marker.bindPopup(() => popupContent(m), {
            maxWidth: 340,
            minWidth: 240,
            className: "ms2-popup",
            autoPan: true,
            autoPanPadding: [20, 20],
          });

          marker.on("click", (ev: L.LeafletMouseEvent) => {
            if (!alive()) return;
            const original = ev.originalEvent as MouseEvent | undefined;
            if (original && (original.ctrlKey || original.metaKey)) {
              L.DomEvent.stop(ev);
              original.preventDefault();
              setChecked((prev) => ({ ...prev, [m.id]: !prev[m.id] }));
              marker.closePopup();
            }
          });

          if (!byKey.has(fk)) byKey.set(fk, []);
          byKey.get(fk)!.push(marker);
          all.set(m.id, marker);
          created.push(marker);
        } catch (_e) {
          skippedMarkers++;
        }
      }
      if (created.length > 0) {
        const grp = L.layerGroup(created);
        grp.addTo(map);
      }

      return () => {
        window.clearTimeout(tSafety);
        io?.disconnect();
        ro?.disconnect();
        try { map.remove(); } catch (_) { }
        mapInstance.current = null;
        markersByKeyRef.current = new Map();
        allMarkersRef.current = new Map();
      };
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message + "\\nStack:\\n" + (err.stack || "(no stack)")
          : String(err);
      failMap(msg);
      return () => { };
    }
  }, []);

  const allKeys = allFilterKeys;
  const someOff = allKeys.some((k) => !enabled[k]);
  const allOn = allKeys.every((k) => enabled[k]);

  const showAll = () => {
    const nxt = { ...enabled };
    allKeys.forEach((k) => (nxt[k] = true));
    setEnabled(nxt);
  };
  const hideAll = () => {
    const nxt = { ...enabled };
    allKeys.forEach((k) => (nxt[k] = false));
    setEnabled(nxt);
  };
  const resetAll = () => {
    setChecked({});
    showAll();
  };

  const toggleGroup = (key: string) =>
    setCollapsed((p) => ({ ...p, [key]: !p[key] }));

  const toggleRow = (k: FilterKey) =>
    setEnabled((p) => ({ ...p, [k]: !p[k] }));

  const checkedCountByKey = useMemo(() => {
    const byKey: Partial<Record<FilterKey, number>> = {};
    for (const m of ruMapMarkers) {
      if (!checked[m.id]) continue;
      const fk = resolveFilterKey(m);
      byKey[fk] = (byKey[fk] || 0) + 1;
    }
    return byKey as Record<FilterKey, number>;
  }, [checked]);

  return (
    <div className="ms2-map-wrap" ref={rootRef}>
      <aside className="ms2-side" aria-label="Фильтры карты">
        <select
          className="ms2-side-select"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="world">Карта мира</option>
          <option value="marrow">Крепость Марроу</option>
          <option value="mushroom">Грибная деревня</option>
          <option value="citadel">Цитадель Искупления</option>
        </select>

        <input
          className="ms2-side-search"
          placeholder="Поиск цели"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="ms2-toggles">
          <label
            className="ms2-toggle"
            role="switch"
            aria-checked={hideChecked}
            onClick={() => setHideChecked((v) => !v)}
          >
            <span>◉ Скрыть отмеченные</span>
            <span className="ms2-switch" />
          </label>
          <label
            className="ms2-toggle"
            role="switch"
            aria-checked={displayTitle}
            onClick={() => setDisplayTitle((v) => !v)}
          >
            <span>⬦ Показывать названия</span>
            <span className="ms2-switch" />
          </label>
        </div>

        <div className="ms2-btns">
          <button
            className="ms2-btn"
            onClick={showAll}
            disabled={allOn}
            style={allOn ? { opacity: 0.45, cursor: "default" } : undefined}
          >
            Показать все
          </button>
          <button
            className="ms2-btn"
            onClick={hideAll}
            disabled={someOff && !allOn ? false : someOff ? false : !someOff ? false : false}
            style={!someOff ? { opacity: 0.45, cursor: "default" } : undefined}
          >
            Скрыть все
          </button>
        </div>

        {FILTER_GROUPS.map((group) => {
          const keys = group.keys.filter(
            (k) => (totals[k] || 0) > 0
          ) as FilterKey[];
          if (keys.length === 0) return null;
          const isCollapsed = !!collapsed[group.key];
          return (
            <div className="ms2-group" key={group.key}>
              <div
                className="ms2-group-head"
                onClick={() => toggleGroup(group.key)}
              >
                <span>{group.label}</span>
                <span aria-hidden>{isCollapsed ? "▾" : "▴"}</span>
              </div>
              {!isCollapsed && (
                <div className="ms2-group-body">
                  {keys.map((k) => {
                    const total = totals[k] || 0;
                    const got = checkedCountByKey[k] || 0;
                    const on = !!enabled[k];
                    const color = TYPE_COLORS[k];
                    return (
                      <div
                        key={k}
                        className="ms2-row"
                        data-enabled={on ? "true" : "false"}
                        onClick={() => toggleRow(k)}
                      >
                        <span
                          className="ms2-glyph"
                          style={{ background: color }}
                          aria-hidden
                        >
                          {TYPE_GLYPH[k]}
                        </span>
                        <span className="ms2-row-label">{TYPE_LABEL[k]}</span>
                        <span className="ms2-row-count">
                          {got}/{total}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <button className="ms2-reset" onClick={resetAll}>
          Сбросить все метки
        </button>
      </aside>

      <div className="ms2-map-host" style={{ height: "820px" }}>
        <div
          id="map"
          ref={mapRef}
          style={{ height: "820px", width: "100%", minHeight: "820px" }}
        />
      </div>
    </div>
  );
}
