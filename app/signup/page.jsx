"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Signup(){
  const router=useRouter();
  return <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6"><div className="w-full max-w-md rounded-2xl border bg-white p-7 shadow-soft"><div className="flex items-center gap-2"><div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white"><Sparkles className="h-5 w-5"/></div><b>Lead Finder</b></div><h1 className="mt-8 text-2xl font-bold">Create your workspace</h1><p className="mt-2 text-sm text-slate-500">Start finding high-value local business opportunities.</p><form onSubmit={(e)=>{e.preventDefault();router.push("/dashboard")}} className="mt-6 space-y-4"><div><label className="mb-1.5 block text-sm font-medium">Full name</label><Input placeholder="Jordan Davis" required/></div><div><label className="mb-1.5 block text-sm font-medium">Work email</label><Input type="email" placeholder="you@company.com" required/></div><div><label className="mb-1.5 block text-sm font-medium">Password</label><Input type="password" placeholder="At least 8 characters" minLength={8} required/></div><Button variant="primary" className="w-full">Create account <ArrowRight className="h-4 w-4"/></Button></form><p className="mt-6 text-center text-sm text-slate-500">Already have an account? <Link className="font-semibold text-blue-600" href="/login">Sign in</Link></p></div></div>;
}
