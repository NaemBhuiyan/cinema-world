const defaultConfig = {
  siteName: 'Dashboard Boilerplate',
  defaultLanguage: 'english',
  sentryDSN: import.meta.env.VITE_APP_BACKEND_SENTRY_DSN,
  BACKEND_ROOT_URL: import.meta.env.VITE_APP_BACKEND_URL,
  IMAGE_PATH: import.meta.env.VITE_APP_IMAGE_PATH,
  API_KEY: import.meta.env.VITE_APP_API_KEY,
};

export default defaultConfig;
