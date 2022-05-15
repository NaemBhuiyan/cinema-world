import create from 'zustand';

export const AppStore = create(set => ({
  genre: {},
  setGenre: payLoad => set({ genre: payLoad }),
  toggleOpenDrawer: () => set(state => ({ openDrawer: !state.openDrawer })),
}));
