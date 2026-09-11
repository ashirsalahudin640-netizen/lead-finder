export function Select({ label, value, onChange, options }) {
  return (
    <label className="flex items-center gap-2">
      {label && <span className="text-xs font-medium text-slate-500">{label}</span>}
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="h-9 rounded-lg border bg-white px-2.5 text-sm text-slate-700 outline-none focus:border-blue-500">
        {options.map((option)=><option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </label>
  );
}
