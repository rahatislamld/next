'use client';
import React from 'react';
import { AuthProvider } from '@/contexts';

export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
