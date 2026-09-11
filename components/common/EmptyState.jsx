import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function EmptyState({title="No businesses found",description="Try changing your category, location, or filters.",action="New Search",onAction}) {
  return <div className="rounded-xl border bg-white p-14 text-center shadow-soft"><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-500"><SearchX className="h-6 w-6"/></div><h3 className="mt-4 font-semibold">{title}</h3><p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">{description}</p>{onAction&&<Button variant="primary" className="mt-5" onClick={onAction}>{action}</Button>}</div>;
}
