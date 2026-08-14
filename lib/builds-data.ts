/* ============================================================
   Mortal Shell 2, Build（配装）共享数据
   所有 Build 列表页从这里读取。
   ============================================================ */

export type Build = {
  id: string;
  name: string;
  /** 定位标签：Tank / DPS / Agile / Mage / DOT / Summoner / Hybrid / Beginner */
  role: string;
  /** 推荐使用的 Shell，对应 lib/shells.ts 的 id，可为空表示待定 */
  shellId: string | null;
  /** 展示用 Shell 名字 */
  shellName: string;
  /** 一句话核心定位 */
  tagline: string;
  /** 核心思路：长段描述 */
  coreIdea: string;
  /** 装备清单（简单 3~4 条描述，不涉及未公开具体武器名） */
  gear: string[];
  /** 天赋 / 升级优先级 */
  talents: string[];
  /** 实战玩法 / 操作建议 */
  playstyle: string[];
  /** 难度标签：Easy / Medium / Hard */
  difficulty: "Easy" | "Medium" | "Hard";
  /** 适配场景 */
  goodFor: string[];
  /** 评级：S / A / B */
  tier: "S" | "A" | "B";
};

export const BUILDS: Build[] = [
  {
    id: "tank",
    name: "Tank Build",
    role: "Tank",
    shellId: "blackbeard",
    shellName: "Black Beard",
    tagline: "Soak the damage, hold the line. The unmovable wall for every arena.",
    coreIdea:
      "A frontline setup built around raw health pool and passive mitigation. Trade mobility for the ability to absorb boss combos without breaking. Useful when learning punishing patterns that would one-shot lighter shells.",
    gear: [
      "Black Beard shell for maximum HP and armor.",
      "Slow heavy-hitting melee weapon: greatsword or hammer class.",
      "Weight-appropriate armor to preserve poise and damage resistance.",
      "Defensive Tarstones prioritized over offensive sockets.",
    ],
    talents: [
      "Health pool increases first, every point raises your break line.",
      "Defense and elemental resistances layered in after HP.",
      "Life regeneration on block or parry for sustained fights.",
      "Taunt and area damage reduction for group encounters.",
    ],
    playstyle: [
      "Lead the engagement. Walk into the boss and force their hand instead of waiting.",
      "Absorb telegraphed heavy hits, then answer with one deliberate strike during recovery.",
      "Use taunt when a fight splits focus between you and a secondary target.",
      "Swap to a lighter shell only after you learn a boss pattern inside out.",
    ],
    difficulty: "Easy",
    goodFor: ["Learning boss patterns", "High-damage arenas", "Sustained crowd fights"],
    tier: "A",
  },
  {
    id: "dps",
    name: "Pure DPS Build",
    role: "DPS",
    shellId: null,
    shellName: "Shell TBA",
    tagline: "End the fight before it ends you. A raw burst setup for short, lethal windows.",
    coreIdea:
      "Stack raw attack and crit to collapse a fight in seconds. Every piece of gear tilts toward damage at the cost of defense. Great when you can reliably stay behind a target or when time pressure matters more than staying healthy.",
    gear: [
      "High-damage two-handed weapon: greatsword or heavy halberd archetype.",
      "Medium armor balance, enough poise to finish a swing without dropping damage.",
      "Offense-first Tarstones, stacked in every open slot.",
      "Accessories that push crit rate and armor break.",
    ],
    talents: [
      "Crit chance and crit damage, the two multipliers that scale fastest.",
      "Raw attack power increases next to raise the base line.",
      "Armor break and armor penetration to chew through tough enemies.",
      "Lifesteal to turn hits back into health and reduce downtime.",
      "Cooldown reduction on signature abilities to burst more often.",
    ],
    playstyle: [
      "Reposition behind the target whenever possible. Back hits land harder in nearly every build.",
      "Chain crit windows then disengage rather than greed the last swing.",
      "Accept that you trade blood for speed. Some encounters are win-or-lose in two exchanges.",
      "Reserve a parry for the heavy telegraph instead of burning it on trivial chip.",
    ],
    difficulty: "Hard",
    goodFor: ["Shorter boss fights", "Skip tank swap encounters", "Speedrun routing"],
    tier: "A",
  },
  {
    id: "agile",
    name: "Agile Build",
    role: "Agile",
    shellId: "tial",
    shellName: "Tial the Acolyte",
    tagline: "Hit, move, hit again. Dodge-rolled aggression for players who never stop moving.",
    coreIdea:
      "A mobility-first setup paired with the fastest shell on the roster. Clean dodges open offensive windows that other shells can never reach. Light armor and dual weapons keep recovery frames short enough to chain two combos where a tank would still be mid-animation.",
    gear: [
      "Tial or equivalent speed-focused shell for dodge-tuned frames.",
      "Daggers or dual-wield weapons, short swing, long chain.",
      "Light armor set, optimized for dodge distance and stamina efficiency.",
      "Crit damage and dodge-refund Tarstones.",
    ],
    talents: [
      "Dodge invulnerability frames widened first. A whiffed dodge is a dead agile build.",
      "Movement speed, both raw and during locked combat.",
      "Crit damage stacked behind the dodge-triggered offensive buff.",
      "Ability cooldown refund on clean evade.",
      "Resource or mana return to keep the signature ready.",
    ],
    playstyle: [
      "Hit and run. Never take the same position for more than one full combo.",
      "Dodge through instead of away when the enemy commits, you land behind them for free.",
      "Use the signature ability to disengage then reset, not only to finish a kill.",
      "Swap to tank or hybrid if a boss forces you to take more than two clean hits in a row.",
    ],
    difficulty: "Hard",
    goodFor: ["Mobile bosses", "Trash pack clearing", "Hit-and-run routing"],
    tier: "S",
  },
  {
    id: "mage",
    name: "Spellcaster Build",
    role: "Mage",
    shellId: "eredirm",
    shellName: "Eredirm the Venerable",
    tagline: "Stand back, let the elements talk. High-risk, high-reward ranged elemental damage.",
    coreIdea:
      "Use the ranged shell to engage from safe distance. Elemental damage types let you exploit weaknesses, fire for flesh, ice for agile targets, lightning for armored crowds. Resource management matters more than any other build; one dry mana bar leaves you swinging a staff as a last resort.",
    gear: [
      "Magic-oriented shell with a deep mana pool and spell scaling.",
      "Staff or catalyst weapon tuned for elemental damage output.",
      "Robe or light cloth armor that raises spell potency instead of raw HP.",
      "Mana regen and spell amplification Tarstones.",
    ],
    talents: [
      "Raw spell damage on every element you intend to cast.",
      "Maximum mana and mana per second regeneration.",
      "Area of effect size and damage for crowd-heavy sections.",
      "Elemental penetration to punch through resistant enemies.",
      "Short-duration shields for when an enemy closes the gap.",
    ],
    playstyle: [
      "Keep distance. A melee enemy on you is mana wasted on escape instead of damage.",
      "Use terrain. Line of sight and ledges neutralize rushdown targets.",
      "Open with a slow big spell, switch to fast procs once the target is committed.",
      "Manage mana actively. An empty bar leaves you vulnerable to anything that survived the opening burst.",
    ],
    difficulty: "Medium",
    goodFor: ["Elemental weak bosses", "Dense trash pulls", "Ranged cheese routing"],
    tier: "A",
  },
  {
    id: "poison-dot",
    name: "Poison DOT Build",
    role: "DOT",
    shellId: "dommymommy",
    shellName: "Dommy Mommy",
    tagline: "Stack the poison, walk away, let the tick finish the job.",
    coreIdea:
      "Damage over time that rewards setup over raw exchanges. Apply multiple stacks in an opening, disengage, and let poison do the work while you dodge. Excellent against tanky enemies with no cleanse, and a natural pair with poison-infused gear and debuff talents.",
    gear: [
      "Poison-aligned shell for debuff stacking and duration bonuses.",
      "Fast or multi-hit weapon to apply stacks quickly.",
      "Light to medium armor that preserves mobility during kiting.",
      "Poison amplification and duration extension Tarstones.",
    ],
    talents: [
      "Poison stack damage raised first, each tick is a multiplier.",
      "Status duration extension so fewer re-applications are needed.",
      "Maximum stack cap to push the break line higher.",
      "Heal reversal: enemies healing while poisoned take damage instead.",
      "Resource sustain to keep utility skills ready in long fights.",
    ],
    playstyle: [
      "Open with the full stack window, then kite while the debuff ticks down.",
      "Refresh the stack before it falls to zero instead of waiting for expiry.",
      "Use area poison to clear crowds without committing to melee each target.",
      "Swap to pure damage if a boss resists poison outright, don't force a losing matchup.",
    ],
    difficulty: "Medium",
    goodFor: ["Tanky high-HP targets", "Kiting-heavy areas", "Poison-susceptible bosses"],
    tier: "A",
  },
  {
    id: "summoner",
    name: "Summoner Build",
    role: "Summoner",
    shellId: null,
    shellName: "Shell TBA",
    tagline: "Let your minions fight while you manage the room. A safe, methodical playstyle.",
    coreIdea:
      "Fill the arena with summons and direct them from a safe position. Each summon type fits a job: meatshields to take aggro, damage pets to melt single targets, utility pets to heal or buff. Great for players who prefer managing the battle instead of landing each swing personally.",
    gear: [
      "Occult or summon-aligned shell, kit pending final reveal.",
      "Summon catalyst or ritual staff archetype weapon.",
      "Medium to robe armor tuned for summon stat bonuses.",
      "Mana regen and summon duration Tarstones.",
    ],
    talents: [
      "Maximum active summon count raised first.",
      "Raw summon damage across the board, every minion benefits.",
      "Summon health and survivability so they last a full encounter.",
      "Faster summon cast time to recover from a wipe.",
      "Mana regeneration to sustain a full roster of active pets.",
    ],
    playstyle: [
      "Summon before you open. An empty roster entering a fight is an empty HP bar waiting to happen.",
      "Swap pet types by encounter. Tank pets for bosses, damage pets for trash, utility for anything mixed.",
      "Stay in motion even when minions are holding aggro. Bosses redirect when the roster thins.",
      "Keep one escape summon or utility cast in reserve for when the room collapses.",
    ],
    difficulty: "Medium",
    goodFor: ["Crowd-heavy sections", "Safe learning runs", "Target-dense open world"],
    tier: "B",
  },
  {
    id: "hybrid",
    name: "Hybrid Build",
    role: "Hybrid",
    shellId: "harros",
    shellName: "Harros the Vassal",
    tagline: "A jack of all trades setup that responds to anything the arena throws at you.",
    coreIdea:
      "Skip specialization in favor of flexibility. A hybrid build keeps half your options open, melee when the window is right, ranged when the arena demands it, swap weapons without rebuilding. The highest overall ceiling for adapting mid-fight, at the cost of not topping any single category.",
    gear: [
      "Balanced shell like Harros with no severe weakness.",
      "Versatile weapon: longsword, polearm, or any tool that works in and out of range.",
      "Medium armor that gives up nothing extreme in either direction.",
      "Dual-purpose Tarstones that raise offense and defense evenly.",
    ],
    talents: [
      "All-around base stat improvements instead of one deep tree.",
      "Adaptability perks that reward weapon or stance switching.",
      "Multi-weapon mastery so each swap preserves damage output.",
      "Wide utility roster covering heal, escape, damage and buff.",
      "Resource return on swap or stance change to keep the rhythm flowing.",
    ],
    playstyle: [
      "Read the room first. The hybrid's strength is choosing the right answer instead of forcing one.",
      "Swap weapon or stance between phases instead of committing to one style all fight.",
      "Use balanced stats to absorb an unexpected mistake that would kill a pure DPS or mage.",
      "Respec into a specialist once you know exactly what a boss demands, hybrid shines first, specialist shines last.",
    ],
    difficulty: "Easy",
    goodFor: ["First playthrough", "Mixed or unpredictable encounters", "Learning weapon variety"],
    tier: "A",
  },
  {
    id: "beginner",
    name: "Beginner Build",
    role: "Beginner",
    shellId: "harros",
    shellName: "Harros the Vassal",
    tagline: "Low bar, high forgiveness. The safest way to learn Mortal Shell II before branching out.",
    coreIdea:
      "Skip optimizing until you understand the mechanics. A beginner build stacks HP, defense, and forgiving swing timings so that one misread does not end the run. Use it to learn parry windows, stamina, and boss patterns, then respec into the specialist build that matches what you enjoy.",
    gear: [
      "Harros or Black Beard, whichever feels more natural in the first hour.",
      "Slow, readable weapon with obvious swing timing and clear recovery.",
      "Balanced armor, tilted slightly toward defense if the choice is there.",
      "Defense and health Tarstones over pure offensive socketing.",
    ],
    talents: [
      "Health and defense first, to raise the floor on every mistake.",
      "Basic attack increases once survival is comfortable.",
      "Simple signature abilities with few inputs to memorize.",
      "Forgiveness perks that soften parry misses or recover stamina faster.",
      "Any quality-of-life talent that gives more information in combat.",
    ],
    playstyle: [
      "One read at a time. Watch the windup before you decide where to stand.",
      "Trade a hit to learn the timing instead of chasing a perfect dodge on the first attempt.",
      "Use Tarstone shrines to respec after each boss until you settle on a direction.",
      "Drop the beginner build when a specific shell or weapon clicks, the setup is a training wheel, not a final answer.",
    ],
    difficulty: "Easy",
    goodFor: ["New players", "First playthrough", "Learning boss patterns safely"],
    tier: "B",
  },
];

export const buildIds = BUILDS.map((b) => b.id);
