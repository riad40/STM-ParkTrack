import { HeaderOpions } from "../../@types"
import Nav from "./Nav"
import useAuth from "../../hooks/useAuth"
interface HeaderProps {
    option: HeaderOpions
}

const Header = ({ option }: HeaderProps): JSX.Element => {
    const { auth } = useAuth()

    const renderHeader = (): JSX.Element => {
        switch (option) {
            case HeaderOpions.Home:
                return <Nav items={[{ name: "Login" }]} />
            case HeaderOpions.User:
                return (
                    <Nav
                        items={[
                            { name: `Welcome ${auth?.user?.username}` },
                            { name: "logout" },
                        ]}
                    />
                )
            default:
                return <h1>Header</h1>
        }
    }

    return <header>{renderHeader()}</header>
}

export default Header
