
export default function EventCard({ event }) {
    return(
        <div className="bg-zinc-800 rounded-xl p-4 flex flex-col gap-1">
            <span className="text-amber-50 font-semibold">{title}</span>
            <span className="text-zinc-400 text-sm">{date}</span>
        </div>
    )
}