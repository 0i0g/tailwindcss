import NavigationItem from 'src/sections/header/NavigationItem';
import { NAVIGATION_DEMO } from './navConfig';

const Navigation = () => (
  <div className='relative flex items-center'>
    {NAVIGATION_DEMO.map((item) => (
      <NavigationItem key={item.id} menuItem={item} />
    ))}
  </div>
);

export default Navigation;
