import Navigation from 'src/sections/header/Navigation';
import { ButtonPrimary, ButtonSecondary } from 'src/shared/button';
import { Logo } from 'src/shared/logo';

const MainNav = () => (
  <div className='relative z-10'>
    <div className='container flex items-center justify-between'>
      <div className='flex flex-1 items-center justify-start'>
        <Logo />
        <Navigation />
      </div>
      <div className='flex items-center gap-1'>
        <ButtonPrimary href='/contact'>Login</ButtonPrimary>
        <ButtonSecondary href='/contact'>Register</ButtonSecondary>
      </div>
    </div>
  </div>
);

export default MainNav;
