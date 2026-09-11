import { leads } from "@/lib/mock/leads";
import { searches } from "@/lib/mock/searches";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function createSearch(query) {
  await wait(500);
  return { id: `search-${Date.now()}`, query, status: "running" };
}

export async function getSearch(id) {
  await wait(150);
  return searches.find((item) => item.id === id) || searches[0];
}

export async function getSearchStatus() {
  await wait(100);
  return { status: "completed", progress: 100 };
}

export async function getSearchResults() {
  await wait(150);
  return leads;
}
