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
    desc: "A Shell identified by the community as 'Black Beard' — a bearded warrior archetype. Official ability details have not been published yet; this profile will be filled in the moment reliable data surfaces.",
    signature: "Not yet documented.",
    location: "Not yet revealed.",
    status: "TBA",
    playstyle:
      "Black Beard is community-identified by his distinctive black beard and warrior silhouette. His exact playstyle and signature abilities have not been published, so this section is intentionally left pending rather than guessed at.",
    lore: "Not yet documented — the identity and backstory of this Shell have not been revealed.",
    abilities: ["Full kit not yet documented — updating after the game ships or as data surfaces."],
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
    desc: "The bulwark of the roster. Eredirm favors a slow, heavy, high-survivability style — trading speed for raw durability and punishing melee. The Shell to wear when you want to weather a boss instead of out-dancing it.",
    signature: "Heavy, high-HP bruiser kit — soak damage and answer with massive, deliberate strikes.",
    location:
      "Not yet revealed. Like all Shells it is hidden somewhere in the open world and claimed by inhabiting the body; exact area will be mapped after the full game ships.",
    status: "Confirmed",
    playstyle:
      "Eredirm trades speed for raw durability and punishing melee. He is the Shell to wear when you want to weather a boss instead of out-dancing it — soak the damage, then answer with massive, deliberate strikes. Expect a slow, committal moveset that rewards patience and spacing over aggression.",
    lore:
      "Known as 'The Venerable' in the first Mortal Shell, Eredirm was an ancient, battle-scarred warrior of immense stature — a fallen figure who carried his wounds and his grudges into death. The sequel keeps him as the roster's heavy / tank archetype.",
    abilities: [
      "Heavy, high-HP bruiser kit — soak damage and answer with massive, deliberate strikes.",
      "Best paired with slow, hard-hitting weapons.",
      "Built to out-last rather than out-dance.",
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
    desc: "A Shell identified by the community as 'Dommy Mommy'. Official ability details have not been published yet; this profile will be filled in the moment reliable data surfaces.",
    signature: "Not yet documented.",
    location: "Not yet revealed.",
    status: "TBA",
    playstyle:
      "The community label 'Dommy Mommy' points to a commanding, possibly domination-themed archetype, but nothing about her kit has been officially confirmed. This section stays pending rather than invented.",
    lore: "Not yet documented — the identity and backstory of this Shell have not been revealed.",
    abilities: ["Full kit not yet documented — updating after the game ships or as data surfaces."],
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
    desc: "A Shell draped in dark fantasy mysticism: its face is hidden behind a pale, unsettlingly smiling human mask, while a complex crown of withered branches or thorn-like protrusions extends from the head. The visual suggests a cultist or occultist archetype, but its exact abilities and formal epithet are still unknown.",
    signature: "Visual confirmed: pale smiling mask, branch/thorn crown, occult aesthetic.",
    location: "Not yet revealed. Confirmed via screenshots/footage; precise in-game area TBD — update pending.",
    status: "Confirmed",
    playstyle:
      "Sester Mask is draped in dark fantasy mysticism: a pale, unsettlingly smiling human mask crowned with withered branches or thorn-like protrusions. The visual suggests a cultist or occultist archetype, but its exact combat identity and signature abilities are still unconfirmed — treat any kit description as speculation until revealed.",
    lore:
      "Little is known about who Sester Mask was in life. The ornate, disturbing mask and branch-crown point to a figure of ritual and devotion — possibly tied to the game's occult undercurrents — but the story has not been revealed.",
    abilities: [
      "Visual confirmed: pale smiling mask, branch/thorn crown, occult aesthetic.",
      "Combat kit and signature ability: to be revealed.",
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
    desc: "Returning from the first Mortal Shell, Harros is the all-rounder — a dependable baseline fighter whose kit covers offense and defense without extreme specialization. The safe pick for learning the sequel's faster, stamina-free combat.",
    signature: "Can petrify (turn to stone) enemies with Stone Stun, locking them in place for free hits.",
    location:
      "Prologue — your very first Shell. Found in the chamber reached right after your first meeting with the UnderMether: interact with the body at its center. (In the beta he is lost after the prologue's Tar Golem boss.)",
    status: "Beta",
    playstyle:
      "Harros is the baseline fighter of Mortal Shell II: a balanced kit that covers offense and defense without extreme specialization. He is the recommended starter for learning the game's faster, stamina-free combat, and a reliable fallback whenever you need a Shell that can do a bit of everything.",
    lore:
      "Harros returns from the first Mortal Shell, where he was 'The Vassal' — a common soldier who failed his master and carried that shame into death. In the sequel he is the first body the Harbinger can inhabit, making him the lens through which most players meet the world.",
    abilities: [
      "Stone Stun — petrify (turn to stone) an enemy, locking it in place for free hits.",
      "Balanced stat spread suited to any weapon.",
      "Reliable, readable moveset ideal for new players.",
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
    desc: "A Shell identified by the community as 'Skeleton Man' — a skeletal warrior archetype. Official ability details have not been published yet; this profile will be filled in the moment reliable data surfaces.",
    signature: "Not yet documented.",
    location: "Not yet revealed.",
    status: "TBA",
    playstyle:
      "Skeleton Man is community-identified by a skeletal warrior silhouette. His exact playstyle and signature abilities have not been published, so this section is intentionally left pending rather than guessed at.",
    lore: "Not yet documented — the identity and backstory of this Shell have not been revealed.",
    abilities: ["Full kit not yet documented — updating after the game ships or as data surfaces."],
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
    desc: "A shadow assassin: fast, aggressive, and built around precise dodging. Land your dodges cleanly and the Acolyte rewards you with bonus offensive windows — ideal for hit-and-run play.",
    signature:
      "Shadow Strike — gains the Shadow effect, can pass through objects, avoid hits, and land a devastating surprise dagger attack.",
    location:
      "After the Prologue, at Marrow Keep: Zhirelle directs you to Widow's Overlook → Mushroom Village. Tial's body lies in the northeast of the village, near the Ritual Grounds Dungeon — the only other Shell available in the beta.",
    status: "Beta",
    playstyle:
      "Tial is built around speed and precision. Land your dodges cleanly and the Acolyte opens bonus offensive windows, making him the ideal Shell for hit-and-run play and players who like to out-dance enemies rather than out-tank them.",
    lore:
      "Returning from the first game as 'The Acolyte', Tial was a fanatical follower of the Old Prisoner — a thief and assassin whose whole identity was devotion through violence. The sequel keeps that shadowy, mobile identity.",
    abilities: [
      "Shadow Strike — gains the Shadow effect, can pass through objects, avoid hits, and land a devastating surprise dagger attack.",
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
    desc: "A Shell identified by the community as 'Black Mage' — a sorcerer archetype. Official ability details have not been published yet; this profile will be filled in the moment reliable data surfaces.",
    signature: "Not yet documented.",
    location: "Not yet revealed.",
    status: "TBA",
    playstyle:
      "The community label 'Black Mage' points to a sorcery / elemental archetype, but nothing about his kit has been officially confirmed. This section stays pending rather than invented.",
    lore: "Not yet documented — the identity and backstory of this Shell have not been revealed.",
    abilities: ["Full kit not yet documented — updating after the game ships or as data surfaces."],
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
