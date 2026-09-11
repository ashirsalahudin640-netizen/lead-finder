import { cn } from "@/lib/utils";

export function Button({ className="", variant="default", size="default", ...props }) {
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border bg-white text-slate-700 hover:bg-slate-50",
    ghost: "text-slate-600 hover:bg-slate-100",
    danger: "border border-red-200 bg-white text-red-600 hover:bg-red-50"
  };
  const sizes = { sm:"h-9 px-3 text-sm", default:"h-10 px-4 text-sm", lg:"h-11 px-5 text-sm", icon:"h-10 w-10" };
  return <button className={cn("inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50", variants[variant], sizes[size], className)} {...props} />;
}
