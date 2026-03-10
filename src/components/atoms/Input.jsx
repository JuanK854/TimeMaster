export default function Input({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="bg-zinc-800 text-white placeholder-zinc-500 px-4 py-2 rounded-xl outline-none w-full"
        />
    )
}