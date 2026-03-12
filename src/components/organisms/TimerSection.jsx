import TimerDisplay from "../atoms/TimerDisplay";
import TimerControls from "../molecules/TimerControls";

export default function TimerSection({ time, isRunning, onStart, onStop, onReset, mode, onModeChange }) {
    return(
        <div className="flex flex-col items-center justify-center gap-8 h-full"> 
            <div className="flex gap-4">
                <button
                    onClick={()=>onModeChange("trabajo")}
                    className={`px-6 py-2 rounded-xl font-semibold ${mode ==="trabajo" ? "bg-amber-50 text-black" : "bg-zinc-800 text-amber-50"}`}> {/*Cambio de sintaxis en el tailwind de rpounded to rounded */} 
                        {/*cambia el color del boton segun el modo(string)*/}
                        Trabajo
                </button>
                <button
                    onClick={()=>onModeChange("descanso")}
                    className={`px-6 py-2 rounded-xl font-semibold ${mode==="descanso" ? "bg-amber-50 text-black" : "bg-zinc-800 text-amber-50"}`}>
                        Descanso
                </button>
            </div>
            <TimerDisplay time={time} />
            <TimerControls
                isRunning={isRunning} /*<-- fix: isTunning to isRunning*/
                onStart={onStart}
                onStop={onStop}
                onReset={onReset}
            />
        </div>
    )
}