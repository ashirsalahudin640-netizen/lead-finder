"use client";
import { Bell, Menu, UserCircle } from "lucide-react";
import { useState } from "react";
export default function TopNavigation({ onMenu }) {
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white/95 px-4 backdrop-blur lg:px-6">
    <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" onClick={onMenu} aria-label="Open navigation"><Menu className="h-5 w-5"/></button>
    <div className="hidden lg:block"/>
    <div className="flex items-center gap-2">
      <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Notifications"><Bell className="h-[18px] w-[18px]"/></button>
      <div className="relative">
        <button onClick={()=>setOpen(!open)} className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-100"><div className="grid h-8 w-8 place-items-center rounded-full bg-slate-900 text-xs font-bold text-white">JD</div><span className="hidden text-sm font-medium md:block">Jordan Davis</span></button>
        {open&&<div className="absolute right-0 mt-2 w-44 rounded-xl border bg-white p-1.5 shadow-xl"><a className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50" href="/dashboard/settings">Account settings</a><button className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-500 hover:bg-slate-50">Sign out</button></div>}
      </div>
    </div>
  </header>;
}
