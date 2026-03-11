import TaskItem from "./TaskItem"
import Input from "../atoms/Input"
import Button from "../atoms/Button"

export default function SidePanel({ title, tasks, onToggle, onAdd, inputValue, onInputChange }) {
    return (
        <div className="bg-zinc-900 p-4 rounded-xl w-80 flex flex-col gap-4">
            <span className="text-white text-lg font-semibold">{title}</span>
            <div className="flex flex-col gap-2">
                {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    label={task.label}
                    checked={task.checked}
                    onChange={() => onToggle(index)}
                    />
                ))}
        </div>
        <div className="flex gap-2">
            <Input
                placeholder="Nueva tarea"
                value={inputValue}
                onChange={onInputChange}
            />
            <Button onClick={onAdd} variant="primary">+</Button>

        </div>
    )
} 