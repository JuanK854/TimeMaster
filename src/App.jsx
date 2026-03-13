import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./components/templates/MainLayout"
import TimerPage from "./pages/TimerPage"
import CalendarPage from "./pages/CalendarPage"


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<TimerPage />} />
                    <Route path="calendario" element={<CalendarPage />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}