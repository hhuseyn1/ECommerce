import React, { useContext } from 'react'
import Login from './login/Login'
import Register from './register/Register'
import MainPage from './mainpage/MainPage'
import { Navigate, Route, Routes } from "react-router-dom"
import CartDetails from './mainpage/components/CartDetails'
import ProductDetail from './mainpage/components/Details'
import { CookieProvider } from './contexts/CookieContext'

export default function App() {

    return (
        <CookieProvider>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />}></Route>
                <Route path="/mainpage" element={<MainPage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:id" element={<ProductDetail/>} />
                <Route path="/cart" element={<CartDetails />} />
            </Routes>
      </CookieProvider>
    );
}

