import { X } from "lucide-react";
export function Modal({ open, onClose, title, description, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button aria-label="Close modal" onClick={onClose} className="absolute inset-0 bg-slate-950/40" />
      <div role="dialog" aria-modal="true" className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl border bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b p-5">
          <div><h2 className="text-lg font-semibold">{title}</h2>{description && <p className="mt-1 text-sm text-slate-500">{description}</p>}</div>
          <button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100" aria-label="Close"><X className="h-5 w-5"/></button>
        </div>
        {children}
      </div>
    </div>
  );
}
