import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TAuth = {
  username: string;
  email: string;
  role: string;
  objectId: string;
};

export interface IAuthStoreStateProps {
  auth: TAuth;
  isLoading: boolean; 
  setAuth: ({ username, email, role, objectId }: TAuth) => void;
  setLoading: (loading: boolean) => void
}


export const authStore = create<IAuthStoreStateProps>()(
  persist((set) => ({
    auth: {
      username: '',
      email: '',
      role: '',
      objectId: ''
    },
    isLoading: false,
    setAuth: ({ username, email, role, objectId }: TAuth) =>
      set(() => ({
        auth: { username: username, email: email, role: role, objectId: objectId },
        isLoading:false
      })),
      setLoading: (loading: boolean) => set(() => ({ isLoading: loading }))
  }), {
    name: 'auth-session',
    partialize: (state) => ({auth: state?.auth})
  })
);

