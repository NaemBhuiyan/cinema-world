import create from 'zustand';

export const AppStore = create(set => ({
  collapsed: false,
  openDrawer: false,
  toggleCollapsed: () => set(state => ({ collapsed: !state.collapsed })),
  toggleOpenDrawer: () => set(state => ({ openDrawer: !state.openDrawer })),
}));
