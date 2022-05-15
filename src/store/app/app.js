import create from 'zustand';
import { persist } from 'zustand/middleware';

export const AppStore = create(
  persist(
    set => ({
      watchList: [],
      setWatchList: payload =>
        set(state => ({
          watchList: [...state.watchList, payload],
        })),
      removeFromWatchList: payload => {
        return set(state => {
          const updateData = state.watchList.filter(
            item => item.id !== payload.id,
          );
          console.log(updateData);
          return { watchList: updateData };
        });
      },
    }),
    {
      name: 'watch-list', // unique name
    },
  ),
);
