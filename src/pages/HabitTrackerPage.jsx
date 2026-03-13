import useHabits from "../hooks/useHabits"
import useHabitStats from "../hooks/useHabitStats"
import HabitGrid from "../components/organisms/HabitGrid"
import HabitChart from "../components/organisms/HabitChart"

export default function HabitTrackerPage() {
    const { habits, toggle, addHabit, input, setInput } = useHabits()
    const { data } = useHabitStats(habits)

    return (
        <div className="flex flex-col gap-6 md:p-8">
            <h1 className="text-white font-bold text-3xl">
                Seguimiento de Hábitos - {new Date().toLocaleString("es-MX", { month: "long", year: "numeric" })}
            </h1>
            <HabitGrid
                habits={habits}
                onToggle={toggle}
                onAdd={addHabit}
                inputValue={input}
                onInputChange={e => setInput(e.target.value)}
            />
            <HabitChart data={data} />
        </div>
    )
}