import axios from '@/utils/axios';
import {
  CHECK_EMAIL,
  FORGOT_PASSWORD,
  GET_ROLE,
  IS_LOGGEDIN,
  LOGGOUT,
  LOGIN,
  RECEIVE_OTP,
  REGISTER,
  SET_PASSWORD,
  VERIFY_EMAIL,
} from './endpoints';

export const loginApi = async (email: any, password: any) => {
  try {
    const response = await axios.post(LOGIN, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const signupApi = async (values: any) => {
  try {
    const response = await axios.post(REGISTER, values);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const checkEmailValidity = async (email: any) => {
  try {
    const response = await axios.post(CHECK_EMAIL, { email });
    return response.data;
  } catch (error) {
    console.error('Error checking email validity:', error);
    throw error;
  }
};

export const verifyEmail = async (email: string, otp: string) => {
  try {
    const response = await axios.post(VERIFY_EMAIL, { email, otp });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
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

export const logout = async () => {
  try {
    await axios.get(LOGGOUT);
    return true;
  } catch (error) {
    return false;
  }
};

export const forgetPassword = async (email: string) => {
  try {
    const response = await axios.post(FORGOT_PASSWORD, { email });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const forgotPasswordOtp = async (email: string, otp: string) => {
  try {
    const response = await axios.post(RECEIVE_OTP, { email, otp });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const forgotPasswordOtpNewPassword = async (
  email: string,
  otp: string,
  password: string
) => {
  try {
    const response = await axios.post(SET_PASSWORD, {
      email,
      otp,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
