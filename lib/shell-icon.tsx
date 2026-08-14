/* ============================================================
   Shell 徽记 SVG（每个躯壳一个独特符号）
   与 lib/shells.ts 的 id 对应。
   ============================================================ */
export function ShellIcon({ id, className }: { id: string; className?: string }) {
  const G = "currentColor";
  const BRIGHT = "#d4af5e";
  const BLOOD = "#a33434";

  switch (id) {
    case "blackbeard": // 黑须战士
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <circle cx="32" cy="20" r="10" />
          <path d="M22,38 Q32,30 42,38 Q47,56 32,56 Q17,56 22,38 Z" />
          <path d="M27,18 L27,24 M37,18 L37,24" stroke={BRIGHT} strokeWidth={1.4} />
        </svg>
      );
    case "harros": // 石化 / 水晶
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <polygon points="32,6 53,21 47,52 17,52 11,21" />
          <path d="M32,6 L32,52 M11,21 L53,21 M32,6 L17,52 M32,6 L47,52" />
          <path d="M24,30 L30,36 L26,42" stroke={BLOOD} strokeWidth={1.6} />
        </svg>
      );
    case "tial": // 暗影匕首
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,6 L39,30 L25,30 Z" />
          <path d="M22,30 L42,30" />
          <path d="M32,30 L32,46" />
          <circle cx="32" cy="49" r="3" />
          <path d="M12,20 q7,3 0,7 M12,34 q7,3 0,7" stroke={BRIGHT} strokeWidth={1.6} />
        </svg>
      );
    case "eredirm": // 重盾
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,7 L51,14 L51,33 Q51,49 32,57 Q13,49 13,33 L13,14 Z" />
          <path d="M32,16 L32,50 M22,24 L42,24 M24,36 L40,36" stroke={BRIGHT} strokeWidth={1.6} />
        </svg>
      );
    case "dommymommy": // 王冠
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M14,44 L14,24 L24,34 L32,18 L40,34 L50,24 L50,44 Z" />
          <path d="M14,44 L50,44" />
          <circle cx="32" cy="50" r="3" fill={BRIGHT} stroke="none" />
        </svg>
      );
    case "sester": // 惨白面具 + 枯枝王冠
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <ellipse cx="32" cy="36" rx="14" ry="17" />
          <path d="M24,32 Q28,28 32,32" stroke={BRIGHT} />
          <path d="M32,32 Q36,28 40,32" stroke={BRIGHT} />
          <path d="M26,44 Q32,50 38,44" />
          <path d="M18,24 L12,10 M22,22 L18,6 M30,20 L30,4 M38,22 L42,6 M46,24 L52,10" strokeLinecap="round" />
          <path d="M16,28 L8,20 M48,28 L56,20" strokeLinecap="round" />
        </svg>
      );
    case "skeletonman": // 骷髅
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,8 C20,8 16,18 16,28 C16,36 20,40 22,44 L22,50 L42,50 L42,44 C44,40 48,36 48,28 C48,18 44,8 32,8 Z" />
          <circle cx="25" cy="28" r="4" fill={BLOOD} stroke="none" />
          <circle cx="39" cy="28" r="4" fill={BLOOD} stroke="none" />
          <path d="M28,38 L36,38 L33,43 Z" stroke={BRIGHT} strokeWidth={1.4} />
        </svg>
      );
    case "blackmage": // 尖顶法师帽 + 星
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeLinejoin="round" className={className}>
          <path d="M32,10 L45,46 L19,46 Z" />
          <path d="M19,46 L45,46" />
          <path d="M32,20 l1.6,4 4.2,0 -3.2,2.6 1.2,4.2 -3.8,-2.6 -3.8,2.6 1.2,-4.2 -3.2,-2.6 4.2,0 z" fill={BRIGHT} stroke="none" />
        </svg>
      );
    default: // 待公布
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={G} strokeWidth={2} strokeDasharray="4 4" className={className}>
          <rect x="14" y="12" width="36" height="40" rx="3" />
          <text x="32" y="40" textAnchor="middle" fontSize="22" fill={BRIGHT} stroke="none" fontFamily="Cinzel, serif">?</text>
        </svg>
      );
  }
}
