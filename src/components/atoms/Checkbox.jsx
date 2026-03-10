
export default function Checkbox({label, checked, onChange }) {
    return (
        <label>
            <input 
            type="checkbox" 
            checked={checked} 
            onChange={onChange}
            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"/>
            {label && <span className="ml-2 text-amber-50 text-sm" >{label}</span>}
        </label>
    )
}