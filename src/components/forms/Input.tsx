import { memo } from "react"

interface InputProps {
    type: string
    name: string
    id: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    showLabel?: boolean
    date?: boolean
}

const Input = memo<InputProps>(
    ({
        type,
        name,
        id,
        placeholder,
        value,
        onChange,
        showLabel = false,
        date = false,
    }) => {
        return (
            <div>
                <label
                    htmlFor={id}
                    className={`${
                        !showLabel && `sr-only`
                    } font-bold text-black/40 mb-2`}
                >
                    {name}
                </label>
                <div className="relative">
                    <input
                        type={type}
                        name={name}
                        id={id}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-transparent mb-4 bg-gray-50 text-gray-900"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onFocus={(e) => {
                            if (date) {
                                e.currentTarget.type = "datetime-local"
                            }
                        }}
                        onBlur={(e) => {
                            if (date) {
                                e.currentTarget.type = "text"
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
)

export default Input
