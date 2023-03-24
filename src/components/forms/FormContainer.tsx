interface FormContainerProps {
    title: string
    children: React.ReactNode
}

const FormContainer = ({ title, children }: FormContainerProps) => {
    return (
        <div className="w-2/4 mx-auto">
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default FormContainer
