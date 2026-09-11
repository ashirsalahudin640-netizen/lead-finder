import { cn } from "@/lib/utils";
export function Input({ className="", ...props }) {
  return <input className={cn("h-10 w-full rounded-lg border bg-white px-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10", className)} {...props} />;
}
