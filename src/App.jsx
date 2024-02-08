import React, { useContext } from 'react'
import Login from './login/Login'
import Register from './register/Register'
import MainPage from './mainpage/MainPage'
import MyContext from './ContextWrapper'
import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from './NotFound'
import CartDetails from './mainpage/components/CartDetails'
import ProductDetail from './mainpage/components/Details'

export default function App() {
    const { authorized } = useContext(MyContext);

    return (
     <Routes>
         <Route path="/" element={authorized ? <Navigate to="/mainpage" replace /> : <Navigate to="/login" replace />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/mainpage" element={authorized ? <MainPage /> : <Navigate to="/login" replace />} />
         <Route path="/cart" element={authorized ? <CartDetails /> : <Navigate to="/login" replace />} />
         <Route path="/product/:id" element={authorized ? <ProductDetail /> : <Navigate to="/login" replace />} />
         <Route path="*" element={<NotFound />} />
     </Routes>
    );
}


