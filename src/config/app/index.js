const defaultConfig = {
  siteName: 'Dashboard Boilerplate',
  defaultLanguage: 'english',
  sentryDSN: import.meta.env.VITE_APP_BACKEND_SENTRY_DSN,
  BACKEND_ROOT_URL: import.meta.env.VITE_APP_BACKEND_URL,
};

export default defaultConfig;
