import { Link } from 'react-router-dom';
import LoginCard from './components/LoginCard'

export default function Login() {

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <LoginCard />
      <p>
        Do you haven't account yet? Register{' '}
        <Link to='/register' className='text-[#5ECE7B] hover:underline underline-[#5ECE7B]'>here</Link>
      </p>
    </div>
  );
}
