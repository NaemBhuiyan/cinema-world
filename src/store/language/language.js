import create from 'zustand';
import config, { getCurrentLanguage } from './langConfig';

const initState = getCurrentLanguage(config.defaultLanguage || 'english');
export const LanguageStore = create(set => ({
  ...initState,
  changeLanguage: value =>
    set(state => ({
      ...state,
      ...getCurrentLanguage(value),
    })),
}));
