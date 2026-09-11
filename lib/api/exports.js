const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function exportLeads(payload) {
  await wait(700);
  return { id: `export-${Date.now()}`, status: "completed", ...payload };
}
