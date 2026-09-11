"use client";
import { useEffect, useState } from "react";
import { Download, Plus } from "lucide-react";
import { getLeads } from "@/lib/api/leads";
import LeadTable from "@/components/leads/LeadTable";
import ExportModal from "@/components/exports/ExportModal";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
export default function LeadsPage(){const [leads,setLeads]=useState([]);const [open,setOpen]=useState(false);const [toast,setToast]=useState("");useEffect(()=>{getLeads().then(setLeads)},[]);return <div className="mx-auto max-w-[1500px]"><div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><h1 className="text-2xl font-bold tracking-tight">Leads</h1><p className="mt-1 text-sm text-slate-500">All discovered businesses across your workspace.</p></div><div className="flex gap-2"><Button variant="outline" onClick={()=>setOpen(true)}><Download className="h-4 w-4"/>Export</Button><Button variant="primary"><Plus className="h-4 w-4"/>Add to Target List</Button></div></div><LeadTable leads={leads}/><ExportModal open={open} onClose={()=>setOpen(false)} onDone={setToast}/><Toast message={toast} onClose={()=>setToast("")}/></div>}
