import NavBar from '../components/navigation/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import LoginForm from '../components/Auth/LoginForm'
import RegisterForm from '../components/Auth/RegisterForm'
import FriendsIndex from '../components/Friends/FriendsIndex'
import AuthLayout from '../Layouts/AuthLayout'
import GuestLayout from '../Layouts/GuestLayout'

function AppRoutes() {
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route element={<AuthLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/friends' element={<FriendsIndex/>}/>
          </Route>
          <Route element={<GuestLayout/>}>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes