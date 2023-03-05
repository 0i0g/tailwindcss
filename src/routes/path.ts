const path = (root: string, subPath: string) => `${root}/${subPath}`;

export const APP_PATH = {
  root: '/',
  auth: {
    root: '/auth',
    login: '/auth/login',
    register: '/auth/register',
  },
  user: {
    root: '/user',
    profile: '/user/profile',
  },
};
