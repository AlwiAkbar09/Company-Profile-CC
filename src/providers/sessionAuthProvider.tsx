'use client';
import { authStore } from '@/store/auth.store';
import axios from 'axios';
import { ReactNode, useEffect } from 'react';


interface ISessionAuthProviderProps {
  children: ReactNode;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function SessionAuthProvider({
  children,
}: ISessionAuthProviderProps) {

  const { auth, setAuth } = authStore();
  const { objectId, username } = auth;


  const onSessionLoginUser = async (objectId: string) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/users/login/${objectId}`
      );
      console.log(response?.data?.user);
      setAuth({
        email: response?.data?.user?.email, 
        username: response?.data?.user?.username, 
        role: response?.data?.user?.role, 
        objectId: response?.data?.user?.objectId
      })
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log('useEffect');
    if (objectId && !username) {
      onSessionLoginUser(objectId);
    }
  }, [objectId, username]);

  return <>{children}</>;
}