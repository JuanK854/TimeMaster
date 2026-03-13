import { useState } from "react"
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google"
import axios from "axios"

function CalendarContent() {
    const [calendarUrl, setCalendarUrl] = useState(null)

    const login = useGoogleLogin({
        scope: "https://www.googleapis.com/auth/calendar.readonly email profile",
        onSuccess: async (response) => {
            const userInfo = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                { headers: { Authorization: `Bearer ${response.access_token}` } }
            )
            const email = userInfo.data.email
            setCalendarUrl(`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(email)}&ctz=America%2FMexico_City&bgcolor=%23000000&color=%23ffffff&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0`)
        },
        onError: () => console.error("Error al iniciar sesión")
    })

    if (!calendarUrl) {
    return (
        <div className="flex items-baseline justify-center h-screen">
            <div className="flex flex-col items-center gap-6">
                <span className="text-white text-2xl font-bold py-40 text-center">Utiliza tu calendario en nuestra pagina</span>
                <button
                    onClick={() => login()}
                    className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100"
                >
                    Conecta tu cuenta de Google, pofis {"<3"}
                </button>
            </div>
        </div>
    )
}

    return (
        <div className="flex items-center justify-center w-full h-screen p-4">
            <iframe
                src={calendarUrl}
                className="w-full h-full rounded-2xl border border-amber-500"
            />
        </div>
    )
}

export default function CalendarPage() {
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <CalendarContent />
        </GoogleOAuthProvider>
    )
}