"use client";
import { useRouter } from "next/navigation";
import { Search, Sparkles, ArrowRight, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import SearchInput from "@/components/search/SearchInput";
import SearchSuggestions from "@/components/search/SearchSuggestions";
import { searches } from "@/lib/mock/searches";
import Link from "next/link";
export default function Dashboard(){
  const router=useRouter();
  const submit=(q)=>router.push(`/dashboard/search?query=${encodeURIComponent(q)}`);
  return <div className="mx-auto max-w-[1400px] space-y-5 sm:space-y-6">
    <section className="hero-gradient relative overflow-hidden rounded-3xl border border-blue-100 p-5 shadow-soft sm:p-8 lg:p-10"><div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/><div className="relative max-w-3xl animate-fade-up"><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur"><Sparkles className="h-3.5 w-3.5"/> Sales intelligence workspace</div><h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Find businesses that need your services</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">Discover businesses, verify their online presence, and move the best leads into your workflow.</p><div className="mt-6 max-w-2xl sm:mt-7"><SearchInput large onSubmit={submit}/></div><div className="mt-5"><SearchSuggestions onSelect={submit}/></div></div></section>
    <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
      <Card className="card-hover animate-fade-up"><div className="p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><div><h2 className="font-semibold">Recent searches</h2><p className="mt-1 text-xs text-slate-500">Pick up where you left off.</p></div><Link href="/dashboard/search" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">View all <ArrowRight className="h-3.5 w-3.5"/></Link></div><div className="mt-4 divide-y divide-slate-100">{searches.slice(0,3).map(s=><Link href={`/dashboard/search?query=${encodeURIComponent(s.query)}`} key={s.id} className="group flex items-center justify-between gap-3 py-3 transition-colors hover:bg-slate-50"><div className="flex min-w-0 items-center gap-3"><div className="shrink-0 rounded-xl bg-slate-100 p-2.5 transition-transform group-hover:scale-105"><Search className="h-4 w-4 text-slate-500"/></div><div className="min-w-0"><p className="truncate text-sm font-medium">{s.query}</p><p className="mt-0.5 text-xs text-slate-500">{s.leads} leads · {s.created}</p></div></div><span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">Completed</span></Link>)}</div></div></Card>
      <Card className="card-hover animate-fade-up"><div className="p-5 sm:p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Zap className="h-5 w-5"/></div><h2 className="mt-4 font-semibold">Fast lead discovery</h2><p className="mt-2 text-sm leading-6 text-slate-500">Search by service and location, then validate Google profiles and websites from one responsive workspace.</p><Link href="/dashboard/search" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">Start a search <ArrowRight className="h-4 w-4"/></Link></div></Card>
    </div>
  </div>;
}
