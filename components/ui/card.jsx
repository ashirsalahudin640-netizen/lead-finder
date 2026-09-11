import { cn } from "@/lib/utils";
export function Card({ className="", children }) { return <div className={cn("rounded-xl border bg-white shadow-soft", className)}>{children}</div>; }
export function CardHeader({ className="", children }) { return <div className={cn("p-5", className)}>{children}</div>; }
export function CardTitle({ className="", children }) { return <h3 className={cn("font-semibold text-slate-900", className)}>{children}</h3>; }
export function CardContent({ className="", children }) { return <div className={cn("p-5 pt-0", className)}>{children}</div>; }
