import React from 'react';
import MailIcon from '../../assets/codicon_mail.svg';
import PassIcon from '../../assets/bx_bxs-lock-alt.svg';
import { useState } from "react";
import { useCookieContext } from '../../contexts/CookieContext'
import { useNavigate } from 'react-router-dom';

export default function LoginCard() {

  const { setCookie, cookies } = useCookieContext()
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()
    const login = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers:
                {
                    "Content-type": "application/json"
                }
            })

            if (response.ok) {
                const data = await response.json();
                const token = data.user.token;
                setCookie('accessToken', token, { path: '/' });
                navigate("/mainpage")
            }
            else {
                console.log(response.status)
                console.log(response.json())
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevForm) => ({
            ...prevForm,
            [name]: value
        }))

    }

    const handleLogin = async (e) => {
        e.preventDefault();
        login();
    }

  return (
    <>
      <div className='flex flex-col sm:w-[399px] h-[375px] w-screen justify-around items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-5xl'>Hello Again!</h1>
          <h4 className='text-2xl'>Welcome Back</h4>
        </div>
        <div className='flex flex-col mt-10 relative px-5 sm:px-0 min-[320px]:w-full'>
          <div className='relative mb-6'>
            <img src={MailIcon} className='w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 z-10' alt='Mail Icon' />
            <input onChange={(e) => handleChange(e)} type="email" name='email' placeholder='Email address' className='w-full sm:w-[388px] h-[48px] pl-10 rounded-full border border-gray-300 focus:outline-none focus:border-[#5ECE7B]' />
          </div>
          <div className='relative mb-6'>
            <img src={PassIcon} className='w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 z-10' alt='Password Icon' />
            <input onChange={(e) => handleChange(e)} type="password" name='password' placeholder='Password' className='w-full sm:w-[388px] h-[48px] pl-10 rounded-full border border-gray-300 focus:outline-none focus:border-[#5ECE7B]' />
          </div>
          <input onClick={(e) => handleLogin(e)} type="submit" value="Login" className='bg-green-500 text-white w-full h-12 cursor-pointer' />
        </div>
      </div>
    </>
  );
}
