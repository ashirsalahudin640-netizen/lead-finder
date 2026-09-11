"use client";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function LeadFilters({ filters, setFilters }) {
  const update = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
  return <div className="border-b bg-white p-3 sm:p-4">
    <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
      <div className="relative min-w-0 flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><Input value={filters.q} onChange={(e) => update("q", e.target.value)} placeholder="Search business, category, city..." className="h-11 pl-9" /></div>
      <div className="flex flex-wrap items-center gap-2"><SlidersHorizontal className="hidden h-4 w-4 text-slate-400 sm:block" />
        <Select label="Google" value={filters.google} onChange={(v) => update("google", v)} options={[{ value: "all", label: "All Google" }, { value: "yes", label: "Has Profile" }, { value: "no", label: "No Profile" }]} />
        <Select label="Website" value={filters.website} onChange={(v) => update("website", v)} options={[{ value: "all", label: "All Websites" }, { value: "yes", label: "Has Website" }, { value: "no", label: "No Website" }]} />
        <Select label="Status" value={filters.websiteStatus} onChange={(v) => update("websiteStatus", v)} options={[{ value: "all", label: "All Status" }, { value: "active", label: "Active" }, { value: "broken", label: "Broken" }]} />
        <Select label="Rating" value={filters.rating} onChange={(v) => update("rating", v)} options={[{ value: "any", label: "Any Rating" }, { value: "4", label: "4+" }, { value: "4.5", label: "4.5+" }]} />
        <Select label="Sort" value={filters.sort} onChange={(v) => update("sort", v)} options={[{ value: "relevance", label: "Relevance" }, { value: "rating", label: "Rating" }, { value: "name", label: "Business Name" }]} />
      </div>
    </div>
  </div>;
}
