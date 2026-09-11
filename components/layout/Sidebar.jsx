"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BriefcaseBusiness, ChevronLeft, Download, LayoutDashboard, Search, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href:"/dashboard", label:"Dashboard", icon:LayoutDashboard },
  { href:"/dashboard/search", label:"Searches", icon:Search },
  { href:"/dashboard/leads", label:"Leads", icon:BriefcaseBusiness },
  { href:"/dashboard/exports", label:"Exports", icon:Download },
  { href:"/dashboard/settings", label:"Settings", icon:Settings }
];

export default function Sidebar({ collapsed=false, onToggle }) {
  const pathname=usePathname();
  return <aside className={cn("fixed inset-y-0 left-0 z-40 hidden border-r bg-white transition-[width,transform] duration-300 lg:flex lg:flex-col", collapsed?"w-[76px]":"w-[240px]")}>
    <div className="flex h-16 items-center border-b px-4">
      <Link href="/dashboard" className="flex items-center gap-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white"><Sparkles className="h-5 w-5"/></div>
        {!collapsed && <span className="text-base font-bold tracking-tight">Lead Finder</span>}
      </Link>
    </div>
    <nav className="flex-1 space-y-1 p-3">
      {items.map(({href,label,icon:Icon}) => {
        const active=pathname===href || (href!=="/dashboard" && pathname.startsWith(href));
        return <Link key={href} href={href} title={collapsed?label:undefined} className={cn("flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium", active?"bg-blue-50 text-blue-700":"text-slate-600 hover:bg-slate-50 hover:translate-x-0.5", collapsed&&"justify-center px-0")}>
          <Icon className="h-[18px] w-[18px]"/>{!collapsed&&label}
        </Link>;
      })}
    </nav>
    <div className={cn("border-t p-3", collapsed?"":"space-y-3")}>
      {!collapsed && <div className="rounded-xl bg-slate-50 p-3"><div className="flex items-center justify-between text-xs font-semibold"><span>Credits</span><span>2,450 / 5,000</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full w-[49%] rounded-full bg-blue-600"/></div><p className="mt-2 text-[11px] text-slate-500">Renewal in 18 days</p></div>}
      <button onClick={onToggle} className="flex h-9 w-full items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100" aria-label="Toggle sidebar"><ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed&&"rotate-180")}/></button>
    </div>
  </aside>;
}
