import RightContainer from "../common/RightContainer"

interface FormContainerProps {
    title: string
    children: React.ReactNode
}

const FormContainer = ({ title, children }: FormContainerProps) => {
    return (
        <div className="flex justify-between items-center h-screen w-full">
            <div className="w-2/4 mx-auto" style={{ maxWidth: "700px" }}>
                <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gray-200">
                    <h1 className="text-2xl font-bold text-center mb-4">
                        {title}
                    </h1>
                    {children}
                </div>
            </div>

            <RightContainer title={title} />
        </div>
    )
}

export default FormContainer
