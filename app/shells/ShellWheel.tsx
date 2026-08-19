"use client";

import Image from "next/image";
import { useState } from "react";

type Shell = {
  id: string;
  name: string;
  role: string;
  desc: string;
  signature: string;
  location: string;
  status: "Confirmed" | "Beta" | "TBA";
  image: string;
  imageAlt: string;
  imageTitle: string;
};

type Props = {
  shells: Shell[];
};

const POSITION_LABELS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export default function ShellWheel({ shells }: Props) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const cx = 120;
  const cy = 120;
  const r = 88;

  const nodes = shells.slice(0, 8).map((shell, i) => {
    const angle = (i * 45 * Math.PI) / 180 - Math.PI / 2;
    return {
      shell,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      label: POSITION_LABELS[i],
    };
  });

  return (
    <div className="shells-wheel-shells">
      <svg
        viewBox="0 0 240 240"
        fill="none"
        stroke="#b89332"
        strokeWidth={1.4}
        className="shells-wheel-svg"
      >
        {nodes.map((n, i) => (
          <line
            key={`l${i}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="rgba(184,147,50,0.35)"
          />
        ))}
        <polygon
          points="120,86 150,120 120,154 90,120"
          fill="#191f2e"
          stroke="#d4af5e"
          strokeWidth={2}
        />
        <text
          x="120"
          y="125"
          textAnchor="middle"
          fontSize="18"
          fill="#d4af5e"
          stroke="none"
          fontFamily="Cinzel, serif"
        >
          II
        </text>
        <text
          x="120"
          y="186"
          textAnchor="middle"
          fontSize="9"
          fill="#9aa0a8"
          stroke="none"
          fontFamily="Cinzel, serif"
          letterSpacing="1"
        >
          THE HARBINGER
        </text>
      </svg>

      <div className="shells-wheel-nodes">
        {nodes.map((n, i) => (
          <div
            key={n.shell.id}
            className={`wheel-node ${hoveredIdx === i ? "wheel-node-active" : ""}`}
            style={{
              left: `${(n.x / 240) * 100}%`,
              top: `${(n.y / 240) * 100}%`,
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="wheel-node-ring-wrap">
              <div className="wheel-node-ring">
                <div className="wheel-node-img-wrap">
                  <Image
                    src={n.shell.image}
                    alt={n.shell.imageAlt}
                    title={n.shell.imageTitle}
                    width={80}
                    height={80}
                    className="wheel-node-img"
                  />
                </div>
                <span className="wheel-node-num">{n.label}</span>
              </div>

              {hoveredIdx === i && (
                <div className="wheel-tooltip">
                  {n.shell.role !== "Unknown" && (
                    <div className="wheel-tooltip-role">{n.shell.role}</div>
                  )}
                  <div className="wheel-tooltip-desc">{n.shell.desc}</div>
                  {n.shell.signature !== "Not yet documented." && (
                    <div className="wheel-tooltip-sig">
                      <strong>Signature:</strong> {n.shell.signature}
                    </div>
                  )}
                </div>
              )}
            </div>
            <span className="wheel-node-name">{n.shell.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
