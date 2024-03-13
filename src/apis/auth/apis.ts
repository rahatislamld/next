import axios from '@/utils/axios';
import {
  CHECK_EMAIL,
  FORGOT_PASSWORD,
  GET_ROLE,
  IS_LOGGEDIN,
  LOGGOUT,
  SIGNIN,
  RECEIVE_OTP,
  REFRESH_TOKEN,
  REGISTER,
  SET_PASSWORD,
  VERIFY_EMAIL,
} from './endpoints';
import { ACCESS_TOKEN_STORAGE, REFRESH_TOKEN_STORAGE } from '@/constants';

export const signinApi = async (email: any, password: any) => {
  try {
    const response = await axios.post(SIGNIN, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const signupApi = async (values: any) => {
  const response = await axios.post(REGISTER, values);
  return response.data;
};

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE);
  if (!refreshToken) {
    return null;
  }
  try {
    const response = await axios.post(REFRESH_TOKEN, {
      token: refreshToken,
    });
    if (response.data?.status === 'success') {
      localStorage.setItem(ACCESS_TOKEN_STORAGE, response.data?.access_token);
      localStorage.setItem(REFRESH_TOKEN_STORAGE, response.data?.refresh_token);
      return response.data?.access_token;
    } else {
      localStorage.removeItem(ACCESS_TOKEN_STORAGE);
      localStorage.removeItem(REFRESH_TOKEN_STORAGE);
      return null;
    }
  } catch (error) {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE);
    localStorage.removeItem(REFRESH_TOKEN_STORAGE);
    return null;
  }
};

export const checkEmailValidity = async (email: any) => {
  const response = await axios.post(CHECK_EMAIL, { email });
  return response.data;
};

export const verifyEmail = async (email: string, otp: string) => {
  const response = await axios.post(VERIFY_EMAIL, { email, otp });
  return response.data;
};

export const isLoggedIn = async () => {
  try {
    const response = await axios.get(IS_LOGGEDIN);
    if (response.data.status === 'success') {
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
};

export const getRoles = async () => {
  try {
    const response = await axios.get(GET_ROLE);
    if (response.data.status === 'success') {
      return response.data.data.roles;
    } else return [];
  } catch (error) {
    return [];
  }
};

export const logoutApi = async () => {
  try {
    await axios.get(LOGGOUT);
    return true;
  } catch (error) {
    return false;
  }
};

export const forgetPassword = async (email: string) => {
  const response = await axios.post(FORGOT_PASSWORD, { email });
  return response.data;
};

export const forgotPasswordOtp = async (email: string, otp: string) => {
  const response = await axios.post(RECEIVE_OTP, { email, otp });
  return response.data;
};

export const forgotPasswordOtpNewPassword = async (
  email: string,
  otp: string,
  password: string
) => {
  const response = await axios.post(SET_PASSWORD, {
    email,
    otp,
    password,
  });
  return response.data;
};
