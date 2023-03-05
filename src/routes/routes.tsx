import { ElementType, lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import GuestGuard from 'src/guards/GuestGuard';
import MainLayout from 'src/layouts/MainLayout';

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<>Loading</>}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import('src/pages/web/home/HomePage')));
const LoginPage = Loadable(lazy(() => import('../pages/web/auth/LoginPage')));
const RegisterPage = Loadable(lazy(() => import('../pages/web/auth/RegisterPage')));
const Page404 = Loadable(lazy(() => import('../pages/web/Page404')));

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      element: (
        <GuestGuard>
          <MainLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: '/',
      element: (
        // <AuthGuard>
        <MainLayout />
        // </AuthGuard>
      ),
      children: [{ path: '/', element: <HomePage /> }],
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ]);
}
