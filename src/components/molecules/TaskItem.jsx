import Checkbox from "../atoms/Checkbox"

export default function TaskItem({ label, checked, onChange }) {
    return (
        <div className="flex items-center gap-3 py-2">
            <Checkbox checked={checked} onChange={onChange} label={label} />
        </div>
    )
}