'use client';
import { OTPForm } from '@/components/authcomponent/otp';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SendOTP = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get('email');
  const type = searchParams.get('t');

  return (
    <div className='mx-auto'>
      {!email && <div>Page not found</div>}
      {email && <OTPForm email={email} isVerifyOnly={type === 'new'} />}
    </div>
  );
};

export default SendOTP;
