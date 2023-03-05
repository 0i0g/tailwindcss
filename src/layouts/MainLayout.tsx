import { Outlet } from 'react-router-dom';
import AppHeader from 'src/sections/header/AppHeader';

const MainLayout = () => (
  <div className='bg-white text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200'>
    <AppHeader />
    <Outlet />
    {/* <Footer /> */}
  </div>
);

export default MainLayout;
