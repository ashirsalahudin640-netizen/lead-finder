"use client";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function SearchDetail(){const {id}=useParams();const router=useRouter();return <div className="mx-auto max-w-5xl"><Button variant="ghost" onClick={()=>router.back()}><ArrowLeft className="h-4 w-4"/>Back</Button><div className="mt-4 rounded-xl border bg-white p-8 shadow-soft"><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Search</p><h1 className="mt-2 text-2xl font-bold">{id}</h1><p className="mt-2 text-sm text-emerald-600">Completed</p><p className="mt-6 text-sm text-slate-500">This route is ready for backend search-job detail data.</p></div></div>}
