const defaultConfig = {
  siteName: "Dashboard Boilerplate",
  defaultLanguage: "english",
  sentryDSN: process.env.REACT_APP_BACKEND_SENTRY_DSN,
  BACKEND_ROOT_URL: process.env.REACT_APP_BACKEND_URL,
  IMAGE_PATH: process.env.REACT_APP_IMAGE_PATH,
  API_KEY: process.env.REACT_APP_API_KEY,
};

export default defaultConfig;
