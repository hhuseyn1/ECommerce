import { Link, useLocation } from 'react-router-dom';
import LoginCard from './components/LoginCard'

export default function Login() {
  const location = useLocation();

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <LoginCard />
      <p>
        Do you haven't account yet? Register{' '}
        <Link to='/register' className='text-[#5ECE7B] hover:underline underline-[#5ECE7B]'>here</Link>
      </p>
    </div>
  );
}
