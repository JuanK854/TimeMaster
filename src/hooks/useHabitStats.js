export default function useHabitStats(habits) {
    const fechaHoy = new Date()
    const anio = fechaHoy.getFullYear()
    const mes = fechaHoy.getMonth()

    const data = []
    for (let i = 0; i < 31; i++) {
        const fecha = new Date(anio, mes, i + 1)
        if (fecha.getMonth() !== mes) break

        let completados = 0
        for (let j = 0; j < habits.length; j++) {
            if (habits[j].days[i] === true) {
                completados++
            }
        }

        let porcentaje = 0
        if (habits.length > 0) {
            porcentaje = Math.round((completados / habits.length) * 100)
        }

        data.push({ day: i + 1, percent: porcentaje })
    }

    return { data }
}