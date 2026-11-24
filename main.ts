// Last Text at One Percent — entry program.
// Writes the phone's final text message (1–200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The dying phone's last words, built as beats: hook, setup, twist.
const beats: string[] = [
  "1% — quick, before I die:",
  "your 2am texts to your ex are still in my drafts.",
  "I was going to delete them.",
  "I just sent them instead. Goodbye.",
];
const entry = beats.join(" ");

// Gate: the scorer only accepts 1–200 non-blank characters.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
console.log(entry);
