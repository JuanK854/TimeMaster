import HabitRow from "../molecules/HabitRow";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function HabitGrid({ habits, onToggle, onAdd, inputValue, onInputChange }) {
    const diact= new Date();
    const yeact = diact.getFullYear();
    const mesact = diact.getMonth();
    
    const numerosDias =[]
    for (let i=1; i<=31; i++){
        const fecha = new Date(yeact, mesact, i)
        if (fecha.getMonth() === mesact){
            numerosDias.push(i)
        }
    }
    
    return(
        <div className="bg-zinc-900 rounded-2xl p-6 overflow-x-auto">
            {/*Columnas */}
            <div className="flex items-center gap-2 mb-4">
                <span className="w-36 text-zinc-400 text-sm font-semibold">Habito</span> 
                {numerosDias.map(dia => (
                    <span
                        key={dia} className="text-zinc-400 text-xs w-6 text-center">
                            {dia}
                    </span>
                ))}
            </div>

            {/*Filas */}
            {habits.map((habit, hIndex)=>(
                <HabitRow
                    key={hIndex}
                    habit={habit.name}
                    days={habit.days}
                    onToggle={(dIndex) => onToggle(hIndex,dIndex)}
                />
            ))}


            <div className="flex gap-2 mt-4 max-w-sm">
                <Input
                    placeholder="Nuevo habito" value={inputValue} onChange={onInputChange}
                />
                <Button onClick={onAdd} variant="primary" className={"flex items-center justify-center px-4.5 text-2xl"}> + </Button>  
            </div>
        </div>
    )
}

/*Fix del boton + */