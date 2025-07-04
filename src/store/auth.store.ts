import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export type TAuth = {
    username: string; 
    email: string;
    role: string;
    objectId : string;
}

export interface IAuthStoreStateProps{
    auth: TAuth,
    setAuth: ({username, email, role, objectId}: TAuth) => void;
}

export const authStore = create<IAuthStoreStateProps>()(
  persist((set) => ({
    auth: {
      username: '',
      email: '',
      role: '',
      objectId: ''
    },
    setAuth: ({ username, email, role, objectId }: TAuth) =>
      set((state) => ({
        auth: { username: username, email: email, role: role, objectId: objectId },
      })),
  }), {
    name: 'auth-session',
    partialize: (state) => ({objectId: state?.auth?.objectId})
  })
);