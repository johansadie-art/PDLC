import type { Part } from "./types";
import { part1 } from "./parts/part1";
import { part2 } from "./parts/part2";
import { part3 } from "./parts/part3";
import { part4 } from "./parts/part4";
import { part5 } from "./parts/part5";
import { part6 } from "./parts/part6";
import { part7 } from "./parts/part7";
import { part8 } from "./parts/part8";
import { part9 } from "./parts/part9";
import { part10 } from "./parts/part10";
import { part11 } from "./parts/part11";
import { part12 } from "./parts/part12";

export const playbook: Part[] = [
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
  part7,
  part8,
  part9,
  part10,
  part11,
  part12,
];

export const railItems = playbook.map((p) => ({
  id: p.id,
  label: `${p.index} · ${p.title}`,
  part: p.title,
}));
