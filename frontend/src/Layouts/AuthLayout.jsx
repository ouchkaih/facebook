import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import LoginForm from "../components/Auth/LoginForm"
import LazyLayout from "./LazyLayout"

function AuthLayout() {
    const user = useSelector(state => state.user.user)
    
    return (
        <div>
            { user ? <Outlet/> : <LazyLayout/>}
        </div>
    )
}

export default AuthLayout