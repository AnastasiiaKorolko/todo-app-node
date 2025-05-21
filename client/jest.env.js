process.env.VITE_API_URL = 'http://localhost:5000';
process.env.VITE_DEFAULT_THEME = 'light';

globalThis.import = {
  meta: {
    env: {
      VITE_API_URL: 'http://localhost:5000',
      VITE_DEFAULT_THEME: 'light'
    }
  }
};
