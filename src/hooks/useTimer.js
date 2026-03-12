import { useState, useEffect } from "react"

export default function useTimer() {
    const [modo, setModo] = useState("trabajo")
    const [segundos, setSegundos] = useState(50 * 60)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (!isRunning) return
        const intervalo = setInterval(() => {
            setSegundos(prev => {
                if (prev<=1) {
                    setIsRunning(false)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(intervalo)
    }, [isRunning])

    const formatear = (segs) => {
        const minutos = Math.floor(segs / 60)
        const segundosSobrantes = segs % 60

        {/*Conversion NO MOVER*/}
        const minutosFinal = minutos < 10 ? "0" + minutos : "" + minutos
        const segundosFinal = segundosSobrantes < 10 ? "0" + segundosSobrantes : "" + segundosSobrantes

        return `${minutosFinal}:${segundosFinal}`
    }

    const cambiarModo = (nuevoModo) => {
        setModo(nuevoModo)
        setIsRunning(false)
        setSegundos(nuevoModo === "trabajo" ? 50 * 60 : 10 * 60)
    }

    return {
        tiempo: formatear(segundos),
        isRunning,
        modo,
        iniciar: () => setIsRunning(true),
        detener: () => setIsRunning(false),
        reiniciar: () => { setIsRunning(false); setSegundos(modo === "trabajo" ? 50 * 60 : 10 * 60) },
        cambiarModo
    }
}