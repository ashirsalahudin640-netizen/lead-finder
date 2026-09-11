import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet } from "lucide-react";
export default function SearchSummary({ leads, onExport }) {
  return <div className="mb-5 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5 md:flex-row md:items-center animate-fade-up"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Search results</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Businesses found</h1><p className="mt-1 text-sm text-slate-500">{leads.length} verified lead records ready to review.</p></div><div className="grid grid-cols-2 gap-2 sm:flex"><Button variant="outline" onClick={onExport}><Download className="h-4 w-4"/>Export CSV</Button><Button variant="outline" onClick={onExport}><FileSpreadsheet className="h-4 w-4"/>Export Excel</Button></div></div>;
}
