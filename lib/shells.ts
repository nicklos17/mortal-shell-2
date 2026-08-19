/* ============================================================
   Mortal Shell 2 — Shell（躯壳）共享数据
   站点所有 Shell 页面（列表 + 详情 + 关系轮图）统一从这里读取。
   最后更新：2026-08-19，按 Open Beta 实测补全 8 个 Shell 的 playstyle。
   ============================================================ */

export type Shell = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  desc: string;
  signature: string;
  location: string;
  status: "Confirmed" | "Beta" | "TBA";
  prologueOnly?: boolean;
  playstyle: string;
  lore: string;
  abilities: string[];
  tips: string[];
  image: string;
  imageAlt: string;
  imageTitle: string;
};

export const SHELLS: Shell[] = [
  {
    id: "proxima",
    name: "Proxima",
    role: "All-rounder / Control",
    tagline: "First shell shown in the reveal trailer — kit and lore pending.",
    desc: "A versatile all-rounder built around the Biosampler hook, passive damage mitigation, and Lightning/Stasis crowd control — the easiest Shell to learn and an excellent early-game pick.",
    signature: "Not yet documented.",
    location: "Slightly northeast from the Blackridge Pass Beacon.",
    status: "Confirmed",
    playstyle:
      "A versatile hybrid built around the Biosampler — a hook that drags enemies to you (or pulls you to them) — plus strong passive damage mitigation that can heavily reduce incoming hits and even prevent stagger. Lightning damage and Stasis stacks slow everything down, giving her real crowd control and AoE for mob fights, while Grafted Armor rewards aggressive play right after dodges. She doesn't fit a single archetype: she's an all-rounder with utility and survivability, the easiest Shell to learn, and an excellent early-game pick.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/proxima-mortal-shell-2.png",
    imageAlt: "Proxima, a playable Shell in Mortal Shell 2",
    imageTitle: "Proxima – Mortal Shell 2 Shell",
  },
  {
    id: "tiel",
    name: "Tiel",
    role: "Assassin / Speed",
    tagline: "The shadow assassin — fast, aggressive, rewards perfect dodge hit-and-run.",
    desc: "A shadow assassin: fast, aggressive, built around precise dodging. Clean dodges open bonus offensive windows — ideal for hit-and-run play.",
    signature: "Shadow Strike — gain the Shadow effect, pass through objects, avoid hits, and land a devastating surprise dagger attack.",
    location: "From the Widow's Overlook Beacon, head southeast to reach the Graveyard.",
    status: "Confirmed",
    playstyle:
      "One of the fastest Shells in the game. Shadow Strike lets you dip into stealth, phase through attacks, and reappear with a devastating dagger strike, while Shadow Dash keeps you untouchable and staggers pursuers. High crit rate and crit damage, Poison stacks from the Bonding tree, and near-instant charge refunds make him a true hit-and-run assassin: strike, detonate, vanish, repeat. He out-dances enemies rather than out-tanks them — and punishes mistakes hard.",
    lore:
      "Returns from the first Mortal Shell as 'The Acolyte' — a fanatical follower of the Old Prisoner, a thief and assassin whose identity was devotion through violence.",
    abilities: [
      "Shadow Strike — phase through objects, avoid hits, land surprise dagger attacks.",
      "Dodge-timed offense windows.",
      "High mobility, low tolerance for mistakes.",
    ],
    tips: [
      "Clean dodges are the key — whiff a dodge and you lose his biggest advantage.",
      "Pairs well with fast weapons and aggressive Tarstones.",
    ],
    image: "/assets/images/tiel-mortal-shell-2.png",
    imageAlt: "Tiel, a playable Shell in Mortal Shell 2",
    imageTitle: "Tiel – Mortal Shell 2 Shell",
  },
  {
    id: "gragu",
    name: "Gragu",
    role: "Berserker / Fire",
    tagline: "New shell revealed in the official overview — kit pending.",
    desc: "A berserker who pays with his own blood: trades health for heavy damage and burns down groups with flame AoE — one of the safest boss-killers in the roster when his cooldowns are up.",
    signature: "Not yet documented.",
    location: "Pick up the Heart of Vatra from the temple at the far east side of the map, then give the Heart to Gragu in the tavern.",
    status: "Confirmed",
    playstyle:
      "A berserker who pays with his own blood: Gragu's strongest options spend health for heavy damage, making him high-risk, high-reward. His flame kit burns down groups — AoE fire inflicts Inflamed and can interrupt enemy attack animations — while scaled-up single-target strikes make him one of the safest boss-killers in the roster. The catch is consistency: when cooldowns are down or your HP runs low, his weaknesses show. Best for aggressive players who enjoy resource management.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/gragu-mortal-shell-2.png",
    imageAlt: "Gragu, a playable Shell in Mortal Shell 2",
    imageTitle: "Gragu – Mortal Shell 2 Shell",
  },
  {
    id: "eredrim",
    name: "Eredrim",
    role: "Tank / Heavy",
    tagline: "The bulwark — a slow, heavy, high-survivability bruiser.",
    desc: "The roster's bulwark. Trades speed for raw durability and punishing melee — weather a boss instead of out-dancing it.",
    signature: "Heavy, high-HP bruiser — soak damage, answer with massive deliberate strikes.",
    location: "Defeat the boss at the center of the Citadel of Penance.",
    status: "Confirmed",
    playstyle:
      "The roster's tank. Eredrim trades speed for a massive health pool and hardening durability — he can simply eat hits other Shells must dodge. Shoulder Bash breaks into enemy lines with an area break shockwave, Executioner finishes low-HP enemies, and ripostes stack Slaughterer for fast mob clears. He rewards patience, spacing, and trading: weather the boss, then answer with massive, deliberate strikes. The most forgiving Shell for a first playthrough.",
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
    image: "/assets/images/eredrim-mortal-shell-2.png",
    imageAlt: "Eredrim, a playable Shell in Mortal Shell 2",
    imageTitle: "Eredrim – Mortal Shell 2 Shell",
  },
  {
    id: "smert",
    name: "Smert",
    role: "Time Mage / Sustain",
    tagline: "New shell revealed in the official overview — kit pending.",
    desc: "A time-bending monk: stops and manipulates time to create free attack windows, regenerates health through his attacks, and detonates unarmed Chaos stacks for huge payoffs.",
    signature: "Not yet documented.",
    location: "Fill up the 3 small pools of blood near the Outskirts of Nochte Beacon by defeating enemies in the pools or by offering your own blood.",
    status: "Confirmed",
    playstyle:
      "A time-bending monk built around Miracle — Smert can stop and manipulate time to create free attack windows no other Shell can replicate. Fight Stance regenerates health from your attacks, giving him outstanding sustain in long boss fights, and unarmed Chaos stacks detonate for huge payoffs you can push even further at the cost of your own health. High reward with built-in recovery: exotic mechanics, but genuinely beginner-friendly.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/smert-mortal-shell-2.png",
    imageAlt: "Smert, a playable Shell in Mortal Shell 2",
    imageTitle: "Smert – Mortal Shell 2 Shell",
  },
  {
    id: "sariel",
    name: "Sariel",
    role: "Thorn Tank / Reflect",
    tagline: "New shell revealed in the official overview — kit pending.",
    desc: "A cursed thorn-tank: converts damage taken into recoverable grey health through Pain, while his thorns apply a Curse that can nullify or reflect enemy melee damage — the highest skill ceiling on the roster.",
    signature: "Not yet documented.",
    location: "Defeat Sariel at the shown location, then follow him into the dungeon. At the final encounter arena, destroy the 4 stone tablets or he will keep respawning.",
    status: "Confirmed",
    playstyle:
      "A cursed thorn-tank. Sariel's Pain mechanic converts damage taken into recoverable grey health, and his parasitic thorns apply Curse — a debuff that can nullify or outright reflect enemy melee damage. Play him well and he feels nearly unkillable, with dodge speed scaling as Pain builds; take a clean hit, though, and built-up Pain is lost for good. The highest skill ceiling on the roster — invincible in the right hands, punishing in the wrong ones.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/sariel-mortal-shell-2.png",
    imageAlt: "Sariel, a playable Shell in Mortal Shell 2",
    imageTitle: "Sariel – Mortal Shell 2 Shell",
  },
  {
    id: "lazlo",
    name: "Lazlo",
    role: "Tank / Heat",
    tagline: "New shell revealed in the official overview — kit pending.",
    desc: "A heavy-armor Justiciar and the roster's traditional tank: soaks heavy hits, builds Heat into an overheat damage spike or vents it as a flame shockwave for AoE clears.",
    signature: "Not yet documented.",
    location: "Behind the miniboss in the Royal Crypt of Mammon.",
    status: "Confirmed",
    playstyle:
      "A heavy-armor Justiciar and the roster's traditional tank — dependable swordplay built on fundamentals rather than gimmicks. Lazlo soaks heavy hits, builds Heat as he fights, and can push it into an overheat damage spike or vent it as a shockwave of flame for AoE clears, finishing low-HP enemies with ease. Straightforward, forgiving melee with real burst — you just have to survive long enough to unlock him.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/lazlo-mortal-shell-2.png",
    imageAlt: "Lazlo, a playable Shell in Mortal Shell 2",
    imageTitle: "Lazlo – Mortal Shell 2 Shell",
  },
  {
    id: "genessa",
    name: "Genessa",
    role: "Summoner / Control",
    tagline: "New shell revealed in the official overview — kit pending.",
    desc: "A summoner who fights through her Faithful Doubles — clones that attack on her behalf and apply crowd control — with a second-chance mechanic that makes her one of the most forgiving Shells in the game.",
    signature: "Not yet documented.",
    location: "First get the Sester's Censer from the dungeon near the Athen, then take it to Genessa in Marrow Keep.",
    status: "Confirmed",
    playstyle:
      "A summoner who fights through her Faithful Doubles. Genessa spends Resolve to create clones that attack on her behalf and apply status effects such as Stasis, letting her control groups instead of dueling them head-on. Duality gives her a second chance — on death she becomes 'Stray' rather than fully severing — and a solid health pool rounds out one of the most forgiving kits in the game. Excellent for soulslike beginners and CC-focused play.",
    lore: "Not yet revealed.",
    abilities: ["Full kit pending — updating after launch."],
    tips: [],
    image: "/assets/images/genessa-mortal-shell-2.png",
    imageAlt: "Genessa, a playable Shell in Mortal Shell 2",
    imageTitle: "Genessa – Mortal Shell 2 Shell",
  },
];

export function getShell(slug: string): Shell | undefined {
  return SHELLS.find((s) => s.id === slug);
}

export const shellSlugs = SHELLS.map((s) => s.id);
