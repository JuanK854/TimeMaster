import NavItem from "../molecules/NavItem"

export default function Navbar() {
    return (
        <nav className="w-full bg-black border-b border-zinc-800 px-8 py-4 flex justify-center gap-8">
            <NavItem label="Pomodoro" to="/" />
            <NavItem label="Calendario" to="/calendario" />
            <NavItem label="Habit Tracker" to="/habitos" />
        </nav>
    )
}