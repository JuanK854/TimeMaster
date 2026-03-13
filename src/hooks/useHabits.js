import { useState } from "react"

const INITIAL_HABITS = [
    { name: "Hacer ejercicio", days: Array(31).fill(false) },
    { name: "Meditar", days: Array(31).fill(false) },
    { name: "Leer", days: Array(31).fill(false) },
    { name: "Beber agua", days: Array(31).fill(false) },
    { name: "Dormir 8 horas", days: Array(31).fill(false) },
]

export default function useHabits() {
    const [habits, setHabits] = useState(INITIAL_HABITS)
    const [input, setInput] = useState("")

    const toggle = (habitIndex, dayIndex) => {
        const nuevosHabits = [...habits]
        const nuevosDias = [...nuevosHabits[habitIndex].days]
        nuevosDias[dayIndex] = !nuevosDias[dayIndex]
        nuevosHabits[habitIndex] = { ...nuevosHabits[habitIndex], days: nuevosDias }
        setHabits(nuevosHabits)
    }

    const addHabit = () => {
        if (input === "") return
        const nuevoHabit = { name: input, days: Array(31).fill(false) }
        setHabits([...habits, nuevoHabit])
        setInput("")
    }

    return { habits, toggle, addHabit, input, setInput }
}