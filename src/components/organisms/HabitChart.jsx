import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { day: 1, percent: 80 },
    { day: 2, percent: 60 },
    { day: 3, percent: 100 },
    { day: 4, percent: 40 },
    { day: 5, percent: 80 },
    { day: 6, percent: 20 },
    { day: 7, percent: 60 },
    { day: 8, percent: 100 },
    { day: 9, percent: 80 },
    { day: 10, percent: 40 },
    { day: 11, percent: 60 },
    { day: 12, percent: 80 },
    { day: 13, percent: 100 },
    { day: 14, percent: 60 },
    { day: 15, percent: 40 },
    { day: 16, percent: 80 },
    { day: 17, percent: 60 },
    { day: 18, percent: 20 },
    { day: 19, percent: 100 },
    { day: 20, percent: 80 },
    { day: 21, percent: 60 },
    { day: 22, percent: 40 },
    { day: 23, percent: 80 },
    { day: 24, percent: 100 },
    { day: 25, percent: 60 },
    { day: 26, percent: 40 },
    { day: 27, percent: 80 },
    { day: 28, percent: 60 },
    { day: 29, percent: 100 },
    { day: 30, percent: 80 },
    { day: 31, percent: 60 },
]

export default function HabitChart() {
    return (
        <div className="bg-zinc-900 rounded-2xl p-6">
            <span className="text-white font-bold text-lg mb-4 block">Progreso Diario (% de hábitos completados)</span>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#3f3f46" strokeDasharray="5 5" />
                    <XAxis dataKey="day" stroke="#71717a" />
                    <YAxis stroke="#71717a" domain={[0, 100]} />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#18181b", border: "none", borderRadius: "8px" }}
                        labelStyle={{ color: "#fff" }}
                    />
                    <Line type="monotone" dataKey="percent" stroke="#ffffff" dot={{ fill: "#18181b" }} activeDot={{ stroke: "#18181b" }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}