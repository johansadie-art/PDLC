export type Tone = "indigo" | "success" | "warn" | "error";

export type ListItem = { label?: string; text: string };

export type CardItem = {
  title: string;
  badge?: string;
  from?: string;
  owns?: string;
  body: string;
  accent?: string;
};

export type StatItem = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
};

export type StepItem = { id: string; title: string; text: string };

export type Block =
  | { type: "lead"; text: string }
  | { type: "prose"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; style?: "bullet" | "number"; items: ListItem[] }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
      caption?: string;
      highlightLast?: boolean;
    }
  | { type: "callout"; tone?: Tone; title?: string; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "stats"; items: StatItem[] }
  | { type: "cards"; items: CardItem[]; columns?: 2 | 3 }
  | { type: "steps"; items: StepItem[] }
  | { type: "diagram"; key: string; caption?: string };

export type Section = {
  id: string;
  marker: string;
  title: string;
  eyebrow?: string;
  tone?: "default" | "deep" | "panel";
  blocks: Block[];
};

export type Part = {
  index: string;
  id: string;
  title: string;
  subtitle?: string;
  sections: Section[];
};
