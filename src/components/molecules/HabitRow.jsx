import { div } from "framer-motion/client";
import Checkbox from "../atoms/Checkbox";

export default function HabitRow({ habit, days, onToggle }) {
    return(
        <div className="flex items center gap-3">
            <span className="text-white w-36 text-sm font-semibold bg-zinc-800 px-3">
                {habit}
            </span>
            {days.map((checked, index) => (
                <Checkbox
                    key={index}
                    checked={checked}
                    onChange={() => onToggle(index)}
                />
            ))}
        </div>
    )
}