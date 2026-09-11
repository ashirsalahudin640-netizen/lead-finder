"use client";
import { useState } from "react";
import { FileSpreadsheet, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { exportLeads } from "@/lib/api/exports";

const fields=["Business Name","Category","Google Profile","Google Maps URL","Website","Website URL","Website Status","Phone","Address","City","State","Country","Rating"];

export default function ExportModal({open,onClose,onDone}) {
  const [format,setFormat]=useState("csv");
  const [selected,setSelected]=useState(fields);
  const [loading,setLoading]=useState(false);
  const toggle=(f)=>setSelected(s=>s.includes(f)?s.filter(x=>x!==f):[...s,f]);
  const submit=async()=>{setLoading(true);await exportLeads({format,fields:selected});setLoading(false);onClose();onDone?.("Export started");};
  return <Modal open={open} onClose={onClose} title="Export Leads" description="Choose a file format and the fields you want included.">
    <div className="space-y-6 p-5">
      <div><p className="mb-2 text-sm font-semibold">Format</p><div className="grid grid-cols-2 gap-2">{[["csv","CSV",FileText],["xlsx","Excel",FileSpreadsheet]].map(([id,label,Icon])=><button key={id} onClick={()=>setFormat(id)} className={`flex items-center gap-3 rounded-xl border p-3 text-left ${format===id?"border-blue-500 bg-blue-50":"hover:bg-slate-50"}`}><Icon className="h-5 w-5"/><span className="text-sm font-medium">{label}</span></button>)}</div></div>
      <div><div className="mb-2 flex items-center justify-between"><p className="text-sm font-semibold">Fields</p><button onClick={()=>setSelected(selected.length===fields.length?[]:fields)} className="text-xs font-medium text-blue-600">{selected.length===fields.length?"Clear all":"Select all"}</button></div><div className="grid grid-cols-1 gap-2 sm:grid-cols-2">{fields.map(f=><label key={f} className="flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"><input type="checkbox" checked={selected.includes(f)} onChange={()=>toggle(f)} className="h-4 w-4 rounded border-slate-300 text-blue-600"/>{f}</label>)}</div></div>
      <Button variant="primary" className="w-full" onClick={submit} disabled={!selected.length||loading}>{loading?"Preparing export...":"Export"}</Button>
    </div>
  </Modal>;
}
