'use client';
import { isLoggedIn } from '@/apis';
import { LOGIN_PATH } from '@/constants';
import { useRouter } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';

export function withAuth<P>(Component: React.ComponentType<P>) {
  return function WithAuth(props: JSX.IntrinsicAttributes & P) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await isLoggedIn();
          setIsAuthenticated(response);
          if (!response) {
            router.push(LOGIN_PATH);
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
          router.push(LOGIN_PATH);
        }
      };

      checkAuth();
    }, [router, isAuthenticated]);
    return <>{isAuthenticated && <Component {...props} />}</>;
  };
}
