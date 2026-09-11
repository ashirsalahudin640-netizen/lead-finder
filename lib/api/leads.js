import { leads, getLeadById } from "@/lib/mock/leads";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getLead(id) {
  await wait(120);
  return getLeadById(id);
}

export async function getLeads() {
  await wait(120);
  return leads;
}
