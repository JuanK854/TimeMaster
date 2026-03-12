import { useState, useEffect } from "react"

export default function useTimer() {
    const [mode, setMode] = useState("trabajo")
    const [segundos, setSegundos] = useState(50 * 60) 
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (!isRunning) return
        const intervalo = setInterval(() => {
            setSegundos(prev => {
                if (prev <= 1) {
                    setIsRunning(false)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(intervalo)
    }, [isRunning])

    const formatear = (seg) => {
        const minutos = Math.floor(seg / 60)
        const segundosSobrantes = seg % 60

        {/*Conversion*/}
        const minutosFinal = minutos < 10 ? "0" + minutos : "" + minutos
        const segundosFinal = segundosSobrantes < 10 ? "0" + segundosSobrantes : "" + segundosSobrantes

        return `${minutosFinal}:${segundosFinal}`
    }

    const changeMode = (nuevoModo) => {
        setMode(nuevoModo)
        setIsRunning(false)
        setSegundos(nuevoModo === "trabajo" ? 50 * 60 : 10 * 60)
    }

    return {
        time: formatear(segundos),
        isRunning,
        mode,
        start: () => setIsRunning(true),
        stop: () => setIsRunning(false),
        reset: () => { setIsRunning(false); setSegundos(mode === "trabajo" ? 50 * 60 : 10 * 60) },
        changeMode
    }
}