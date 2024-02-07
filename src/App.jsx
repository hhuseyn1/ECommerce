import React, { useContext } from 'react'
import Login from './login/Login'
import Register from './register/Register'
import MainPage from './mainpage/MainPage'
import MyContext from './ContextWrapper'
import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from './NotFound'
import CartDetails from './mainpage/components/CartDetails'
import Details from './mainpage/components/Details'

export default function App() {
     const {authorized} = useContext(MyContext) 
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

