import { div } from "framer-motion/client"
import Button from "../atoms/Button"

export default function TimerControls({ onStart, onStop, onReset, isRunning }) {
    return(
        <div className="flex gap-4">
            {!isRunning ?(<Button onClick={onStart} variant="primary" className="px-6 py-2 text-base md:px-10 md:py-4 md:text-xl" > Iniciar </Button>) //En pausa pasa a iniciar
            : (<Button onClick={onStop} variant="secondary" className="px-6 py-2 text-base md:px-10 md:py-4 md:text-xl" > Detener </Button>)}

            <Button onClick={onReset} variant="secondary" className="px-6 py-2 text-base md:px-10 md:py-4 md:text-xl" > Reiniciar </Button>    {/*Independiente siempre visible*/}
        </div>
    )
}