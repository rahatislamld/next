import { logoutApi, signinApi, signupApi } from '@/apis';
import { ACCESS_TOKEN_STORAGE, REFRESH_TOKEN_STORAGE } from '@/constants';
import { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextType {
  signup: (values: any) => Promise<boolean>;
  signin: (values: any) => Promise<boolean>;
  logout: () => void;
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
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedIsLoggedIn = localStorage.getItem(ACCESS_TOKEN_STORAGE);
      return storedIsLoggedIn ? true : false;
    } else {
      return false;
    }
  });

  const signup = async (values: any): Promise<boolean> => {
    try {
      const ret = await signupApi(values);
      if (ret?.status === 'success') {
        setIsLoggedIn(true);
        localStorage.setItem(ACCESS_TOKEN_STORAGE, ret.accessToken);
        if (ret.refreshToken)
          localStorage.setItem(REFRESH_TOKEN_STORAGE, ret.refreshToken);
        return true;
      } else {
        setIsLoggedIn(false);
        throw new Error('Sign up failed');
      }
    } catch (error) {
      setIsLoggedIn(false);
      localStorage.removeItem(ACCESS_TOKEN_STORAGE);
      localStorage.removeItem(REFRESH_TOKEN_STORAGE);
      throw error;
    }
  };

  const signin = async (values: any): Promise<boolean> => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
    try {
      const ret = await signinApi(values.email, values.password);
      if (ret?.status === 'success') {
        setIsLoggedIn(true);
        localStorage.setItem(ACCESS_TOKEN_STORAGE, ret.accessToken);
        if (ret.refreshToken)
          localStorage.setItem(REFRESH_TOKEN_STORAGE, ret.refreshToken);
        return true;
      } else {
        setIsLoggedIn(false);
        throw new Error('Signin failed');
      }
    } catch (error) {
      setIsLoggedIn(false);
      localStorage.removeItem(ACCESS_TOKEN_STORAGE);
      localStorage.removeItem(REFRESH_TOKEN_STORAGE);
      throw error;
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    localStorage.removeItem(ACCESS_TOKEN_STORAGE);
    localStorage.removeItem(REFRESH_TOKEN_STORAGE);
    await logoutApi();
  };

  return (
    <AuthContext.Provider value={{ signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
