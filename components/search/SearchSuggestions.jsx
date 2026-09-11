"use client";
export default function SearchSuggestions({ onSelect }) {
  const suggestions=["20 barbers in USA","50 dentists in Texas","100 restaurants in California","50 plumbers in New York"];
  return <div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Try a search</p><div className="flex flex-wrap gap-2">{suggestions.map((s)=><button key={s} onClick={()=>onSelect?.(s)} className="rounded-full border bg-white px-3 py-1.5 text-sm text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">{s}</button>)}</div></div>;
}
