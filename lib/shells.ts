/* ============================================================
   Mortal Shell 2 — Shell（躯壳）共享数据
   站点所有 Shell 页面（列表 + 详情 + 关系轮图）统一从这里读取。
   ============================================================ */

export type Shell = {
  id: string;
  name: string;
  epithet: string;
  role: string;
  /** 一句话定位 / tagline */
  tagline: string;
  /** 概览（列表卡片 + 详情页开头） */
  desc: string;
  /** 招牌能力 */
  signature: string;
  /** 获取位置 + 时间点 */
  location: string;
  status: "Confirmed" | "Beta" | "TBA";
  /** 战斗风格（详情页段落） */
  playstyle: string;
  /** 背景故事（详情页段落） */
  lore: string;
  /** 关键能力 / 技能树要点 */
  abilities: string[];
  /** 上手建议 */
  tips: string[];
  /** 肖像图（public 路径，供 next/image 使用） */
  image: string;
  imageAlt: string;
  imageTitle: string;
};

export const SHELLS: Shell[] = [
  {
    id: "blackbeard",
    name: "Black Beard",
    epithet: "???",
    role: "Unknown",
    tagline: "A bearded warrior archetype — community-identified, kit pending.",
    desc: "Community-identified by his distinctive black beard and warrior silhouette. Official kit pending.",
    signature: "Not yet documented.",
    location: "Not yet revealed.",
    status: "TBA",
    playstyle: "Pending official reveal.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/black-beard-mortal-shell-2.png",
    imageAlt: "Black Beard, a playable Shell in Mortal Shell 2",
    imageTitle: "Black Beard – Mortal Shell 2 Shell",
  },
  {
    id: "eredirm",
    name: "Eredirm",
    epithet: "The Venerable",
    role: "Tank / Heavy",
    tagline: "The bulwark — a slow, heavy, high-survivability bruiser.",
    desc: "The roster's bulwark. Trades speed for raw durability and punishing melee — weather a boss instead of out-dancing it.",
    signature: "Heavy, high-HP bruiser — soak damage, answer with massive deliberate strikes.",
    location: "Hidden in the open world; exact area TBD after launch.",
    status: "Confirmed",
    playstyle:
      "Eredirm trades speed for durability and punishing melee. Soak the damage, then answer with massive, deliberate strikes. Rewards patience and spacing over aggression.",
    lore:
      "Known as 'The Venerable' in the first Mortal Shell — an ancient, battle-scarred warrior of immense stature. Returns as the roster's tank archetype.",
    abilities: [
      "High-HP bruiser kit — soak and retaliate.",
      "Best paired with slow, hard-hitting weapons.",
      "Built to out-last, not out-dance.",
    ],
    tips: [
      "Great against bosses with telegraphed, heavy hits you can simply tank.",
      "Slower recovery means spacing and patience matter more than aggression.",
    ],
    image: "/assets/images/eredirm-mortal-shell-2.png",
    imageAlt: "Eredirm, a playable Shell in Mortal Shell 2",
    imageTitle: "Eredirm – Mortal Shell 2 Shell",
  },
  {
    id: "dommymommy",
    name: "Dommy Mommy",
    epithet: "???",
    role: "Unknown",
    tagline: "Community-identified Shell — kit and lore pending.",
    desc: "Community-identified as 'Dommy Mommy'. Official kit pending.",
    signature: "Not yet documented.",
    location: "Not yet revealed.",
    status: "TBA",
    playstyle: "Pending official reveal.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/dommy-mommy-mortal-shell-2.png",
    imageAlt: "Dommy Mommy, a playable Shell in Mortal Shell 2",
    imageTitle: "Dommy Mommy – Mortal Shell 2 Shell",
  },
  {
    id: "sester",
    name: "Sester Mask",
    epithet: "???",
    role: "Unknown (Dark fantasy / Mystic)",
    tagline: "A cultist in a smiling mask — dark-fantasy mysticism, abilities still unknown.",
    desc: "Dark-fantasy mysticism: pale smiling mask, branch-crown, occult aesthetic. Combat kit still unconfirmed.",
    signature: "Visual confirmed: pale smiling mask, branch/thorn crown, occult aesthetic.",
    location: "Confirmed via footage; precise in-game area TBD.",
    status: "Confirmed",
    playstyle:
      "Visual suggests a cultist or occultist archetype, but combat identity and signature abilities are unconfirmed — treat any kit description as speculation.",
    lore:
      "Little is known. The disturbing mask and branch-crown point to a figure of ritual and devotion, possibly tied to the game's occult undercurrents.",
    abilities: [
      "Visual: pale smiling mask, branch-crown, occult aesthetic.",
      "Combat kit: to be revealed.",
    ],
    tips: ["Watch for an occult / summon-themed kit based on the mask motif once details drop."],
    image: "/assets/images/sester-mask-mortal-shell-2.png",
    imageAlt: "Sester Mask, a playable Shell in Mortal Shell 2",
    imageTitle: "Sester Mask – Mortal Shell 2 Shell",
  },
  {
    id: "harros",
    name: "Harros",
    epithet: "The Vassal",
    role: "Balanced / Versatile",
    tagline: "The dependable all-rounder — your first Shell and the safest way to learn the sequel.",
    desc: "Returning from the first game, Harros is the all-rounder — balanced offense and defense with no extreme specialization. The safe pick for learning the sequel's faster, stamina-free combat.",
    signature: "Stone Stun — petrify enemies, locking them in place for free hits.",
    location: "Prologue — your first Shell. Found after meeting the UnderMether. (Lost after the Tar Golem boss in beta.)",
    status: "Beta",
    playstyle:
      "Balanced kit covering offense and defense without specialization. Recommended starter for learning the game's faster, stamina-free combat.",
    lore:
      "Returns from the first Mortal Shell as 'The Vassal' — a common soldier who failed his master. The first body the Harbinger can inhabit.",
    abilities: [
      "Stone Stun — petrify an enemy for free hits.",
      "Balanced stat spread suited to any weapon.",
      "Readable moveset ideal for new players.",
    ],
    tips: [
      "Use him to learn boss patterns before switching to a specialized Shell.",
      "His petrify is great for setting up the game's execution / parry finishers.",
    ],
    image: "/assets/images/harros-mortal-shell-2.png",
    imageAlt: "Harros, a playable Shell in Mortal Shell 2",
    imageTitle: "Harros – Mortal Shell 2 Shell",
  },
  {
    id: "skeletonman",
    name: "Skeleton Man",
    epithet: "???",
    role: "Unknown",
    tagline: "A skeletal warrior archetype — community-identified, kit pending.",
    desc: "Community-identified by his skeletal warrior silhouette. Official kit pending.",
    signature: "Not yet documented.",
    location: "Not yet revealed.",
    status: "TBA",
    playstyle: "Pending official reveal.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/skeleton-man-mortal-shell-2.png",
    imageAlt: "Skeleton Man, a playable Shell in Mortal Shell 2",
    imageTitle: "Skeleton Man – Mortal Shell 2 Shell",
  },
  {
    id: "tial",
    name: "Tial",
    epithet: "The Acolyte",
    role: "Assassin / Speed",
    tagline: "The shadow assassin — fast, aggressive, reward-perfect-dodge hit-and-run.",
    desc: "A shadow assassin: fast, aggressive, built around precise dodging. Clean dodges open bonus offensive windows — ideal for hit-and-run play.",
    signature: "Shadow Strike — gain the Shadow effect, pass through objects, avoid hits, and land a devastating surprise dagger attack.",
    location: "Marrow Keep → Widow's Overlook → Mushroom Village. Body in the village northeast, near Ritual Grounds. (Beta's second Shell.)",
    status: "Beta",
    playstyle:
      "Built around speed and precision. Clean dodges open bonus offensive windows — ideal for out-dancing enemies rather than out-tanking them.",
    lore:
      "Returns as 'The Acolyte' — a fanatical follower of the Old Prisoner, a thief and assassin whose identity was devotion through violence.",
    abilities: [
      "Shadow Strike — phase through objects, avoid hits, land surprise dagger attacks.",
      "Dodge-timed offense windows.",
      "High mobility, low tolerance for mistakes.",
    ],
    tips: [
      "Clean dodges are the key — whiff a dodge and you lose his biggest advantage.",
      "Pairs well with fast weapons and aggressive Tarstones.",
    ],
    image: "/assets/images/tial-mortal-shell-2.png",
    imageAlt: "Tial, a playable Shell in Mortal Shell 2",
    imageTitle: "Tial – Mortal Shell 2 Shell",
  },
  {
    id: "blackmage",
    name: "Black Mage",
    epithet: "???",
    role: "Unknown",
    tagline: "A sorcerer archetype — community-identified, kit pending.",
    desc: "Community-identified as 'Black Mage' — a sorcery / elemental archetype. Official kit pending.",
    signature: "Not yet documented.",
    location: "Not yet revealed.",
    status: "TBA",
    playstyle: "Pending official reveal.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/black-mage-mortal-shell-2.png",
    imageAlt: "Black Mage, a playable Shell in Mortal Shell 2",
    imageTitle: "Black Mage – Mortal Shell 2 Shell",
  },
];

export function getShell(slug: string): Shell | undefined {
  return SHELLS.find((s) => s.id === slug);
}

export const shellSlugs = SHELLS.map((s) => s.id);
