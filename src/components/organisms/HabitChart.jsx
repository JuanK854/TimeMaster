import HabitRow from "../molecules/HabitRow"
import Input from "../atoms/Input"
import Button from "../atoms/Button"

export default function HabitGrid({ habits, onToggle, onAdd, inputValue, onInputChange }) {
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()

    return (
        <div className="bg-zinc-900 rounded-2xl p-6 overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-36 text-zinc-400 text-sm font-semibold">Hábito</span>
                {Array.from({ length: daysInMonth }, (_, i) => (
                    <span key={i} className="text-zinc-400 text-xs w-6 text-center">{i + 1}</span>
                ))}
            </div>
            {habits.map((habit, hIndex) => (
                <HabitRow
                    key={hIndex}
                    habit={habit.name}
                    days={habit.days}
                    onToggle={(dIndex) => onToggle(hIndex, dIndex)}
                />
            ))}
            <div className="flex gap-2 mt-4 max-w-sm">
                <Input
                    placeholder="Nuevo hábito..."
                    value={inputValue}
                    onChange={onInputChange}
                />
                <Button onClick={onAdd} variant="primary">+</Button>
            </div>
        </div>
    )
}