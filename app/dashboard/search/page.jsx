"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchProgress from "@/components/search/SearchProgress";
import SearchInput from "@/components/search/SearchInput";
import SearchSummary from "@/components/search/SearchSummary";
import LeadTable from "@/components/leads/LeadTable";
import ExportModal from "@/components/exports/ExportModal";
import { getSearchResults } from "@/lib/api/search";
import { Toast } from "@/components/ui/toast";
export default function SearchPage(){
  const params=useSearchParams(); const router=useRouter();
  const query=params.get("query");
  const [phase,setPhase]=useState(query?"progress":"idle"); const [leads,setLeads]=useState([]); const [exportOpen,setExportOpen]=useState(false); const [toast,setToast]=useState("");
  useEffect(()=>{if(query){setPhase("progress");}},[query]);
  useEffect(()=>{if(phase==="results") getSearchResults().then(setLeads)},[phase]);
  if(phase==="progress") return <SearchProgress query={query||"20 barbers in USA"} onComplete={()=>setPhase("results")}/>;
  if(phase==="idle") return <div className="mx-auto max-w-3xl py-10"><div className="mb-8"><p className="text-sm font-semibold text-blue-600">New search</p><h1 className="mt-2 text-3xl font-bold">Find your next leads</h1><p className="mt-2 text-slate-500">Describe the businesses you want to discover in natural language.</p></div><SearchInput large onSubmit={(q)=>router.push(`/dashboard/search?query=${encodeURIComponent(q)}`)}/></div>;
  return <div className="mx-auto max-w-[1500px] space-y-5"><SearchSummary leads={leads} onExport={()=>setExportOpen(true)}/><LeadTable leads={leads}/><ExportModal open={exportOpen} onClose={()=>setExportOpen(false)} onDone={setToast}/><Toast message={toast} onClose={()=>setToast("")}/></div>;
}
