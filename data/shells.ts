// ⚠️ 发售前红线：只有 name 字段里 confirmed=true 的名字是官方已公开的；
// 其余 5 个槽位是占位，等 8/20 官方公布后填真实名字，一条都不要编。

export type Shell = {
  id: string;
  name: string;            // 显示名，未确认写 "Shell #N — Name TBD"
  confirmed: boolean;      // 名字是否官方已确认
  role: string;            // 定位，未确认写 "TBD"
  difficulty: string;      // 上手难度，未确认写 "TBD"
  playstyle: string;       // 适合玩法，未确认写 "TBD"
  mechanic: string;        // 已知机制（只写官方/预告确认的）
  buildDirection: string;  // 配装方向，发售前一律 "To be confirmed"
};

export const SHELLS: Shell[] = [
  {
    id: "tiel-the-acolyte",
    name: "Tiel the Acolyte",
    confirmed: true, // 初代角色，续作预告确认回归
    role: "Agile / poison", // ⚠️ 初代定位，续作待核实
    difficulty: "TBD",
    playstyle: "Hit-and-run",
    mechanic: "Returns from Mortal Shell (2020) as one of the original four Shells.",
    buildDirection: "To be confirmed",
  },
  {
    id: "shell-2",
    name: "Shell #2 — Name TBD",
    confirmed: false,
    role: "TBD",
    difficulty: "TBD",
    playstyle: "TBD",
    mechanic: "To be confirmed after launch.",
    buildDirection: "To be confirmed",
  },
  {
    id: "shell-3",
    name: "Shell #3 — Name TBD",
    confirmed: false,
    role: "TBD",
    difficulty: "TBD",
    playstyle: "TBD",
    mechanic: "To be confirmed after launch.",
    buildDirection: "To be confirmed",
  },
  {
    id: "shell-4",
    name: "Shell #4 — Name TBD",
    confirmed: false,
    role: "TBD",
    difficulty: "TBD",
    playstyle: "TBD",
    mechanic: "To be confirmed after launch.",
    buildDirection: "To be confirmed",
  },
  {
    id: "shell-5",
    name: "Shell #5 — Name TBD",
    confirmed: false,
    role: "TBD",
    difficulty: "TBD",
    playstyle: "TBD",
    mechanic: "To be confirmed after launch.",
    buildDirection: "To be confirmed",
  },
  {
    id: "shell-6",
    name: "Shell #6 — Name TBD",
    confirmed: false,
    role: "TBD",
    difficulty: "TBD",
    playstyle: "TBD",
    mechanic: "To be confirmed after launch.",
    buildDirection: "To be confirmed",
  },
  {
    id: "shell-7",
    name: "Shell #7 — Name TBD",
    confirmed: false,
    role: "TBD",
    difficulty: "TBD",
    playstyle: "TBD",
    mechanic: "To be confirmed after launch.",
    buildDirection: "To be confirmed",
  },
  {
    id: "shell-8",
    name: "Shell #8 — Name TBD",
    confirmed: false,
    role: "TBD",
    difficulty: "TBD",
    playstyle: "TBD",
    mechanic: "To be confirmed after launch.",
    buildDirection: "To be confirmed",
  },
];
