import { HeaderOpions } from "../../@types"
import Nav from "./Nav"

interface HeaderProps {
    option: HeaderOpions
}

const Header = ({ option }: HeaderProps): JSX.Element => {
    const renderHeader = (): JSX.Element => {
        switch (option) {
            case HeaderOpions.Home:
                return <Nav items={[{ name: "Login" }]} />
            case HeaderOpions.User:
                return <Nav items={[{ name: "logout" }, { name: "User" }]} />
            case HeaderOpions.Admin:
                return (
                    <Nav
                        items={[
                            { name: "Welcome Super Admin" },
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
