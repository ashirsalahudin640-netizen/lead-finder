"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
export default function AppShell({ children }) {
  const [collapsed,setCollapsed]=useState(false);
  const [mobile,setMobile]=useState(false);
  return <div className="min-h-screen bg-slate-50">
    <Sidebar collapsed={collapsed} onToggle={()=>setCollapsed(!collapsed)}/>
    {mobile&&<div className="fixed inset-0 z-50 lg:hidden"><button aria-label="Close navigation" onClick={()=>setMobile(false)} className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"/><div className="relative h-full w-[min(82vw,290px)] animate-fade-up bg-white shadow-2xl"><Sidebar collapsed={false} onToggle={()=>setMobile(false)}/></div></div>}
    <div className={collapsed?"lg:pl-[76px]":"lg:pl-[240px]"}><TopNavigation onMenu={()=>setMobile(true)}/><main className="p-3 sm:p-4 lg:p-6">{children}</main></div>
  </div>;
}
