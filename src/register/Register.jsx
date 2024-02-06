import React from 'react'
import RegisterCard from './components/RegisterCard'
import { Link, useLocation } from 'react-router-dom';

export default function Register() {
  const location = useLocation();
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <RegisterCard />
      <p className='mt-12'>
        Do you have an account ? Login{' '}
        <Link to='/login' className='text-[#5ECE7B] hover:underline underline-[#5ECE7B]'>here</Link>
      </p>
    </div>
  )
}
