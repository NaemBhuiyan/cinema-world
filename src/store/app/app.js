import create from 'zustand';
import { persist } from 'zustand/middleware';

export const AppStore = create(
  persist(
    set => ({
      recentlyVisited: [],
      watchList: [],
      setWatchList: payload =>
        set(state => ({
          watchList: [...state.watchList, payload].reverse(),
        })),
      saveToVisited: payload =>
        set(state => ({
          recentlyVisited: [...state.recentlyVisited, payload].reverse(),
        })),
      removeFromWatchList: payload => {
        return set(state => {
          const updateData = state.watchList.filter(
            item => item.id !== payload.id,
          );
          return { watchList: updateData };
        });
      },
    }),
    {
      name: 'watch-list', // unique name
    },
  ),
);
