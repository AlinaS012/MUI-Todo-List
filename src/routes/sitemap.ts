// import paths from 'routes/paths';

// export interface SubMenuItem {
//   name: string;
//   pathName: string;
//   path: string;
//   active?: boolean;
//   items?: SubMenuItem[];
// }

// export interface MenuItem {
//   id: string;
//   subheader: string;
//   path: string;
//   icon?: string;
//   avatar?: string;
//   active?: boolean;
//   items?: SubMenuItem[];
//   messages?: number;
// }

// const sitemap: MenuItem[] = [
//   {
//     id: 'dashboard',
//     subheader: 'Dashboard',
//     path: '/',
//     icon: 'solar:widget-bold',
//     active: true,
//   },
//   {
//     id: 'analytics',
//     subheader: 'Analytics',
//     path: '#!',
//     icon: 'solar:chart-square-bold',
//   },
//   {
//     id: 'invoice',
//     subheader: 'Invoice',
//     path: '#!',
//     icon: 'solar:ticket-bold',
//   },
//   {
//     id: 'schedule',
//     subheader: 'Schedule',
//     path: '#!',
//     icon: 'solar:document-text-bold',
//   },
//   {
//     id: 'calendar',
//     subheader: 'Calendar',
//     path: '#!',
//     icon: 'mage:calendar-2-fill',
//   },
//   {
//     id: 'messages',
//     subheader: 'Messages',
//     path: '#!',
//     icon: 'mage:dashboard-chart-fill',
//     messages: 49,
//   },
//   {
//     id: 'notification',
//     subheader: 'Notification',
//     path: '#!',
//     icon: 'solar:bell-bold',
//   },
//   {
//     id: 'settings',
//     subheader: 'Settings',
//     path: '#!',
//     icon: 'solar:settings-bold',
//   },
//   {
//     id: 'signin',
//     subheader: 'Sign In',
//     path: paths.signin,
//     icon: 'mage:lock-fill',
//     active: true,
//   },
//   {
//     id: 'signup',
//     subheader: 'Sign Up',
//     path: paths.signup,
//     icon: 'mage:user-plus-fill',
//     active: true,
//   },
// ];

// export default sitemap;
import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
  messages?: number;
}

const sitemap = [
  {
    id: 'dashboard',
    subheader: 'Home',
    path: '/',
    icon: 'solar:widget-bold',
    active: true,
  },
  {
    id: 'search',
    subheader: 'Search',
    path: '#!',
    icon: 'solar:chart-square-bold',
  },
  {
    id: 'inbox',
    subheader: 'Inbox',
    path: '#!',
    icon: 'solar:ticket-bold',
  },
  {
    id: 'today',
    subheader: 'Today',
    path: '#!',
    icon: 'solar:document-text-bold',
  },
  {
    id: 'upcoming',
    subheader: 'Upcoming',
    path: '#!',
    icon: 'mage:calendar-2-fill',
    messages: 29
  },
  {
    id: 'filtersandlabels',
    subheader: 'Filters & Labels',
    path: '#!',
    icon: 'mage:dashboard-chart-fill',
    // messages: 49,
  },
  // {
  //   id: 'notification',
  //   subheader: 'Notification',
  //   path: '#!',
  //   icon: 'solar:bell-bold',
  // },
  // {
  //   id: 'settings',
  //   subheader: 'Settings',
  //   path: '#!',
  //   icon: 'solar:settings-bold',
  // },
  // {
  //   id: 'signin',
  //   subheader: 'Sign In',
  //   path: paths.signin,
  //   icon: 'mage:lock-fill',
  //   active: true,
  // },
  // {
  //   id: 'signup',
  //   subheader: 'Sign Up',
  //   path: paths.signup,
  //   icon: 'mage:user-plus-fill',
  //   active: true,
  // },
];

const projectOptions = [
  {
    id: 'mywork',
    subheader: 'My Work',
    path: paths.mywork,
    icon: 'material-symbols:target',//'mage:user-plus-fill',
    active: true,
  },
  {
    id: 'home2',
    subheader: 'My Home',
    path: paths.home,
    icon: 'twemoji:house',//'mage:user-plus-fill',
    active: true,
  }
];

export default { sitemap, projectOptions };
