import NavigationItem from 'src/sections/header/NavigationItem';
import { navConfigs } from './navConfig';

const Navigation = () => (
  <ul className='relative flex items-center space-x-1'>
    {navConfigs.map((item) => (
      <NavigationItem key={item.id} menuItem={item} />
    ))}
  </ul>
);

export default Navigation;
