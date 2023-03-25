import { Home, Login, Register, Dashboard } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RequireAuth from "./components/auth/RequireAuth"

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    element={<RequireAuth roles={["user", "super admin"]} />}
                >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
