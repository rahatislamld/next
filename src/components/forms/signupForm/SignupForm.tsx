'use client';
import React, { useState } from 'react';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  //const password = watch("password");
  const { signup } = useAuth();
  //const confirmPassword = watch("confirmPassword");
  const router = useRouter();

  const onSubmit = async (data: any) => {
    delete data.confirmPassword;
    try {
      const res = await signup(data);
      if (res) {
        toast.success(`An email sent ${data.email}`);
        router.push(`/otp?email=${data.email}&t=new`);
      } else {
        toast.error('Sign up failed1. Please try again.');
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message ?? 'Something went wrong');
    }
  };

  // Watch the value of confirmPassword field
  const confirmPassword = watch('password');

  return (
    <div className='relative flex min-h-screen items-center justify-center bg-gray-100'>
      {/* Background Image */}
      <div className='absolute inset-y-0 right-0 hidden w-1/2 bg-amraneer bg-cover bg-center md:block'></div>

      <div className='z-10 flex min-h-screen items-center justify-center bg-gray-100'>
        <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-md'>
          <div className='mb-8 flex items-center justify-center'>
            <div className='mb-4'>
              <Image
                src='/amarneer.png'
                alt='logo image'
                width={163}
                height={43.81}
              />
            </div>
          </div>
          <h2 className='mb-4 text-lg font-bold text-purple-900'>
            Sign up to your Account
          </h2>
          <p className='mb-6 text-sm text-gray-600'>
            Create your account with specific email/mobile number; we can easily
            contact with you
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className='flex flex-col'>
              <label
                htmlFor='email'
                className='text-sm font-semibold text-gray-900'
              >
                Email or Phone Number
              </label>
              <div className='flex items-center rounded-lg border border-gray-300'>
                <input
                  id='email'
                  type='text'
                  className={`px-4 py-2 focus:outline-none ${errors.email ? 'border-red-500' : 'border-blue-500'}`}
                  {...register('email', { required: true })}
                />
              </div>
              {errors.email && (
                <p className='text-xs text-red-500'>Email is required</p>
              )}
            </div>
            <div className='relative flex flex-col'>
              <label
                htmlFor='password'
                className='text-sm font-semibold text-gray-900'
              >
                Password
              </label>
              <div className='flex items-center rounded-lg border border-gray-300'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className={`px-4 py-2 focus:outline-none ${errors.password ? 'border-red-500' : 'border-blue-500'}`}
                  {...register('password', { required: true })}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 flex items-center px-4'
                >
                  {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
              {errors.password && (
                <p className='text-xs text-red-500'>Password is required</p>
              )}
            </div>
            <div className='relative'>
              <label htmlFor='confirmPassword' className='mt-4 text-gray-800'>
                Confirm Password
              </label>
              <input
                id='confirmPassword'
                type={showPassword ? 'text' : 'password'}
                autoComplete='new-password'
                {...register('confirmPassword', {
                  required: true,
                  validate: (value) =>
                    value === confirmPassword || 'The passwords do not match',
                })}
                className='mt-2 block w-full rounded-md border border-red-500 bg-white px-4 py-2 text-gray-700 focus:border-2 focus:outline-none focus:ring-0'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute inset-y-0 right-0 top-8 flex items-center px-2 focus:outline-none'
              >
                {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
              </button>
              {errors.confirmPassword && (
                <p className='text-red-500'>Passwords do not match</p>
              )}
            </div>

            <button
              type='submit'
              className='mt-4 w-full rounded-lg bg-orange-500 py-2 font-semibold text-white'
            >
              Sign Up
            </button>
          </form>
          <div className='mt-4 flex items-center'>
            <p className='text-sm text-gray-600'>Already have an account?</p>
            <a
              href='./signin'
              className='ml-1 text-sm font-semibold text-blue-600'
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignUpForm };
