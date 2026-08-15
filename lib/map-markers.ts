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
    id: "blackbeard",
    name: "Black Beard",
    type: "shell",
    x: 18,
    y: 30,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "",
    updatedAt: "2026-08-20",
  },
  {
    id: "eredirm",
    name: "Eredrim the Venerable",
    type: "shell",
    x: 42,
    y: 22,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "",
    updatedAt: "2026-08-20",
  },
  {
    id: "dommymommy",
    name: "Dommy Mommy",
    type: "shell",
    x: 72,
    y: 32,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "",
    updatedAt: "2026-08-20",
  },
  {
    id: "sester",
    name: "Sester Mask",
    type: "shell",
    x: 82,
    y: 58,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "",
    updatedAt: "2026-08-20",
  },
  {
    id: "harros",
    name: "Harros the Vassal",
    type: "shell",
    x: 58,
    y: 82,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "",
    updatedAt: "2026-08-20",
  },
  {
    id: "skeletonman",
    name: "Skeleton Man",
    type: "shell",
    x: 30,
    y: 74,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "",
    updatedAt: "2026-08-20",
  },
  {
    id: "tiel",
    name: "Tiel the Acolyte",
    type: "shell",
    x: 14,
    y: 56,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "",
    updatedAt: "2026-08-20",
  },
  {
    id: "blackmage",
    name: "Black Mage",
    type: "shell",
    x: 48,
    y: 50,
    region: "TBA",
    status: "pending",
    source: "self-test",
    howToGet: "",
    updatedAt: "2026-08-20",
  },
];
