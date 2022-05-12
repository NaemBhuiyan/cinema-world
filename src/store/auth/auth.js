import create from 'zustand';
import { persist } from 'zustand/middleware';

export const AuthStore = create(
  persist(
    set => ({
      user: null,
      token: null,
      login: payload =>
        set({
          token: payload?.token,
          user: payload?.user,
        }),
      logout: () =>
        set({
          token: null,
          user: null,
        }),
    }),
    {
      name: 'auth', // unique name
    },
  ),
);
