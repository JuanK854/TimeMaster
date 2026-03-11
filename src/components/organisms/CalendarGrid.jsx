export default function CalendarGrid({year, month, events, onDayClick}){
    const hoy=new Date()
    const primerDia = new Date(year, month, 1).getDay()
    const diasMes = new Date(year, month + 1, 0).getDate()

    const dias = []
    for (let i =1; i<=diasMes; i++){
        dias.push(i)
    }

    const espacio = []
    for(let i=0; i<primerDia; i++){  {/*<--  NO MOVER*/}
        espacio.push(i)
    }

    return (
        <div className="bg-zinc-800 rounded-2xl p-6">
            <div className="grid grid-cols-7 gap-2 mb4">
                {["Domingo", "Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"].map(nomDia =>(
                    <span key={nomDia} className="text-zinc-400 text-center text-sm font-semibold">
                        {nomDia}   {/*Lista de dias*/}
                    </span>
                ))}

            </div>
            <div className="grid grid-cols-7 gap-2">
                {espacio.map(i => <div key={`vacio-${i}`} />)}
                {dias.map(dia=>{
                    let diaEvento = false
                    for(let i = 0; i<events.length; i++){
                        if(new Date(events[i].start).getDate() === dia){
                            diaEvento = true
                        }
                    }
                    {/*verifica el dia catual*/}
                    const esHoy = hoy.getDate() === dia && hoy.getMonth() ===month && hoy.getFullYear()=== year

                    return(
                        <div 
                            key={dia}
                            onClick={() => onDayClick(dia)}
                            className={`aspect-square flex flex-col items-center justify-start pt-1 rounded-xl cursor-pointer rext-sm font-medium transition-colors
                            ${esHoy ? "bg-zinc-600 text-amber-50" : "bg-zinc-800 text-amber-50 hover:bg-zinc-700"}`}>
                                {dia} {diaEvento == true && <div className="w-4 h-0.5 bg-amber-50 mt-1 rounded-full" />}
                                {/*Linea debajo del dia, para el evento */}
                        </div>
                    )
                })}
            </div>

        </div>
    )
} 