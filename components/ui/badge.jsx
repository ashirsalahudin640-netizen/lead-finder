import { cn } from "@/lib/utils";
export function Badge({ className="", children, variant="default" }) {
  const variants = {
    default:"bg-slate-100 text-slate-700",
    success:"bg-emerald-50 text-emerald-700",
    warning:"bg-amber-50 text-amber-700",
    danger:"bg-red-50 text-red-700",
    blue:"bg-blue-50 text-blue-700"
  };
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", variants[variant], className)}>{children}</span>;
}
