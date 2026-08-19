export type Weapon = {
  id: string;
  name: string;
  confirmed: boolean;
  type:
    | "Katana"
    | "Dual Wield"
    | "Axe & Dagger"
    | "Greatsword"
    | "Hammer & Chisel"
    | "Ultra Greatsword"
    | "Longsword"
    | "Mace";
  damageType:
    | "Physical"
    | "Strike"
    | "Slash"
    | "Pierce"
    | "Fire"
    | "Holy"
    | "Slash + Pierce"
    | "Strike + Pierce"
    | "Holy + Slash"
    | "Slash + Holy"
    | "Slash + Strike"
    | "Strike + Fire";
  scaling: string;
  location: string;
  source: string;
  description: string;
  primaryStats: string;
  specialAbility: string;
  obtain: string;
  playstyle: string;
  betaNotes: string;
};

export const WEAPONS: Weapon[] = [
  {
    id: "axatana",
    name: "Axatana",
    confirmed: true,
    type: "Katana",
    damageType: "Slash",
    scaling: "C Dexterity / D Strength",
    location: "Seeping Mire Beacon area, chest in the cave past Mushroom Village",
    source: "Open Beta",
    description:
      "A versatile weapon with two forms that can excel at either single-target damage or crowd control. Swings like a katana in one-hand mode and extends into a longer reach stance.",
    primaryStats:
      "Base damage moderate, swing speed fast. R2 chain builds Bleed on consecutive hits. Two-hand stance trades speed for stagger damage.",
    specialAbility:
      "Hold L2/LT to toggle the extended stance. Extended stance adds range and one free stagger on the first heavy hit, but drains a small amount of stamina per second it stays active.",
    obtain:
      "Chest in the Seeping Mire Beacon cave, beyond the Mushroom Village clearing. Guarded by two frog grunts. You can grab it before the Circle of the Grasping Root fight.",
    playstyle:
      "Pairs best with Tiel and any agile Mortal Shell 2 builds that want a fast, punish-heavy melee option. Strong against low-poise enemies and against bosses with long recovery windows. Avoid trading into tanky golems or flesh brutes.",
    betaNotes:
      "Extended stance does not always stagger certain shield enemies, even on the first hit. Bleed stacks from the R2 chain break once you swap stances. Expect this to be patched at or after launch.",
  },
  {
    id: "axe-and-dagger",
    name: "Axe and Dagger",
    confirmed: true,
    type: "Axe & Dagger",
    damageType: "Slash + Pierce",
    scaling: "C Strength / C Dexterity",
    location: "Village Outskirts beacon, weapon rack in the cottage",
    source: "Open Beta",
    description:
      "An unusual pairing of a simple thieve's tool and a vicious axe from the northern lands. Off-hand dagger interrupts while the main axe chops through armor.",
    primaryStats:
      "Dagger parry frames are generous, axe damage scales with raw Strength. Dual R2 combo loops three hits into a knockdown on light targets.",
    specialAbility:
      "Dagger light attack triggers a free backstab window on enemies whose guard you just broke with the axe heavy. If you land the backstab within 1.5 seconds of the guard break, the dagger applies an extra poison tick.",
    obtain:
      "On the wall weapon rack in the first cottage east of Village Outskirts beacon. You cannot miss it; the room also has a Tarstone fragment chest. Available the moment you reach the first village zone.",
    playstyle:
      "Built for Lazlo or any Shell that likes pressure and off-hand tricks. Pair with poison DOT builds to multiply the dagger's bonus tick. Keep your Shell swap in reserve for the Gloombound Ritualist fight, since its skeletons are vulnerable to the quick backstab chain.",
    betaNotes:
      "Poison tick from the backstab window does not always scale with Tarstone infusions. For now you still want to socket poison independently and treat the dagger tick as bonus rather than the whole build.",
  },
  {
    id: "hallowed-sword",
    name: "Hallowed Sword",
    confirmed: true,
    type: "Greatsword",
    damageType: "Holy + Slash",
    scaling: "B Strength / D Faith",
    location: "Widow's Overlook beacon altar, right in front of the Great Arbiter arena",
    source: "Open Beta",
    description:
      "A two-handed sword with a hollow center that can be used to slash enemies at a moderate speed. Holy tick damage on every heavy swing.",
    primaryStats:
      "One of the highest raw damage two-handers in the Beta. Heavy swing applies a short Holy damage-over-time tick to anything hit by the blade portion.",
    specialAbility:
      "Holding the heavy attack charge past the normal swing point releases a holy shockwave cone in front. The shockwave does half damage but passes through skeletons and illusion clones cleanly.",
    obtain:
      "Pick it up from the altar in front of the Great Arbiter of Flesh arena. You walk right past the altar on the way in, so grab the sword first, activate the Widow's Overlook beacon, then fight the Arbiter. The holy shockwave chews through the Arbiter's first phase.",
    playstyle:
      "Natural pick for Eredrim and other tanky Shells who want big damage swings without giving up crowd control. The shockwave also works well against Vrannic illusions in the later Hall of Illusions encounter. Match it with the tank build or holy-focused variant.",
    betaNotes:
      "Shockwave has no friendly fire damage in the Beta. There is also a reported animation cancel where a Shell swap during the charge window lets you fire the shockwave instantly, which will almost certainly be tuned down at launch.",
  },
  {
    id: "hammer-and-chisel",
    name: "Hammer and Chisel",
    confirmed: true,
    type: "Hammer & Chisel",
    damageType: "Strike + Pierce",
    scaling: "B Strength / E Dexterity",
    location: "Disciple's Grotto, first boss chamber side room",
    source: "Open Beta",
    description:
      "A dual-wielded weapon that can be used to relentlessly attack enemies. The hammer chips poise while the chisel exploits the stagger window.",
    primaryStats:
      "Fast dual-wield light attack chain. Each hit from the hammer builds more poise damage than equivalent fast weapons, and the chisel deals critical damage during enemy stagger animations.",
    specialAbility:
      "Perfect-parry with the chisel instantly breaks the poise of any non-boss humanoid, leaving them open to the chisel critical. The window is tight but more forgiving than a standard parry when timed on an overhead swing.",
    obtain:
      "In the side room of the first chamber in Disciple's Grotto. The chest is behind a breakable wooden wall. You can grab it before the Tar Golem fight, which is exactly the kind of matchup this weapon was designed for.",
    playstyle:
      "Strong with hybrid builds and any Shell that still wants pressure without committing to a pure fast weapon. Relentless attack loops melt poise and hand you criticals against Disciple's Grotto enemies. Pair with a health Seal to sustain the aggressive posture.",
    betaNotes:
      "Chisel critical during stagger sometimes hits twice instead of once against flesh-type enemies. This may be unintended but it makes the weapon extremely strong in the current Beta, so expect the damage number to change on launch day.",
  },
  {
    id: "the-iconoclast",
    name: "The Iconoclast",
    confirmed: true,
    type: "Ultra Greatsword",
    damageType: "Slash + Strike",
    scaling: "S Strength / E Dexterity",
    location: "Sunken Village farm section, behind the barn after the Wandering Shepherd fight",
    source: "Open Beta",
    description:
      "Exceptionally light for a two-hander, it was once held by a seedbearer of great renown. Long reach and punishing damage on every single swing.",
    primaryStats:
      "Highest Strength scaling confirmed in the Beta. Swing speed is slow but manageable for an ultra greatsword due to the weight-saving enchantment. Every hit knocks back non-boss enemies.",
    specialAbility:
      "Running attack does 2x stagger damage if it connects with the first 20 percent of the swing arc. You get this buff consistently by lining up a straight charge at a group of mobs or a boss doing a long animation.",
    obtain:
      "Behind the barn in Sunken Village farm section. You have to beat The Wandering Shepherd first, and then the wooden bar across the barn back door snaps automatically. The chest with The Iconoclast sits next to a sheep hex cure station.",
    playstyle:
      "Made for pure Strength builds on Lazlo or Eredrim. The reach lets you punish Magdalena during her flame spin outer edge and hit Vrannic clones without walking into his orb spread. Slot into the DPS Mortal Shell 2 builds if you favor slow, perfect swings over fast combo chains.",
    betaNotes:
      "Weight enchantment currently also reduces the stamina cost of rolling while the weapon is two-handed, which was not the behavior in pre-release preview footage. Either this is a real change or a bug that will be patched out, so do not build around the reduced roll cost just yet.",
  },
  {
    id: "martyrs-blade",
    name: "Martyr's Blade",
    confirmed: true,
    type: "Longsword",
    damageType: "Slash + Holy",
    scaling: "B Dexterity / C Faith",
    location: "Sunken Village endgame chest, after Magdalena arena",
    source: "Open Beta",
    description:
      "A two-handed sword that deals a massive amount of damage in one heavy swing. Despite the name, one-handed use is strong and opens up shield and seal combinations.",
    primaryStats:
      "Good all-rounder. One-hand mode trades raw damage for versatility and pairs with every Shell's Seal slot. Two-hand heavy swing is the real payoff, dealing 35 percent extra when your Shell health is below 30 percent.",
    specialAbility:
      "Low-health payoff. If you drop below 30 percent Shell health, the blade glows pale gold and all heavy attacks gain bonus damage. The bonus ends when you recover the Shell or swap out. Combined with the low-health threshold seal, this weapon turns bad trades into kill windows.",
    obtain:
      "Chest in the room after the Magdalena fight, at the end of the Sunken Village Beta campaign. You cannot miss it; the door locks behind you once the boss ends and the chest is the only thing in the room.",
    playstyle:
      "Perfect for players who want a balanced weapon that also rewards clutch aggression. Slot it into a hybrid build or pair with an assassin-style agile setup for the low-health burst. Also a strong pick if you want one weapon to carry you from the middle bosses all the way to the Vrannic fight.",
    betaNotes:
      "Glow timer for the low-health bonus currently persists for 10 seconds even after you recover Shell health through a shrine. This extra carryover lets you chain the bonus from one fight into another if you grab a shrine on the way. Assume this carryover gets patched out before release.",
  },
  {
    id: "smoldering-mace",
    name: "Smoldering Mace",
    confirmed: true,
    type: "Mace",
    damageType: "Strike + Fire",
    scaling: "B Strength / D Fire",
    location: "Hall of Illusions side corridor, left of the second illusion room",
    source: "Open Beta",
    description:
      "A weapon with a long reach that can be used for disposing of groups of enemies due to its wide swings. Head of the mace glows with internal fire and leaves a burn stack.",
    primaryStats:
      "Longest reach for a single-handed blunt weapon in the Beta. Heavy swing burns each target caught in the arc for 3 stacked ticks of fire damage.",
    specialAbility:
      "Charged heavy attack plants a fire AOE patch on the ground for 4 seconds. Any enemy that walks into the patch takes burn stacks while standing. Combine with Tar Golem loot's burning seal and the patch melts most trash in seconds.",
    obtain:
      "Down the left corridor of the second illusion room in Hall of Illusions. The corridor is behind a false mirror. You can access this before Vrannic the Grand Illusionist. Just hug the left wall once the second illusion trio spawns and a mirror will open.",
    playstyle:
      "Strong in both pure tank builds and crowd-control focused hybrid setups. The AOE patch also works well for clearing Vrannic illusions while you track down the real boss. Pair with Lazlo or Eredrim when you need to control a room instead of bursting a single target.",
    betaNotes:
      "Fire AOE patch currently burns illusion clones for full damage, which is why the weapon dominates that encounter. If Cold Symmetry patches illusions to ignore ground effects, the Smoldering Mace drops a tier in that fight. The long reach and burn stacks will still be good everywhere else.",
  },
];
