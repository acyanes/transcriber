import { Metadata } from 'next';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import Login from '../../../../components/login';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen relative'>
      <div className='absolute top-0 left-0'>
        <Link href='/' className='flex items-center'>
          <IoIosArrowBack />
          Back
        </Link>
      </div>
      <div className='flex flex-col text-center'>
        <div className='flex flex-col'>
          <h1>Welcome back!</h1>
          <p>Enter your email to sign into your account</p>
        </div>
        <div>
          {/* @ts-expect-error next version of TS will fix this */}
          <Login />
          <Link href='/register' className='underline'>
            Dont have an account with us? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
