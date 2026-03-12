
export default function Button({ children, onClick, type, variant, className }) {
    const estilos = variant === 'primary'
        ? "bg-white text-black border border-gray-300 hover:bg-gray-100"
        : "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700"

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${estilos} ${className} rounded-xl font-semibold cursor-pointer`} 
        >
            {children}
        </button>
    )
}