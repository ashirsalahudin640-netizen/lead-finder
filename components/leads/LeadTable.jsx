"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Copy, MoreHorizontal, Phone, Star, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import LeadFilters from "@/components/leads/LeadFilters";
import { GoogleProfileBadge, WebsiteBadge, WebsiteStatusBadge } from "@/components/leads/statuses";
import { Toast } from "@/components/ui/toast";

function Row({ lead, selected, onSelect, onToast }) {
  const copy = async (value, label) => {
    try { await navigator.clipboard.writeText(value); onToast(`${label} copied`); } catch {}
  };

  return (
    <tr className="table-row-animate border-t border-slate-100 transition-colors hover:bg-slate-50/80">
      <td className="w-10 px-4 py-4"><input type="checkbox" checked={selected} onChange={() => onSelect(lead.id)} aria-label={`Select ${lead.businessName}`} className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/30" /></td>
      <td className="min-w-[220px] px-3 py-4"><Link href={`/dashboard/leads/${lead.id}`} className="font-semibold text-slate-800 transition-colors hover:text-blue-600">{lead.businessName}</Link><p className="mt-0.5 text-xs text-slate-500">{lead.category}</p></td>
      <td className="min-w-[160px] px-3 py-4"><GoogleProfileBadge google={lead.google} /></td>
      <td className="min-w-[190px] px-3 py-4"><WebsiteBadge website={lead.website} />{lead.website.exists && <div className="mt-2"><WebsiteStatusBadge website={lead.website} /></div>}</td>
      <td className="min-w-[160px] px-3 py-4"><button onClick={() => copy(lead.contact.phone, "Phone")} className="group/phone inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600"><Phone className="h-3.5 w-3.5" />{lead.contact.phone}<Copy className="h-3 w-3 opacity-0 transition-opacity group-hover/phone:opacity-100" /></button></td>
      <td className="min-w-[145px] px-3 py-4 text-sm"><p className="font-medium">{lead.city}, {lead.state}</p><p className="text-xs text-slate-400">{lead.country}</p></td>
      <td className="px-3 py-4"><div className="flex items-center gap-1 text-sm font-semibold"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />{lead.google.rating ?? "—"}</div></td>
      <td className="px-3 py-4"><Link href={`/dashboard/leads/${lead.id}`} className="rounded-lg p-2 text-slate-400 transition-all hover:bg-white hover:text-slate-700"><MoreHorizontal className="h-4 w-4" /></Link></td>
    </tr>
  );
}

function MobileLeadCard({ lead, selected, onSelect, onToast }) {
  const copy = async () => { try { await navigator.clipboard.writeText(lead.contact.phone); onToast("Phone copied"); } catch {} };
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <input type="checkbox" checked={selected} onChange={() => onSelect(lead.id)} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/30" aria-label={`Select ${lead.businessName}`} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0"><Link href={`/dashboard/leads/${lead.id}`} className="block truncate font-semibold text-slate-900 hover:text-blue-600">{lead.businessName}</Link><p className="mt-0.5 text-xs text-slate-500">{lead.category}</p></div>
            <Link href={`/dashboard/leads/${lead.id}`} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50"><MoreHorizontal className="h-4 w-4" /></Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div><p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">Google</p><div className="mt-1"><GoogleProfileBadge google={lead.google} /></div></div>
            <div><p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">Website</p><div className="mt-1"><WebsiteBadge website={lead.website} /></div></div>
            <div><p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">Rating</p><div className="mt-1 flex items-center gap-1 font-semibold"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />{lead.google.rating ?? "—"}</div></div>
            <div><p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">Location</p><p className="mt-1 truncate font-medium">{lead.city}, {lead.state}</p></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-3">
            <button onClick={copy} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-2 text-xs font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"><Phone className="h-3.5 w-3.5" />{lead.contact.phone}<Copy className="h-3 w-3" /></button>
            {lead.google.mapsUrl && <a href={lead.google.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-2 text-xs font-medium text-blue-700"><MapPin className="h-3.5 w-3.5" />Maps</a>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LeadTable({ leads }) {
  const [filters, setFilters] = useState({ q: "", google: "all", website: "all", websiteStatus: "all", rating: "any", sort: "relevance" });
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [toast, setToast] = useState("");
  const perPage = 8;

  const filtered = useMemo(() => {
    const result = leads.filter((l) => {
      if (filters.q && !`${l.businessName} ${l.category} ${l.city} ${l.state}`.toLowerCase().includes(filters.q.toLowerCase())) return false;
      if (filters.google === "yes" && !l.google.profileExists) return false;
      if (filters.google === "no" && l.google.profileExists) return false;
      if (filters.website === "yes" && !l.website.exists) return false;
      if (filters.website === "no" && l.website.exists) return false;
      if (filters.websiteStatus !== "all" && l.website.status !== filters.websiteStatus) return false;
      if (filters.rating !== "any" && (!l.google.rating || l.google.rating < Number(filters.rating))) return false;
      return true;
    });
    return result.sort((a, b) => {
      if (filters.sort === "rating") return (b.google.rating || 0) - (a.google.rating || 0);
      if (filters.sort === "name") return a.businessName.localeCompare(b.businessName);
      return a.businessName.localeCompare(b.businessName);
    });
  }, [leads, filters]);

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const rows = filtered.slice((page - 1) * perPage, page * perPage);
  const allVisible = rows.length > 0 && rows.every((r) => selected.includes(r.id));
  const toggleAll = () => setSelected(allVisible ? selected.filter((id) => !rows.some((r) => r.id === id)) : [...new Set([...selected, ...rows.map((r) => r.id)])]);
  const updateFilters = (fn) => { setFilters(fn); setPage(1); };

  return <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
    <LeadFilters filters={filters} setFilters={updateFilters} />
    <div className="hidden overflow-x-auto lg:block"><table className="w-full min-w-[1100px] text-left"><thead className="bg-slate-50/90 text-xs font-semibold uppercase tracking-wide text-slate-500"><tr>
      <th className="px-4 py-3"><input type="checkbox" checked={allVisible} onChange={toggleAll} aria-label="Select all visible leads" /></th><th className="px-3 py-3">Business</th><th className="px-3 py-3">Google Profile</th><th className="px-3 py-3">Website</th><th className="px-3 py-3">Phone</th><th className="px-3 py-3">Location</th><th className="px-3 py-3">Rating</th><th />
    </tr></thead><tbody>{rows.map((lead) => <Row key={lead.id} lead={lead} selected={selected.includes(lead.id)} onSelect={(id) => setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id])} onToast={setToast} />)}</tbody></table></div>
    <div className="space-y-3 p-3 lg:hidden">{rows.map((lead) => <MobileLeadCard key={lead.id} lead={lead} selected={selected.includes(lead.id)} onSelect={(id) => setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id])} onToast={setToast} />)}</div>
    {rows.length === 0 ? <div className="p-14 text-center"><p className="font-semibold">No businesses found</p><p className="mt-1 text-sm text-slate-500">Try changing your search or filters.</p></div> : <div className="flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-slate-500">{selected.length} selected · {filtered.length} results</p><div className="flex items-center justify-between gap-2 sm:justify-end"><Button size="icon" variant="outline" disabled={page === 1} onClick={() => setPage((p) => p - 1)}><ChevronLeft className="h-4 w-4" /></Button><span className="min-w-[100px] text-center text-sm text-slate-600">Page {page} of {pages}</span><Button size="icon" variant="outline" disabled={page === pages} onClick={() => setPage((p) => p + 1)}><ChevronRight className="h-4 w-4" /></Button></div></div>}
    <Toast message={toast} onClose={() => setToast("")} />
  </div>;
}
