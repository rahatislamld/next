'use client';
import { SetPasswordForm } from '@/components/authcomponent/setpassword';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SendOTP = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  return (
    <div className='mx-auto'>
      {!email && <div>Page not found</div>}
      {email && <SetPasswordForm email={email} />}
    </div>
  );
};

export default SendOTP;
