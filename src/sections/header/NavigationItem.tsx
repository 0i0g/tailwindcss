import { Popover } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type NavItemType = {
  id: string;
  name: string;
  href: string;
  children?: NavItemType[];
};

type Props = {
  menuItem: NavItemType;
};
const NavigationItem = ({ menuItem }: Props) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);
  const locationPathname = useLocation().pathname;

  useEffect(() => {
    setMenuCurrentHovers([]);
  }, [locationPathname]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((prev) => [...prev, id]);
  };

  const onMounseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((prev) => prev.filter((item) => item !== id));
  };

  const renderDropdownMenu = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        as='li'
        className={`menu-item menu-dropdown relative`}
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMounseLeaveMenu(item.id)}
      >
        {item.name}
      </Popover>
    );
  };

  return renderDropdownMenu(menuItem);
};

export default NavigationItem;
