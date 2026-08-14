"use client";

import { useEffect, useState } from "react";

const RELEASE_DATE = new Date("2026-08-20T00:00:00Z").getTime();
const STEAM_URL = "https://store.steampowered.com/app/2584270/Mortal_Shell_II/";
const PRE_EYEBROW = "Launches August 20, 2026";
const POST_EYEBROW = "Now Available on Steam";
const STEAM_CTA_PRE = "Pre-order on Steam →";
const STEAM_CTA_POST = "Buy on Steam →";
const LIVE_TEXT = "火热发售中";

export type InitialParts = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  /** 发售后服务端就传 null，客户端就不再 tick */
  expired: boolean;
};

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

function calcRemaining(): { ms: number; days: number; hours: number; minutes: number; seconds: number } {
  const ms = RELEASE_DATE - Date.now();
  if (ms <= 0) return { ms: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { ms, days, hours, minutes, seconds };
}

export default function ReleaseCountdown({ initial }: { initial: InitialParts }) {
  const [d, setD] = useState(initial.days);
  const [h, setH] = useState(initial.hours);
  const [m, setM] = useState(initial.minutes);
  const [s, setS] = useState(initial.seconds);
  const [expired, setExpired] = useState(initial.expired);

  useEffect(() => {
    if (initial.expired) return;
    let stopped = false;
    const tick = () => {
      const r = calcRemaining();
      if (r.ms <= 0) {
        setExpired(true);
        return true;
      }
      setD(String(r.days));
      setH(pad(r.hours));
      setM(pad(r.minutes));
      setS(pad(r.seconds));
      return false;
    };
    const id = window.setInterval(() => {
      if (stopped) return;
      if (tick()) {
        window.clearInterval(id);
        stopped = true;
      }
    }, 1000);
    return () => {
      window.clearInterval(id);
      stopped = true;
    };
  }, [initial.expired]);

  if (expired) {
    return (
      <aside className="countdown-card countdown-live" aria-label="Mortal Shell 2 is now live">
        <div className="countdown-eyebrow">{POST_EYEBROW}</div>
        <div className="countdown-live-text">{LIVE_TEXT}</div>
        <a
          className="btn btn-primary"
          href={STEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", textAlign: "center", marginTop: ".75rem" }}
        >
          {STEAM_CTA_POST}
        </a>
      </aside>
    );
  }

  return (
    <aside className="countdown-card" aria-label="Mortal Shell 2 release countdown">
      <div className="countdown-eyebrow">{PRE_EYEBROW}</div>
      <div className="countdown-grid">
        <div className="countdown-unit">
          <span className="countdown-num">{d}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-num">{h}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-num">{m}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-num">{s}</span>
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
        {STEAM_CTA_PRE}
      </a>
    </aside>
  );
}
