import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function GuestLayout() {
    const user = useSelector(state => state.user.user)
  return (
    <div>
        {
            !user ? <Outlet/> : <Navigate to={'/'}/>
        }
    </div>
  )
}

export default GuestLayout