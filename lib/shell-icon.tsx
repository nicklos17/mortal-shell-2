/**
 * Mortal Shell 2 — Shell 徽记 SVG
 * 每个躯壳一个独特符号，与 lib/shells.ts 的 id 对应。
 * 最后更新：2026-08-19，按新 shell 列表重新设计。
 */
export function ShellIcon({ id, className }: { id: string; className?: string }) {
  const G = "currentColor";
  const BRIGHT = "#d4af5e";
  const BLOOD = "#a33434";

  switch (id) {
    case "proxima":
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <circle cx="32" cy="32" r="18" />
          <circle cx="32" cy="32" r="10" />
          <circle cx="32" cy="32" r="3" fill={BRIGHT} stroke="none" />
          <line x1="32" y1="6" x2="32" y2="14" stroke={BRIGHT} strokeWidth={1.6} />
          <line x1="32" y1="50" x2="32" y2="58" stroke={BRIGHT} strokeWidth={1.6} />
          <line x1="6" y1="32" x2="14" y2="32" stroke={BRIGHT} strokeWidth={1.6} />
          <line x1="50" y1="32" x2="58" y2="32" stroke={BRIGHT} strokeWidth={1.6} />
        </svg>
      );
    case "tiel":
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,6 L39,30 L25,30 Z" />
          <path d="M22,30 L42,30" />
          <path d="M32,30 L32,46" />
          <circle cx="32" cy="49" r="3" />
          <path d="M12,20 q7,3 0,7 M12,34 q7,3 0,7" stroke={BRIGHT} strokeWidth={1.6} />
        </svg>
      );
    case "gragu":
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M14,50 L14,28 Q14,14 32,14 Q50,14 50,28 L50,50" />
          <path d="M24,50 L24,36 Q24,30 32,30 Q40,30 40,36 L40,50" />
          <path d="M14,50 L50,50" />
          <circle cx="22" cy="22" r="2" fill={BLOOD} stroke="none" />
          <circle cx="42" cy="22" r="2" fill={BLOOD} stroke="none" />
        </svg>
      );
    case "eredrim":
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,7 L51,14 L51,33 Q51,49 32,57 Q13,49 13,33 L13,14 Z" />
          <path d="M32,16 L32,50 M22,24 L42,24 M24,36 L40,36" stroke={BRIGHT} strokeWidth={1.6} />
        </svg>
      );
    case "smert":
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,6 C18,6 12,18 12,30 C12,42 20,50 32,58 C44,50 52,42 52,30 C52,18 46,6 32,6 Z" />
          <path d="M32,18 Q28,26 32,34 Q36,26 32,18" stroke={BLOOD} strokeWidth={1.8} />
          <path d="M32,34 Q26,44 20,38 M32,34 Q38,44 44,38" stroke={BRIGHT} strokeWidth={1.4} />
        </svg>
      );
    case "sariel":
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,8 L32,56" />
          <path d="M10,20 L32,32 L54,20" />
          <path d="M10,44 L32,32 L54,44" />
          <circle cx="32" cy="32" r="4" fill={BRIGHT} stroke="none" />
          <path d="M26,8 L32,2 L38,8" />
          <path d="M26,56 L32,62 L38,56" />
        </svg>
      );
    case "lazlo":
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <ellipse cx="32" cy="36" rx="18" ry="20" />
          <path d="M20,20 Q26,8 32,12 Q38,8 44,20" />
          <circle cx="26" cy="34" r="3" fill={BLOOD} stroke="none" />
          <circle cx="38" cy="34" r="3" fill={BLOOD} stroke="none" />
          <path d="M26,46 Q32,50 38,46" stroke={BRIGHT} strokeWidth={1.6} />
        </svg>
      );
    case "genessa":
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,10 L48,52 L16,52 Z" />
          <path d="M32,10 L32,52" />
          <path d="M24,36 L32,22 L40,36" stroke={BRIGHT} strokeWidth={1.6} />
          <circle cx="32" cy="56" r="3" fill={BLOOD} stroke="none" />
          <path d="M22,52 L42,52" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeDasharray="4 4" className={className}>
          <rect x="14" y="12" width="36" height="40" rx="3" />
          <text x="32" y="40" textAnchor="middle" fontSize="22" fill={BRIGHT} stroke="none" fontFamily="Cinzel, serif">?</text>
        </svg>
      );
  }
}
