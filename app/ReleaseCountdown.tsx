"use client";

import { useEffect, useState } from "react";

const RELEASE_DATE = new Date("2026-08-20T00:00:00Z").getTime();
const STEAM_URL = "https://store.steampowered.com/app/2584270/Mortal_Shell_II/";
const RELEASE_TEXT = "Launches August 20, 2026";
const STEAM_CTA = "Pre-order on Steam →";

type TimeParts = { days: number; hours: number; minutes: number; seconds: number };

function calcRemaining(): { ms: number } & TimeParts {
  const ms = RELEASE_DATE - Date.now();
  if (ms <= 0) return { ms: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { ms, days, hours, minutes, seconds };
}

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function ReleaseCountdown() {
  const [t, setT] = useState<TimeParts | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const tick = () => {
      const r = calcRemaining();
      if (r.ms <= 0) {
        setExpired(true);
        return true;
      }
      setT({ days: r.days, hours: r.hours, minutes: r.minutes, seconds: r.seconds });
      return false;
    };
    if (tick()) return;
    const id = window.setInterval(() => {
      if (tick()) window.clearInterval(id);
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (expired) return null;

  return (
    <aside className="countdown-card" aria-label="Mortal Shell 2 release countdown">
      <div className="countdown-eyebrow">{RELEASE_TEXT}</div>
      <div className="countdown-grid">
        <div className="countdown-unit">
          <span className="countdown-num">{t === null ? "--" : t.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-num">{t === null ? "--" : pad(t.hours)}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-num">{t === null ? "--" : pad(t.minutes)}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-num">{t === null ? "--" : pad(t.seconds)}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <a
        className="btn btn-primary"
        href={STEAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textAlign: "center", marginTop: ".75rem" }}
      >
        {STEAM_CTA}
      </a>
    </aside>
  );
}
