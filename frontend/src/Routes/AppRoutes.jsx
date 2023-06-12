import NavBar from '../components/navigation/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import LoginForm from '../components/Auth/LoginForm'
import RegisterForm from '../components/Auth/RegisterForm'

function AppRoutes() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes