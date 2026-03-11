import { div } from "framer-motion/client"
import Button from "../atoms/Button"

export default function TimerControls({ onStart, onStop, onReset, isRunning }) {
    return(
        <div className="flex gap-4">
            {!isRunning ?(<Button onClick={onStart} variant="primary">Iniciar</Button>) //En pausa pasa a iniciar
            : (<Button onClick={onStop} variant="secondary">Detener</Button>)}  /*sino detener*/

            <Button onClick={onReset} variant="secondary">Reiniciar</Button>    {/*Independiente siempre visible*/}
        </div>
    )
}