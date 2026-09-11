"use client";
import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
export function Toast({ message, onClose }) {
  useEffect(() => { const t=setTimeout(onClose, 2800); return ()=>clearTimeout(t); }, [onClose]);
  if (!message) return null;
  return <div className="fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-xl"><CheckCircle2 className="h-5 w-5 text-emerald-600"/><span className="text-sm font-medium">{message}</span><button onClick={onClose}><X className="h-4 w-4 text-slate-400"/></button></div>;
}
