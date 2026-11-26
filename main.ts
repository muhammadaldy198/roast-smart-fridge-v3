// Roast the Smart Fridge v3 — one-line roast, written fresh for this entry.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const ENTRY = "My smart fridge closed my ticket before I finished typing it, then rated me zero stars for opening it too often.";
// v3: the sting is one beat — the support system turns on its owner, rating ME instead of the food.
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
