export type Boss = {
  id: string;
  name: string;
  confirmed: boolean;
  region: string;
  weakness: string;
  source: string;
  description: string;
  attacks: string[];
  strategy: string[];
  reward: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Extreme";
};

export const BOSSES: Boss[] = [
  {
    id: "circle-grasping-root",
    name: "Circle of the Grasping Root",
    confirmed: true,
    region: "Seeping Mire Beacon — clearing past Mushroom Village",
    weakness: "Fire damage, focus the frog first before the adds",
    source: "Open Beta gameplay",
    description:
      "A boss made up of a humanoid frog and three melee attackers. The frog sits at the center of the arena while its three allies flank and pressure the player from melee range.",
    attacks: [
      "Frog leaps and slams the ground, creating a shockwave that knocks back anyone in front.",
      "Three melee attackers rush the player in sequence with overhead swings.",
      "Frog croaks and buffs its allies, making their attacks deal extra damage for a short window.",
    ],
    strategy: [
      "Clear the three melee attackers first. They go down quickly with a heavy weapon and reduce the number of directions you need to watch.",
      "Once the adds are down, the frog fights alone. Dodge to the side when it leaps, then punish the recovery with two or three hits.",
      "Use the Hand Cannon to chip the frog from range between melee windows, if Shell health is running low.",
    ],
    reward: "Grasping Root Seal, Tarstone chunk",
    difficulty: "Medium",
  },
  {
    id: "gloombound-ritualist",
    name: "Gloombound Ritualist",
    confirmed: true,
    region: "Sunken area past Village Outskirts beacon",
    weakness: "Quick interrupts, rush down before skeletons spawn",
    source: "Open Beta gameplay",
    description:
      "A boss with a bloody carcass appearance that uses its staff to conjure explosive projectiles and awaken exploding skeletons around the arena.",
    attacks: [
      "Staff slams the ground to summon one to three exploding skeletons that walk toward the player.",
      "Fires an explosive projectile that travels in a slow arc and leaves a burning patch on impact.",
      "Channels a burst wave in a cone in front, knocking back anyone caught inside.",
    ],
    strategy: [
      "Run the boss down immediately. The Ritualist is fragile in melee, and every second you let it cast is another skeleton you have to deal with.",
      "Kite exploding skeletons into the boss or let them fizzle out on their own. Do not get greedy attacking them, since they self-destruct after a timer.",
      "Save a Shell swap or a Harden for the cone wave. It covers a wide angle and cannot be sidestepped cleanly at close range.",
    ],
    reward: "Gloom Staff fragment, Explosive Seal",
    difficulty: "Medium",
  },
  {
    id: "great-arbiter-flesh",
    name: "Great Arbiter of Flesh",
    confirmed: true,
    region: "Open area past Widow's Overlook beacon — before Tiel's corpse",
    weakness: "Backstep punishes, ranged chip during slow windups",
    source: "Open Beta gameplay",
    description:
      "A tall boss that towers over the Harbinger, wielding a two-handed greatsword. This is the gatekeeper fight right before the player reaches Tiel's corpse.",
    attacks: [
      "Slow vertical greatsword slash with a long windup and massive damage on hit.",
      "Horizontal sweep covering a full 180 degrees in front, designed to catch side-dodges.",
      "Raises the sword high and slams it down, creating a shockwave that ripples forward across the ground.",
    ],
    strategy: [
      "Let the boss swing first. The vertical slash has so much windup that you can walk in a full circle around the boss and still reach the back before the animation ends.",
      "Harden through the horizontal sweep if you are out of position, then hit once or twice before pulling back.",
      "Shells with high health or a parry tool shine here. Lazlo and Eredrim trade blows cleanly; Tiel users should dodge and chip from behind.",
    ],
    reward: "Flesh Greatsword, Arbiter Shell Stone",
    difficulty: "Hard",
  },
  {
    id: "magdalena-lady-woods",
    name: "Magdalena, the Lady of the Woods",
    confirmed: true,
    region: "Sunken Village — end of Beta campaign",
    weakness: "Stagger during charge windup, poison DOT stacks",
    source: "Open Beta gameplay",
    description:
      "A boss on a fiery wheelchair that uses high-speed charge and 360-degree flame attacks. Small windows for counterattacks, and the fight punishes players who back off predictably.",
    attacks: [
      "High-speed charge across the arena that leaves a trail of fire behind the wheels.",
      "Spins in place and vents flame in a 360-degree ring, forcing the player back.",
      "Fires a short-range flamethrower burst that lingers and applies burn stacks.",
    ],
    strategy: [
      "Do not dodge straight back during the charge. Strafe diagonally to the side and close in the instant the charge ends. The recovery is long enough for a full combo.",
      "The 360-degree flame ring has a safe window right after it starts rotating. Use a Harden or a Shell swap to close through the edge and get a free punish.",
      "Poison DOT is especially effective here. Stack it once at the start of the fight and let the ticks chew through health while you focus on dodging.",
    ],
    reward: "Magdalena's Wheel Seal, Burning Tarstone",
    difficulty: "Hard",
  },
  {
    id: "tainted-vestige",
    name: "Tainted Vestige",
    confirmed: true,
    region: "Hidden cave near Disciple's Grotto",
    weakness: "Chop attacks, target the roots before the trunk",
    source: "Open Beta gameplay",
    description:
      "A living tree boss with roots growing from its body. Primarily uses its limbs to attack and inflicts burning effects on anyone standing in the wrong patch of floor.",
    attacks: [
      "Root spikes erupt from the ground in a scattered pattern, damaging and rooting anyone caught.",
      "Slams a thick limb forward, leaving a burning patch where it lands.",
      "Whips two side roots in a crisscross pattern across the arena center.",
    ],
    strategy: [
      "Watch the floor for the faint telltale glow before spikes come up. Sidestep once and you are clear.",
      "Stay between the boss and the burning patch. Never back up into a zone already on fire, since the side-root whip will trap you there.",
      "Heavy chopping weapons deal bonus damage to the trunk. Open with a two-handed jump attack whenever the boss finishes a root animation.",
    ],
    reward: "Living Bark Seal, Cure Tarstone",
    difficulty: "Easy",
  },
  {
    id: "tar-golem",
    name: "Tar Golem",
    confirmed: true,
    region: "Disciple's Grotto",
    weakness: "Freeze damage, dodge sideways through combos",
    source: "Open Beta gameplay",
    description:
      "Tar Golem wields two large flaming axes for attacking and is relentless with combos that give little opening. This is the tightest melee test in the Beta content.",
    attacks: [
      "Alternating axe swings, four to five hits in a row with almost no gap between them.",
      "Leaps into the air and slams both axes down, creating a burning radius on impact.",
      "Grabs forward with a flaming hand; if it connects, the player takes big damage and gets thrown back.",
    ],
    strategy: [
      "Dodge sideways through the combo, not back. The axe chain tracks straights; a single side-dodge puts you behind the golem for a punish.",
      "The leap slam has a generous dodge window right as the golem leaves the ground. Roll under and punish the landing recovery.",
      "For the grab, Harden is the safest answer. If you mistime the roll, Hardening through the grab negates the throw and lets you counter immediately.",
    ],
    reward: "Dual Axe of Smoldering Tar, Golem Core Seal",
    difficulty: "Extreme",
  },
  {
    id: "wandering-shepherd",
    name: "The Wandering Shepherd",
    confirmed: true,
    region: "Sunken Village — farm section",
    weakness: "Clear sheep first, interrupt the hex cast",
    source: "Open Beta gameplay",
    description:
      "A boss that attacks by controlling a herd of sheep, manipulating a floating sword, and casting a hex that turns the player into a bipedal sheep.",
    attacks: [
      "Flocks of sheep charge at the player from random angles, dealing chip damage on contact.",
      "Floating sword hovers and fires quick slashes in a straight line.",
      "Shepherd raises a staff and begins casting the sheep hex; if the cast completes, the player loses their Shell and fights in sheep form until cured.",
    ],
    strategy: [
      "Take the sheep out in ones and twos as they spawn. They die fast, and leaving them alive means you dodge sheep, swords, and hexes all at once.",
      "Track the floating sword with your camera. The slashes are narrow and easy to strafe, but they catch players who only watch the Shepherd.",
      "The hex cast is the priority. If you see the staff go up, drop everything and rush the Shepherd. A single hit interrupts the whole channel.",
    ],
    reward: "Shepherd's Crook, Sheep Hex Seal",
    difficulty: "Medium",
  },
  {
    id: "vrannic-grand-illusionist",
    name: "Vrannic, the Grand Illusionist",
    confirmed: true,
    region: "End of Hall of Illusions",
    weakness: "Single-target burst, ignore illusions and find the real Vrannic",
    source: "Open Beta gameplay",
    description:
      "A spell-casting boss that conjures projectiles tracking the player's movements and creates illusions of himself to overwhelm the room.",
    attacks: [
      "Tracking orbs that curve toward the player's position, firing three at a time in staggered timing.",
      "Splits into three or more illusion copies. Only the real Vrannic takes damage and leaves a faint shadow under his feet.",
      "Charges a room-wide beam while all copies chant at once; deal damage to the real Vrannic to cancel the cast.",
    ],
    strategy: [
      "Dodge tracking orbs at the last second. Curving projectiles waste their travel if you move late rather than early.",
      "Find the real Vrannic by watching for the shadow. Illusions do not cast one, and they vanish on a single hit anyway.",
      "The room-wide beam is your opening. Pop burst damage during the long chant. If the beam fires anyway, Harden through the first tick and then roll out of the line.",
    ],
    reward: "Grand Illusionist Staff, Phantasm Seal",
    difficulty: "Extreme",
  },
];
