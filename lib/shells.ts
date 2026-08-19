/* ============================================================
   Mortal Shell 2 — Shell（躯壳）共享数据
   站点所有 Shell 页面（列表 + 详情 + 关系轮图）统一从这里读取。
   最后更新：2026-08-19，按 Open Beta 实测补全 8 个 Shell 的 playstyle 与 abilities。
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
    desc: "Proxima is a versatile all-rounder in Mortal Shell 2 built around the Biosampler hook, passive damage mitigation, and Lightning/Stasis crowd control — the easiest Shell to learn and a strong early-game pick.",
    signature: "Grants a passive 15% base chance to mitigate incoming melee or ranged damage.",
    location: "Slightly northeast from the Blackridge Pass Beacon.",
    status: "Confirmed",
    playstyle:
      "A versatile hybrid built around the Biosampler — a hook that drags enemies to you (or pulls you to them) — plus strong passive damage mitigation that can heavily reduce incoming hits and even prevent stagger. Lightning damage and Stasis stacks slow everything down, giving her real crowd control and AoE for mob fights, while Grafted Armor rewards aggressive play right after dodges. She doesn't fit a single archetype: she's an all-rounder with utility and survivability, the easiest Shell to learn, and an excellent early-game pick.",
    lore: "Lore for Proxima is being added as we complete the full release playthrough — check back after launch.",
    abilities: [
      "Biosampler — a hook that drags enemies to you or pulls you to them.",
      "Passive damage mitigation that reduces incoming hits and can prevent stagger.",
      "Lightning damage and Stasis stacks slow enemies for crowd control and AoE.",
    ],
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
    desc: "Tiel is a shadow assassin in Mortal Shell 2 who rewards perfect dodges with bonus offensive windows — fast, aggressive, and lethal in hit-and-run play.",
    signature: "Triggers distinct invulnerability or evasion frames when executing a last-second dash right before enemy impact.",
    location: "From the Widow's Overlook Beacon, head southeast to reach the Graveyard.",
    status: "Confirmed",
    playstyle:
      "One of the fastest Shells in the game. Shadow Strike lets you dip into stealth, phase through attacks, and reappear with a devastating dagger strike, while Shadow Dash keeps you untouchable and staggers pursuers. High crit rate and crit damage, Poison stacks from the Bonding tree, and near-instant charge refunds make him a true hit-and-run assassin: strike, detonate, vanish, repeat. He out-dances enemies rather than out-tanks them — and punishes mistakes hard.",
    lore: "Lore for Tiel is being added as we complete the full release playthrough — check back after launch.",
    abilities: [
      "Shadow Strike — dip into stealth, phase through attacks, and reappear with a devastating dagger strike.",
      "Shadow Dash — stay untouchable while staggering pursuing enemies.",
      "High crit rate plus Poison stacks from the Bonding tree for detonate-and-vanish combos.",
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
    tagline: "Gragu is a blood-fueled berserker in Mortal Shell 2 who trades health for heavy fire damage and burns down groups with flame AoE — one of the safest boss-killers in the roster.",
    desc: "Gragu is a blood-fueled berserker in Mortal Shell 2 who trades health for heavy fire damage and burns down groups with flame AoE — one of the safest boss-killers in the roster.",
    signature: "Charges a devastating heavy fist punch that triggers a severe stagger and heavy impact damage.",
    location: "Pick up the Heart of Vatra from the temple at the far east side of the map, then give the Heart to Gragu in the tavern.",
    status: "Confirmed",
    playstyle:
      "A berserker who pays with his own blood: Gragu's strongest options spend health for heavy damage, making him high-risk, high-reward. His flame kit burns down groups — AoE fire inflicts Inflamed and can interrupt enemy attack animations — while scaled-up single-target strikes make him one of the safest boss-killers in the roster. The catch is consistency: when cooldowns are down or your HP runs low, his weaknesses show. Best for aggressive players who enjoy resource management.",
    lore: "Lore for Gragu is being added as we complete the full release playthrough — check back after launch.",
    abilities: [
      "Blood-cost heavy damage — strongest options spend health for big payoffs.",
      "Flame AoE kit inflicts Inflamed and can interrupt enemy attack animations.",
      "Scaled-up single-target strikes make him one of the safest boss-killers in the roster.",
    ],
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
    desc: "Eredrim is a heavy tank in Mortal Shell 2 who trades speed for raw durability and punishing melee — he soaks damage and answers with massive deliberate strikes.",
    signature: "Executes enemies on low health and gains permanent combat stacks that reset upon resting or being severed.",
    location: "Defeat the boss at the center of the Citadel of Penance.",
    status: "Confirmed",
    playstyle:
      "The roster's tank. Eredrim trades speed for a massive health pool and hardening durability — he can simply eat hits other Shells must dodge. Shoulder Bash breaks into enemy lines with an area break shockwave, Executioner finishes low-HP enemies, and ripostes stack Slaughterer for fast mob clears. He rewards patience, spacing, and trading: weather the boss, then answer with massive, deliberate strikes. The most forgiving Shell for a first playthrough.",
    lore: "Lore for Eredrim is being added as we complete the full release playthrough — check back after launch.",
    abilities: [
      "Shoulder Bash — break into enemy lines with an area break shockwave.",
      "Executioner — finish low-HP enemies on the spot.",
      "Ripostes stack Slaughterer for fast mob clears.",
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
    tagline: "Smert is a time-bending monk in Mortal Shell 2 who stops time to create free attack windows, regenerates health through his strikes, and detonates Chaos stacks for huge payoffs.",
    desc: "Smert is a time-bending monk in Mortal Shell 2 who stops time to create free attack windows, regenerates health through his strikes, and detonates Chaos stacks for huge payoffs.",
    signature: "Halts time temporarily to enter an unarmed combat stance, storing up Chaos stacks that detonate when normal time resumes.",
    location: "Fill up the 3 small pools of blood near the Outskirts of Nochte Beacon by defeating enemies in the pools or by offering your own blood.",
    status: "Confirmed",
    playstyle:
      "A time-bending monk built around Miracle — Smert can stop and manipulate time to create free attack windows no other Shell can replicate. Fight Stance regenerates health from your attacks, giving him outstanding sustain in long boss fights, and unarmed Chaos stacks detonate for huge payoffs you can push even further at the cost of your own health. High reward with built-in recovery: exotic mechanics, but genuinely beginner-friendly.",
    lore: "Lore for Smert is being added as we complete the full release playthrough — check back after launch.",
    abilities: [
      "Miracle — stop and manipulate time to create free attack windows no other Shell can replicate.",
      "Fight Stance — regenerate health from your own attacks for outstanding long-fight sustain.",
      "Unarmed Chaos stacks — detonate for huge payoffs, pushable further at the cost of your own health.",
    ],
    tips: [],
    image: "/assets/images/smert-mortal-shell-2.png",
    imageAlt: "Smert, a playable Shell in Mortal Shell 2",
    imageTitle: "Smert – Mortal Shell 2 Shell",
  },
  {
    id: "sariel",
    name: "Sariel",
    role: "Thorn Tank / Reflect",
    tagline: "Sariel is a cursed thorn-tank in Mortal Shell 2 who converts damage taken into recoverable grey health and reflects enemy melee hits — the highest skill ceiling on the roster.",
    desc: "Sariel is a cursed thorn-tank in Mortal Shell 2 who converts damage taken into recoverable grey health and reflects enemy melee hits — the highest skill ceiling on the roster.",
    signature: "Expels tracking parasitic thorns that hunt close targets and inflict status pain.",
    location: "Defeat Sariel at the shown location, then follow him into the dungeon. At the final encounter arena, destroy the 4 stone tablets or he will keep respawning.",
    status: "Confirmed",
    playstyle:
      "A cursed thorn-tank. Sariel's Pain mechanic converts damage taken into recoverable grey health, and his parasitic thorns apply Curse — a debuff that can nullify or outright reflect enemy melee damage. Play him well and he feels nearly unkillable, with dodge speed scaling as Pain builds; take a clean hit, though, and built-up Pain is lost for good. The highest skill ceiling on the roster — invincible in the right hands, punishing in the wrong ones.",
    lore: "Lore for Sariel is being added as we complete the full release playthrough — check back after launch.",
    abilities: [
      "Pain — convert damage taken into recoverable grey health.",
      "Parasitic thorns apply Curse — nullify or outright reflect enemy melee damage.",
      "Dodge speed scales as Pain builds, but a clean hit drops built-up Pain for good.",
    ],
    tips: [],
    image: "/assets/images/sariel-mortal-shell-2.png",
    imageAlt: "Sariel, a playable Shell in Mortal Shell 2",
    imageTitle: "Sariel – Mortal Shell 2 Shell",
  },
  {
    id: "lazlo",
    name: "Lazlo",
    role: "Tank / Heat",
    tagline: "Lazlo is a heavy-armor tank in Mortal Shell 2 who soaks big hits, builds Heat into an overheat damage spike, and vents it as a flame shockwave for AoE clears.",
    desc: "Lazlo is a heavy-armor tank in Mortal Shell 2 who soaks big hits, builds Heat into an overheat damage spike, and vents it as a flame shockwave for AoE clears.",
    signature: "Heats up armor to release a thermal shockwave, though overuse risks an Overheat status that triggers Burn stacks.",
    location: "Behind the miniboss in the Royal Crypt of Mammon.",
    status: "Confirmed",
    playstyle:
      "A heavy-armor Justiciar and the roster's traditional tank — dependable swordplay built on fundamentals rather than gimmicks. Lazlo soaks heavy hits, builds Heat as he fights, and can push it into an overheat damage spike or vent it as a shockwave of flame for AoE clears, finishing low-HP enemies with ease. Straightforward, forgiving melee with real burst — you just have to survive long enough to unlock him.",
    lore: "Lore for Lazlo is being added as we complete the full release playthrough — check back after launch.",
    abilities: [
      "Heat buildup — push into an overheat damage spike for burst.",
      "Vent Heat as a shockwave of flame for AoE clears and finishing low-HP enemies.",
      "Heavy-armor soak with dependable swordplay fundamentals.",
    ],
    tips: [],
    image: "/assets/images/lazlo-mortal-shell-2.png",
    imageAlt: "Lazlo, a playable Shell in Mortal Shell 2",
    imageTitle: "Lazlo – Mortal Shell 2 Shell",
  },
  {
    id: "genessa",
    name: "Genessa",
    role: "Summoner / Control",
    tagline: "Genessa is a summoner in Mortal Shell 2 who fights through her Faithful Doubles — clones that attack and crowd-control on her behalf — with a second-chance mechanic that makes her one of the most forgiving Shells.",
    desc: "Genessa is a summoner in Mortal Shell 2 who fights through her Faithful Doubles — clones that attack and crowd-control on her behalf — with a second-chance mechanic that makes her one of the most forgiving Shells.",
    signature: "Automatically splits or triggers an alter-ego effect when fatal health is reached.",
    location: "First get the Sester's Censer from the dungeon near the Athen, then take it to Genessa in Marrow Keep.",
    status: "Confirmed",
    playstyle:
      "A summoner who fights through her Faithful Doubles. Genessa spends Resolve to create clones that attack on her behalf and apply status effects such as Stasis, letting her control groups instead of dueling them head-on. Duality gives her a second chance — on death she becomes 'Stray' rather than fully severing — and a solid health pool rounds out one of the most forgiving kits in the game. Excellent for soulslike beginners and CC-focused play.",
    lore: "Lore for Genessa is being added as we complete the full release playthrough — check back after launch.",
    abilities: [
      "Faithful Doubles — spend Resolve to create clones that attack on her behalf.",
      "Doubles apply status effects such as Stasis for group control.",
      "Duality — on death, become 'Stray' instead of fully severing, a built-in second chance.",
    ],
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
