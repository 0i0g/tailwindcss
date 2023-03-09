import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Fragment, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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

  const renderMainItem = (item: NavItemType) => (
    <NavLink
      to={item.href}
      rel='noopener noreferrer'
      className={({ isActive }) =>
        `inline-flex items-center rounded-full py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 xl:px-5 xl:text-base ${
          isActive
            ? 'bg-neutral-100 !font-semibold !text-neutral-900 dark:bg-neutral-800 dark:!text-neutral-100'
            : ''
        }`
      }
    >
      {item.name}
      {item.children && (
        <ChevronDownIcon className='ml-1 -mr-1 h-4 w-4 text-neutral-400' aria-hidden='true' />
      )}
    </NavLink>
  );

  const renderDropdownMenu = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return item.children ? (
      <Popover
        as='li'
        className={`menu-item menu-dropdown relative`}
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMounseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <div>{renderMainItem(item)}</div>
            <Transition
              as={Fragment}
              show={isHover}
              enter='transition ease-out duration-150 '
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel static className='sub-menu absolute left-0 z-10 w-56 pt-3'>
                <ul className='relative grid space-y-1 rounded-lg bg-white py-4 text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-900 dark:ring-white dark:ring-opacity-10'>
                  {item.children?.map((i) => {
                    if (i.children) {
                      return renderDropdownMenuNavlinkHasChild(i, i.id);
                    } else {
                      return (
                        <li key={i.id} className={`px-2`}>
                          {renderDropdownMenuNavLink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    ) : (
      <div>{renderMainItem(item)}</div>
    );
  };

  const renderDropdownMenuNavLink = (item: NavItemType, direction: 'col' | 'row' = 'col') => {
    const Icon = direction === 'col' ? ChevronDownIcon : ChevronRightIcon;
    return (
      <NavLink
        to={item.href}
        className={
          'flex items-center rounded-md py-2 px-4 hover:bg-neutral-100 hover:text-neutral-700'
        }
      >
        {item.name}
        {item.children && <Icon className='ml-2 h-4 w-4 text-neutral-500' />}
      </NavLink>
    );
  };

  const renderDropdownMenuNavlinkHasChild = (item: NavItemType, key: string) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        key={key}
        as='li'
        className={`menu-item menu-dropdown relative px-2`}
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMounseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <div>{renderDropdownMenuNavLink(item)}</div>
            <Transition
              as={Fragment}
              show={isHover}
              enter='transition ease-out duration-150 '
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel static className='sub-menu absolute left-full top-0 z-10 w-56  pl-2'>
                <ul className='relative grid space-y-1 rounded-lg bg-white py-4 text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-900 dark:ring-white dark:ring-opacity-10'>
                  {item.children?.map((i) => {
                    if (i.children) {
                      return renderDropdownMenuNavlinkHasChild(i, i.id);
                    } else {
                      return (
                        <li key={i.id} className={`px-2`}>
                          {renderDropdownMenuNavLink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  return renderDropdownMenu(menuItem);
};

export default NavigationItem;
