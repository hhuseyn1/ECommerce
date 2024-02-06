import React, { useContext } from 'react'
import Login from './login/Login'
import Register from './register/Register'
import MainPage from './mainpage/MainPage'
import Context from './ContextWrapper'
import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from './NotFound'
import CartDetails from './mainpage/components/CartDetails'

export default function App() {
     const {authorized} = useContext(Context) 
     return (
          <Routes>
          <Route path='/' element={<Navigate to="/login" replace/>}/>
          {authorized?(
               <Route path = "/mainpage" element={<MainPage/>}/> 
          ):(
               <Route path = "/login" element={<Login/>}/>
          )}
          <Route path='/cart' element={<CartDetails/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<NotFound />}/>
       </Routes>
     )
}

