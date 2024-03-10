'use client';

import Link from 'next/link';
import React from 'react';

import { Form, Input } from 'antd';
import { useAuth } from '@/contexts';

export const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const { login } = useAuth();

  const onFinish = async (values: any) => {
    try {
      await login(values);
    } catch (error) {
      console.log(error);
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='space-y-6 px-4 py-8 shadow sm:rounded-lg sm:px-10 '>
      <Form
        form={form}
        layout='vertical'
        name='signup_form'
        initialValues={{ modifier: 'public' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name='email'
          label={<span className='text-gray-800 '>Email</span>}
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input
            type='email'
            autoComplete='email'
            className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 '
          />
        </Form.Item>

        <Form.Item
          name='password'
          label={<span className='text-gray-800 '>Password</span>}
          rules={[
            { required: true, message: 'Please input a password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password type='password' autoComplete='new-password' />
        </Form.Item>

        <Form.Item>
          <Input
            type='submit'
            className='mt-4 w-full transform rounded-md bg-gray-400 px-4 py-2 tracking-wide text-gray-800 transition-colors duration-200 hover:bg-gray-500 focus:bg-gray-600 focus:outline-none '
            value={'Login'}
          />
        </Form.Item>
      </Form>
      <div className='relative mt-6 flex w-full items-center justify-center border border-t'>
        <div className='absolute bg-gray-100 px-5 text-black '>Or</div>
      </div>

      <p className='mt-4 text-center text-sm text-gray-700 '>
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
