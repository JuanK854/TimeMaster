import {Link, useLocation} from "react-router-dom"

export default function NavItem({ to, label }) {
    const {pathname} = useLocation()
    const isActive = pathname === to

    return(
        <Link
            to={to}
            className={`text-sm font-semibold px-4 py2 transition-colors ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                {label}
        </Link>
    )
}