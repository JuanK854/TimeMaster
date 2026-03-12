import { div } from "framer-motion/client"
import Button from "../atoms/Button"

export default function TimerControls({ onStart, onStop, onReset, isRunning }) {
    return(
        <div className="flex gap-4">
            {!isRunning ?(<Button onClick={onStart} variant="primary" className="px-10 py-4 text-xl" > Iniciar </Button>) //En pausa pasa a iniciar
            : (<Button onClick={onStop} variant="secondary" className="px-10 py-4 text-xl" > Detener </Button>)}  /*sino detener*/

            <Button onClick={onReset} variant="secondary" className="px-10 py-4 text-xl" > Reiniciar </Button>    {/*Independiente siempre visible*/}
        </div>
    )
}