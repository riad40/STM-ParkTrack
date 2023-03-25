interface ContainerProps {
    children: JSX.Element
}

const Container = ({ children }: ContainerProps): JSX.Element => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {children}
        </div>
    )
}

export default Container
