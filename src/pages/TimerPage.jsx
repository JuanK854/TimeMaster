import useTimer from "../hooks/useTimer";
import TimerSection from "../components/organisms/TimerSection";

export default function TimerPage() {
    const { time, isRunning, mode, start, stop, reset, changeMode } = useTimer()

    return (
        <div className="flex items-center justify-center h-screen">
            <TimerSection
                time={time}
                isRunning={isRunning}
                mode={mode}
                onStart={start}
                onStop={stop}
                onReset={reset}
                onModeChange={changeMode}
            />
        </div>
    )
}