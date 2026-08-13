"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";

type LocationItem = {
  lat: number;
  lng: number;
  name: string;
  desc: string;
  type: "shell" | "boss" | "tarstone" | "beacon" | "collectible";
};

const locations: LocationItem[] = [
  {
    lat: 51.5,
    lng: -0.09,
    name: "Hardened Shell",
    desc: "Temple of the Iron Path",
    type: "shell",
  },
  {
    lat: 51.505,
    lng: -0.08,
    name: "First Boss",
    desc: "Arena location",
    type: "boss",
  },
];

export default function MapCanvas() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // 从 CSS 变量读取主题色，禁止硬编码色值
    const root = getComputedStyle(document.documentElement);
    const gold = root.getPropertyValue("--color-gold").trim() || "#b89332";
    const goldBright =
      root.getPropertyValue("--color-gold-bright").trim() || "#d4af5e";
    const blood = root.getPropertyValue("--color-blood").trim() || "#8f2a2a";

    const typeColors: Record<string, string> = {
      shell: gold,
      boss: blood,
      tarstone: goldBright,
      beacon: goldBright,
      collectible: gold,
    };

    // 初始化地图（占位坐标，发售后替换为真实游戏地图拼图）
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
    mapInstance.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    locations.forEach((loc) => {
      const color = typeColors[loc.type] || gold;
      L.circleMarker([loc.lat, loc.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.6,
        radius: 6,
      })
        .addTo(map)
        .bindPopup("<strong>" + loc.name + "</strong><br>" + loc.desc);
    });

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return <div id="map" ref={mapRef} />;
}
