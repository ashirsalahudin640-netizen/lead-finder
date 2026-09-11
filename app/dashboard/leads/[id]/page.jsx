"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getLead } from "@/lib/api/leads";
import LeadDetails from "@/components/leads/LeadDetails";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
export default function LeadPage(){const {id}=useParams();const router=useRouter();const [lead,setLead]=useState(null);const [toast,setToast]=useState("");useEffect(()=>{getLead(id).then(setLead)},[id]);if(!lead)return <div className="mx-auto max-w-6xl"><div className="h-7 w-24 animate-pulse rounded bg-slate-200"/><div className="mt-6 h-80 animate-pulse rounded-xl bg-white"/></div>;return <div className="mx-auto max-w-6xl"><Button variant="ghost" onClick={()=>router.back()}><ArrowLeft className="h-4 w-4"/>Back to leads</Button><div className="mt-4"><LeadDetails lead={lead} onTarget={()=>setToast("Added to Target List")}/></div><Toast message={toast} onClose={()=>setToast("")}/></div>}
