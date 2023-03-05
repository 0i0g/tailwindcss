export const AuthService = {
  login: async (email: string, password: string) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // reject(new Error('Invalid email or password'));
        resolve({ user: 'Panee', token: 'token' });
        localStorage.setItem(
          'token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        );
      }, 1000);
    }),

  // login
};
