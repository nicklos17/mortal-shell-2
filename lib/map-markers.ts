export type MarkerType = "shell" | "boss" | "tarstone" | "beacon" | "collectible";

export type MapMarker = {
  id: string;
  name: string;
  type: MarkerType;
  x: number;
  y: number;
  region: string;
  status: "pending" | "confirmed";
  source: "self-test" | "video" | "community" | "official";
  howToGet: string;
  updatedAt: string;
};

export const mapMarkers: MapMarker[] = [
  {
    id: "proxima",
    name: "Proxima",
    type: "shell",
    x: 50,
    y: 50,
    region: "TBA",
    status: "pending",
    source: "official",
    howToGet: "First shell shown in the reveal trailer",
    updatedAt: "2026-08-19",
  },
  {
    id: "tiel",
    name: "Tiel",
    type: "shell",
    x: 14,
    y: 56,
    region: "Mushroom Village",
    status: "pending",
    source: "self-test",
    howToGet: "Marrow Keep → Widow's Overlook → Mushroom Village",
    updatedAt: "2026-08-19",
  },
  {
    id: "gragu",
    name: "Gragu",
    type: "shell",
    x: 35,
    y: 30,
    region: "TBA",
    status: "pending",
    source: "official",
    howToGet: "Revealed at 02:49 in shell overview video",
    updatedAt: "2026-08-19",
  },
  {
    id: "eredrim",
    name: "Eredrim",
    type: "shell",
    x: 42,
    y: 22,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "Hidden in the open world",
    updatedAt: "2026-08-19",
  },
  {
    id: "smert",
    name: "Smert",
    type: "shell",
    x: 60,
    y: 40,
    region: "TBA",
    status: "pending",
    source: "official",
    howToGet: "Revealed at 07:15 in shell overview video",
    updatedAt: "2026-08-19",
  },
  {
    id: "sariel",
    name: "Sariel",
    type: "shell",
    x: 70,
    y: 60,
    region: "TBA",
    status: "pending",
    source: "official",
    howToGet: "Revealed at 08:50 in shell overview video",
    updatedAt: "2026-08-19",
  },
  {
    id: "lazlo",
    name: "Lazlo",
    type: "shell",
    x: 25,
    y: 75,
    region: "TBA",
    status: "pending",
    source: "official",
    howToGet: "Revealed at 12:18 in shell overview video",
    updatedAt: "2026-08-19",
  },
  {
    id: "genessa",
    name: "Genessa",
    type: "shell",
    x: 80,
    y: 80,
    region: "TBA",
    status: "pending",
    source: "official",
    howToGet: "Revealed at 14:13 in shell overview video",
    updatedAt: "2026-08-19",
  },
];
