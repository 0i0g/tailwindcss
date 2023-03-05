import { NavItemType } from 'src/sections/header/NavigationItem';
import ncNanoId from 'src/utils/ncNanoId';

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Online Booking',
  },
  {
    id: ncNanoId(),
    href: '/home-2',
    name: 'Real Estate',
  },
  {
    id: ncNanoId(),
    href: '/home-3',
    name: 'Home - 3',
  },
];

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/blog',
    name: 'Blog Page',
  },
  {
    id: ncNanoId(),
    href: '/blog-single',
    name: 'Blog Single',
  },
  {
    id: ncNanoId(),
    href: '/about',
    name: 'About',
  },
  {
    id: ncNanoId(),
    href: '/contact',
    name: 'Contact us',
  },
  {
    id: ncNanoId(),
    href: '/login',
    name: 'Login',
  },
  {
    id: ncNanoId(),
    href: '/signup',
    name: 'Signup',
  },
  {
    id: ncNanoId(),
    href: '/subscription',
    name: 'Subscription',
  },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/add-listing-1',
    name: 'Add Listings',
    children: [
      {
        id: ncNanoId(),
        href: '/add-listing-1',
        name: 'Add Listings 1',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-2',
        name: 'Add Listings 2',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-3',
        name: 'Add Listings 3',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-4',
        name: 'Add Listings 4',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-5',
        name: 'Add Listings 5',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-6',
        name: 'Add Listings 6',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-7',
        name: 'Add Listings 7',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-8',
        name: 'Add Listings 8',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-9',
        name: 'Add Listings 9',
      },
      {
        id: ncNanoId(),
        href: '/add-listing-10',
        name: 'Add Listings 10',
      },
    ],
  },
  //
  { id: ncNanoId(), href: '/checkout', name: 'Checkout' },
  { id: ncNanoId(), href: '/pay-done', name: 'Pay done' },
  //
  { id: ncNanoId(), href: '/author', name: 'Author Page' },
  { id: ncNanoId(), href: '/account', name: 'Account Page' },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Home',
    children: demoChildMenus,
  },
  {
    id: ncNanoId(),
    href: '/unique_id_',
    name: 'Five columns',
  },
  {
    id: ncNanoId(),
    href: '/listing-stay',
    name: 'Listing Page',
    children: [
      {
        id: ncNanoId(),
        href: '/listing-stay',
        name: 'Stay listing',
        children: [
          { id: ncNanoId(), href: '/listing-stay', name: 'Stay page' },
          {
            id: ncNanoId(),
            href: '/listing-stay-map',
            name: 'Stay page (map)',
          },
          { id: ncNanoId(), href: '/listing-stay-detail', name: 'Stay Detail' },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: '/listing-experiences',
        name: 'Experiences listing',
        children: [
          {
            id: ncNanoId(),
            href: '/listing-experiences',
            name: 'Experiences page',
          },
          {
            id: ncNanoId(),
            href: '/listing-experiences-map',
            name: 'Experiences page (map)',
          },
          {
            id: ncNanoId(),
            href: '/listing-experiences-detail',
            name: 'Experiences Detail',
          },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: '/listing-car',
        name: 'Cars listing',
        children: [
          { id: ncNanoId(), href: '/listing-car', name: 'Cars page' },
          { id: ncNanoId(), href: '/listing-car-map', name: 'Cars page (map)' },
          { id: ncNanoId(), href: '/listing-car-detail', name: 'Car Detail' },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: '/listing-real-estate',
        name: 'Real Estate Listings',
        children: [
          {
            id: ncNanoId(),
            href: '/listing-real-estate',
            name: 'Real Estate Listings',
          },
          {
            id: ncNanoId(),
            href: '/listing-real-estate-map',
            name: 'Real Estate Maps',
          },
        ],
      },
      //
      {
        id: ncNanoId(),
        href: '/listing-flights',
        name: 'Flights listing',
      },
    ],
  },
  {
    id: ncNanoId(),
    href: '/author',
    name: 'Templates',
    children: templatesChildrenMenus,
  },

  {
    id: ncNanoId(),
    href: '/blog',
    name: 'Other pages',
    children: otherPageChildMenus,
  },
];
