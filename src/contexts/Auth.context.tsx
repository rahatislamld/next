import { loginApi, signupApi } from '@/apis/auth';
import { ACCESS_TOKEN_STORAGE, REFRESH_TOKEN_STORAGE } from '@/constants';
import { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextType {
  signup: (values: any) => Promise<void>;
  login: (values: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signup = async (values: any) => {
    try {
      const ret = await signupApi(values);
      if (ret?.status === 'success') {
        setIsLoggedIn(true);
        localStorage.setItem(ACCESS_TOKEN_STORAGE, ret.accessToken);
        if (ret.refreshToken)
          localStorage.setItem(REFRESH_TOKEN_STORAGE, ret.refreshToken);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
      localStorage.removeItem(ACCESS_TOKEN_STORAGE);
      localStorage.removeItem(REFRESH_TOKEN_STORAGE);
      console.error('Error login:', error);
    }
  };

  const login = async (values: any) => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
    try {
      const ret = await loginApi(values.email, values.password);
      if (ret?.status === 'success') {
        setIsLoggedIn(true);
        localStorage.setItem(ACCESS_TOKEN_STORAGE, ret.accessToken);
        if (ret.refreshToken)
          localStorage.setItem(REFRESH_TOKEN_STORAGE, ret.refreshToken);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
      localStorage.removeItem(ACCESS_TOKEN_STORAGE);
      localStorage.removeItem(REFRESH_TOKEN_STORAGE);
      console.error('Error signing up:', error);
    }
  };
  return (
    <AuthContext.Provider value={{ signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};
