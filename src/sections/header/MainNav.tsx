import Navigation from 'src/sections/header/Navigation';
import Logo from 'src/shared/Logo/Logo';

const MainNav = () => (
  <div className='relative z-10'>
    <div className='container flex items-center justify-between'>
      <div className='flex flex-1 items-center justify-start'>
        <Logo />
        <Navigation />
      </div>
    </div>
  </div>
);

export default MainNav;
