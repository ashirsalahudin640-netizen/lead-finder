import { ExternalLink, MapPin, TriangleAlert, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getDomain } from "@/lib/utils";

export function GoogleProfileBadge({ google }) {
  if (!google?.profileExists) return <span className="text-sm text-slate-400">— Not Found</span>;
  return <div className="flex items-center gap-2"><Badge variant="success"><Check className="mr-1 h-3 w-3"/> Found</Badge>{google.mapsUrl&&<a href={google.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"><MapPin className="h-3 w-3"/>Maps</a>}</div>;
}
export function WebsiteBadge({ website }) {
  if (!website?.exists) return <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-500"><X className="h-4 w-4 text-red-500"/> No Website</span>;
  return <div className="min-w-0"><div className="flex items-center gap-1.5 text-sm font-medium text-slate-700"><Check className="h-4 w-4 text-emerald-600"/> Website</div><a href={website.url} target="_blank" rel="noopener noreferrer" className="mt-0.5 flex items-center gap-1 truncate text-xs text-blue-600 hover:underline"><span className="truncate">{getDomain(website.url)}</span><ExternalLink className="h-3 w-3 shrink-0"/></a></div>;
}
export function WebsiteStatusBadge({ website }) {
  if (!website?.exists) return null;
  if (website.status==="broken") return <Badge variant="danger"><TriangleAlert className="mr-1 h-3 w-3"/> Broken</Badge>;
  return <Badge variant="success"><Check className="mr-1 h-3 w-3"/> Active</Badge>;
}
