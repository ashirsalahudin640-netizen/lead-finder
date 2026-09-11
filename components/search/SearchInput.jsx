"use client";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchInput({ initialValue="", onSubmit, large=false }) {
  const [value,setValue]=useState(initialValue);
  const submit=(e)=>{e.preventDefault(); if(value.trim()) onSubmit?.(value.trim());};
  return <form onSubmit={submit} className="flex w-full gap-2">
    <div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/><Input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="20 barbers in USA" className={large?"h-12 pl-10 text-base":"pl-10"}/></div>
    <Button variant="primary" size={large?"lg":"default"} type="submit">Find Leads <ArrowRight className="h-4 w-4"/></Button>
  </form>;
}
