"use client";
import { Check, Circle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const stages=["Understanding your search","Finding businesses","Checking Google Business Profiles","Checking websites","Enriching contact information"];

export default function SearchProgress({ query, onComplete }) {
  const [step,setStep]=useState(0);
  useEffect(()=>{
    const timer=setInterval(()=>setStep((s)=>Math.min(s+1,stages.length)),850);
    return ()=>clearInterval(timer);
  },[]);
  useEffect(()=>{ if(step===stages.length) { const t=setTimeout(()=>onComplete?.(),600); return ()=>clearTimeout(t); }},[step,onComplete]);
  const percent=Math.round((step/stages.length)*100);
  const found=Math.min(50, Math.max(7, step*11 + 4));
  return <div className="mx-auto max-w-2xl py-14">
    <Card className="p-8">
      <div className="mx-auto max-w-md text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600"><Loader2 className="h-6 w-6 animate-spin"/></div><h1 className="mt-5 text-2xl font-bold">Finding businesses...</h1><p className="mt-2 text-sm text-slate-500">Running your search for <span className="font-medium text-slate-700">“{query}”</span></p></div>
      <div className="mt-8 space-y-4">{stages.map((stage,i)=><div key={stage} className="flex items-center gap-3 text-sm">{i<step?<div className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="h-4 w-4"/></div>:i===step?<div className="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700"><Loader2 className="h-4 w-4 animate-spin"/></div>:<div className="grid h-6 w-6 place-items-center text-slate-300"><Circle className="h-5 w-5"/></div>}<span className={i<=step?"font-medium text-slate-800":"text-slate-400"}>{stage}</span></div>)}</div>
      <div className="mt-9"><div className="mb-2 flex items-center justify-between text-xs font-medium"><span className="text-slate-500">Progress</span><span>{found} / 50 businesses found</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-600 transition-all duration-700" style={{width:`${percent}%`}}/></div></div>
    </Card>
  </div>;
}
