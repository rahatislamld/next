'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useAuth } from '@/contexts';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await signin(data);
      toast.success('Login successful');
      router.push('');
    } catch (error) {
      toast.error('Login failed');
      console.log(error);
    }
  };

  return (
    <div className='space-y-6 bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div className=''>
          <div className='mb-3 space-y-2'>
            <Image src='/logo.png' alt='logo image' height={35} width={130} />
            <h2 className='text-2xl font-semibold'>Sign in to your Account</h2>
            <p className='text-sm'>Use your email to log in to your account</p>
          </div>
          <label htmlFor='email' className='text-gray-800'>
            Email
          </label>
          <input
            id='email'
            type='email'
            autoComplete='email'
            {...register('email', { required: true })}
            className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-2 focus:border-[#036c3c] focus:outline-none focus:ring-0'
          />
          {errors.email && <p className='text-red-500'>Email is required</p>}
        </div>
        <div className='relative'>
          <div className='flex justify-between'>
            <label htmlFor='password' className='text-gray-800'>
              Password
            </label>
            <Link href='/forgotpassword'>
              <span className='text-blue-600 hover:underline'>
                Forgot Password?
              </span>
            </Link>
          </div>
          <div className='flex items-center'>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='new-password'
              {...register('password', { required: true })}
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-2 focus:border-[#036c3c] focus:outline-none focus:ring-0'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 p-2 focus:outline-none'
            >
              {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          </div>
          {errors.password && (
            <p className='text-red-500'>Password is required</p>
          )}
        </div>

        <div className='flex items-center '>
          <input
            type='checkbox'
            id='rememberMe'
            {...register('rememberMe')}
            className='mr-2 h-4 w-4  cursor-pointer rounded border border-gray-400 accent-[#036c3c]'
          />
          <label htmlFor='rememberMe' className='font-normal text-gray-800'>
            Remember me
          </label>
        </div>

        <input
          type='submit'
          value='Sign In'
          className='w-full transform cursor-pointer rounded-md bg-[#036c3c] px-4 py-3 tracking-wide text-white transition-colors duration-200 hover:bg-green-600 focus:bg-gray-600 focus:outline-none'
        />
      </form>

      <div className='relative mt-6 flex w-full items-center justify-center border border-t'>
        <div className='absolute bg-gray-100 px-5 text-black'>Or</div>
      </div>

      <p className='mt-4 text-center text-sm text-gray-700'>
        {'Create an account '}
        <Link
          href='/signup'
          className='font-medium text-blue-600 hover:underline'
        >
          Signup
        </Link>
      </p>
    </div>
  );
};
