import Navbar from "../organisms/Navbar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}