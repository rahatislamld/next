'use client';
// import Link from 'next/link';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { KeyIcon } from '@heroicons/react/24/outline';
// import { ArrowLeftIcon } from '@radix-ui/react-icons';
// import { forgetPassword } from '@/apis';
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';

// export const ForgotPasswordForm: React.FC<object> = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<{ email: string }>();

//   const router = useRouter();

//   const onSubmit = async (data: { email: string }) => {
//     try {
//       const res = await forgetPassword(data.email);
//       toast.success(res.message);
//       router.push(`/otp?email=${data.email}`);
//     } catch (error: any) {
//       toast.error(error.response?.data?.message ?? 'Something went wrong');
//       console.log('Error:', error.response?.data?.message);
//     }
//   };

//   return (

//   );
// };

// import React from 'react';
// import Image from 'next/image';

// const ForgotPassword: React.FC = () => {

//   return (
//     <div className="forget-password-container">
//       <div className="logo">
//         <Image src='/amarneer.png' alt='logo image' height={35} width={130} />
//       </div>

//       <div className="forget-password-heading">
//         <h2>Forget Password?</h2>
//       </div>

//       <div className="reset-instruction">
//         <p>No worries, we’ll send you reset instructions</p>
//       </div>

//       <div className="email-input">
//         <label htmlFor="email">Email or Phone Number</label>
//         <input type="text" id="email" placeholder="Enter your email or phone number" />
//       </div>

//       <div className="submit-button">
//         <button type="submit">Request</button>
//       </div>
//     </div>
//   );
// };

// export {ForgotPassword}
