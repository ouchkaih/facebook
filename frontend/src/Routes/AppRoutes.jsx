

import React from 'react'
import NavBar from '../components/navigation/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'

function AppRoutes() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes