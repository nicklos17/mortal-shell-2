"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import { mapMarkers, MapMarker } from "@/lib/map-markers";

const BASE_URL = "/assets/images/map/base.webp";
const MAP_W = 3891;
const MAP_H = 3891;

function popupContent(m: MapMarker): string {
  const typeLabel =
    m.type === "shell"
      ? "Shell"
      : m.type === "boss"
      ? "Boss"
      : m.type === "tarstone"
      ? "Tarstone"
      : m.type === "beacon"
      ? "Beacon"
      : "Collectible";
  const statusLabel = m.status === "confirmed" ? "Confirmed" : "TBA";
  const howToGet = m.howToGet
    ? `<p class="pop-how">${m.howToGet}</p>`
    : "";
  return (
    '<div class="pop">' +
    '<div class="pop-head"><strong>' +
    m.name +
    '</strong><span class="pop-tag pop-type">' +
    typeLabel +
    '</span><span class="pop-tag pop-status">' +
    statusLabel +
    "</span></div>" +
    '<p class="pop-region"><span>Region:</span> ' +
    m.region +
    "</p>" +
    howToGet +
    '<p class="pop-foot">Updated ' +
    m.updatedAt +
    "</p>" +
    "</div>"
  );
}

export default function MapCanvas() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const root = getComputedStyle(document.documentElement);
    const gold = root.getPropertyValue("--color-gold").trim() || "#b89332";
    const goldBright =
      root.getPropertyValue("--color-gold-bright").trim() || "#d4af5e";
    const blood = root.getPropertyValue("--color-blood").trim() || "#8f2a2a";
    const bgDark =
      root.getPropertyValue("--bg-page").trim() || "#0e0d12";
    const card =
      root.getPropertyValue("--bg-card").trim() || "#17161d";
    const textSec =
      root.getPropertyValue("--text-secondary").trim() || "#8a8499";
    const textMain =
      root.getPropertyValue("--color-text").trim() || "#e8e3d5";

    const typeColors: Record<string, string> = {
      shell: gold,
      boss: blood,
      tarstone: goldBright,
      beacon: goldBright,
      collectible: gold,
    };

    const map = L.map(mapRef.current, {
      crs: L.CRS.Simple,
      minZoom: -2,
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

    L.imageOverlay(BASE_URL, bounds, {
      alt: "Mortal Shell 2 interactive map",
      interactive: false,
    }).addTo(map);

    map.setMaxBounds(bounds.pad(0.05));
    map.fitBounds(bounds);

    const style = document.createElement("style");
    style.textContent = `
.leaflet-container { background: ${bgDark}; }
.leaflet-container .leaflet-control-attribution { background: transparent; color: ${textSec}; }
.leaflet-popup-content-wrapper,
.leaflet-popup-tip { background: ${card}; color: ${textMain}; border: 1px solid ${gold}55; border-radius: 4px; }
.leaflet-popup-content { margin: 10px 12px; font-size: 13px; line-height: 1.5; }
.pop-head { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; font-family: Cinzel, serif; }
.pop-head strong { color: ${gold || "#b89332"}; font-size: 14px; }
.pop-tag { display: inline-block; padding: 1px 6px; border-radius: 3px; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
.pop-type { background: ${gold}33; color: ${gold || "#b89332"}; border: 1px solid ${gold}66; }
.pop-status { background: ${blood || "#8f2a2a"}33; color: #e6c26a; border: 1px solid ${blood || "#8f2a2a"}55; }
.pop-status { }
.pop-region { margin: 0 0 4px; color: ${textSec}; font-size: 12px; }
.pop-region span { color: ${gold || "#b89332"}; font-weight: 600; }
.pop-how { margin: 4px 0 6px; color: ${textMain}; font-size: 12px; }
.pop-foot { margin: 8px 0 0; color: ${textSec}; font-size: 11px; border-top: 1px solid ${gold}22; padding-top: 5px; }
.map-marker-dot { pointer-events: none; }
.map-marker-pulse { pointer-events: none; }
`;
    document.head.appendChild(style);

    mapMarkers.forEach((m) => {
      const color = typeColors[m.type] || gold;
      const px = (m.x / 100) * MAP_W;
      const py = (m.y / 100) * MAP_H;
      const latLng = map.unproject([px, py], 0);

      const iconEl = L.DomUtil.create("div", "mm-icon");
      const dotSize = 16;
      iconEl.style.width = dotSize + "px";
      iconEl.style.height = dotSize + "px";
      iconEl.style.borderRadius = "50%";
      iconEl.style.background = color;
      iconEl.style.border = "2px solid " + card;
      iconEl.style.boxShadow =
        "0 0 0 1px " + color + "aa, 0 0 16px " + color + "aa";

      const icon = L.divIcon({
        className: "map-marker",
        html: iconEl.outerHTML,
        iconSize: [dotSize, dotSize],
        iconAnchor: [dotSize / 2, dotSize / 2],
      });

      L.marker(latLng, { icon })
        .addTo(map)
        .bindPopup(popupContent(m));
    });

    return () => {
      if (style.parentNode) style.parentNode.removeChild(style);
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return <div id="map" ref={mapRef} />;
}
