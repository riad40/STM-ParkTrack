interface InputProps {
    type: string
    name: string
    id: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    showLabel?: boolean
}

const Input = ({
    type,
    name,
    id,
    placeholder,
    value,
    onChange,
    showLabel = false,
}: InputProps) => {
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
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent my-1"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Input
