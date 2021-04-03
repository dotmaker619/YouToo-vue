// import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import DashboardLayout from '@/views/Layout/MainLayout.vue';
// import AuthLayout from '@/views/Pages/AuthLayout.vue';
import UserLayout from '@/views/Pages/UserLayout.vue';
// GeneralViews
import NotFound from '@/views/GeneralViews/NotFoundPage.vue';

// // Calendar
// const Calendar = () =>
//     import ( /* webpackChunkName: "extra" */ '@/views/Calendar/Calendar.vue');
// Charts
// const Charts = () =>
//     import ( /* webpackChunkName: "dashboard" */ '@/views/Charts.vue');

// Components pages
// const Buttons = () =>
//     import ( /* webpackChunkName: "components" */ '@/views/Components/Buttons.vue');
// const Cards = () =>
//     import ( /* webpackChunkName: "components" */ '@/views/Components/Cards.vue');
// const GridSystem = () =>
//     import ( /* webpackChunkName: "components" */ '@/views/Components/GridSystem.vue');
// const Notifications = () =>
//     import ( /* webpackChunkName: "components" */ '@/views/Components/Notifications.vue');
// const Icons = () =>
//     import ( /* webpackChunkName: "components" */ '@/views/Components/Icons.vue');
// const Typography = () =>
//     import ( /* webpackChunkName: "components" */ '@/views/Components/Typography.vue');

// Dashboard pages
const Dashboard = () =>
    import ( /* webpackChunkName: "dashboard" */ '@/views/Dashboard/Dashboard.vue');
const Events = () =>
    import ( /* webpackChunkName: "events" */ '../views/Events/Published/Events.vue');
const EventDrafts = () =>
    import ( /* webpackChunkName: "eventsDrafts" */ '../views/Events/Draft/EventDrafts.vue');
const EventDetail = () =>
    import ( /* webpackChunkName: "eventsDetail" */ '../views/Events/EventDetail/EventDetail.vue');
// const AlternativeDashboard = () =>
//     import ( /* webpackChunkName: "dashboard" */ '@/views/Dashboard/AlternativeDashboard.vue');
// const Widgets = () =>
//     import ( /* webpackChunkName: "dashboard" */ '@/views/Widgets.vue');

// // Forms pages
// const FormElements = () =>
//     import ( /* webpackChunkName: "forms" */ '@/views/Forms/FormElements.vue');
// const FormComponents = () =>
//     import ( /* webpackChunkName: "forms" */ '@/views/Forms/FormComponents.vue');
// const FormValidation = () =>
//     import ( /* webpackChunkName: "forms" */ '@/views/Forms/FormValidation.vue');

// // Maps pages
// const GoogleMaps = () =>
//     import ( /* webpackChunkName: "extra" */ '@/views/Maps/GoogleMaps.vue');
// const VectorMaps = () =>
//     import ( /* webpackChunkName: "extra" */ '@/views/Maps/VectorMaps.vue');

// Pages
// const User = () =>
//     import ( /* webpackChunkName: "pages" */ '@/views/Pages/UserProfile.vue');
// const Pricing = () =>
//     import ( /* webpackChunkName: "pages" */ '@/views/Pages/Pricing.vue');
// const TimeLine = () =>
//     import ( /* webpackChunkName: "pages" */ '@/views/Pages/TimeLinePage.vue');
const Login = () =>
    import ( /* webpackChunkName: "pages" */ '@/views/Pages/Auth/Login.vue');
// const Home = () =>
//     import ( /* webpackChunkName: "pages" */ '@/views/Pages/Home.vue');
const Register = () =>
    import ( /* webpackChunkName: "pages" */ '@/views/Pages/Auth/Register.vue');
const ForgotPassword = () =>
    import ( /* webpackChunkName: "pages" */ '@/views/Pages/Auth/ForgotPassword.vue');
// const Lock = () =>
//     import ( /* webpackChunkName: "pages" */ '@/views/Pages/Lock.vue');

// TableList pages
// const RegularTables = () =>
//     import ( /* webpackChunkName: "tables" */ '@/views/Tables/RegularTables.vue');
// const SortableTables = () =>
//     import ( /* webpackChunkName: "tables" */ '@/views/Tables/SortableTables.vue');
// const PaginatedTables = () =>
//     import ( /* webpackChunkName: "tables" */ '@/views/Tables/PaginatedTables.vue');
// let componentsMenu = {
//     path: '/components',
//     component: DashboardLayout,
//     redirect: '/components/buttons',
//     name: 'Components',
//     children: [{
//             path: 'buttons',
//             name: 'Buttons',
//             component: Buttons
//         },
//         {
//             path: 'cards',
//             name: 'Cards',
//             component: Cards
//         },
//         {
//             path: 'grid-system',
//             name: 'Grid System',
//             component: GridSystem
//         },
//         {
//             path: 'notifications',
//             name: 'Notifications',
//             component: Notifications
//         },
//         {
//             path: 'icons',
//             name: 'Icons',
//             component: Icons
//         },
//         {
//             path: 'typography',
//             name: 'Typography',
//             component: Typography
//         }
//     ]
// };
// let formsMenu = {
//     path: '/forms',
//     component: DashboardLayout,
//     redirect: '/forms/elements',
//     name: 'Forms',
//     children: [{
//             path: 'elements',
//             name: 'Form elements',
//             component: FormElements
//         },
//         {
//             path: 'components',
//             name: 'Form components',
//             component: FormComponents
//         },
//         {
//             path: 'validation',
//             name: 'Form validation',
//             component: FormValidation
//         }
//     ]
// };

// let tablesMenu = {
//     path: '/tables',
//     component: DashboardLayout,
//     redirect: '/table/regular',
//     name: 'Tables menu',
//     children: [{
//             path: 'regular',
//             name: 'Tables',
//             component: RegularTables
//         },
//         {
//             path: 'sortable',
//             name: 'Sortable',
//             component: SortableTables
//         },
//         {
//             path: 'paginated',
//             name: 'Paginated Tables',
//             component: PaginatedTables
//         }
//     ]
// };

// let mapsMenu = {
//     path: '/maps',
//     component: DashboardLayout,
//     name: 'Maps',
//     redirect: '/maps/google',
//     children: [{
//             path: 'google',
//             name: 'Google Maps',
//             component: GoogleMaps
//         },
//         {
//             path: 'vector',
//             name: 'Vector Map',
//             component: VectorMaps
//         }
//     ]
// };

// let pagesMenu = {
//     path: '/pages',
//     component: DashboardLayout,
//     name: 'Pages',
//     redirect: '/pages/user',
//     children: [{
//             path: 'user',
//             name: 'User Page',
//             component: User
//         },
//         {
//             path: 'timeline',
//             name: 'Timeline Page',
//             component: TimeLine
//         }
//     ]
// };

let userPages = {
    path: '/',
    component: UserLayout,
    name: 'Authentication',
    children: [{
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/forgot-password',
            name: 'ForgotPassword',
            component: ForgotPassword
        },
        // {
        //     path: '/pricing',
        //     name: 'Pricing',
        //     component: Pricing
        // },
        // {
        //     path: '/lock',
        //     name: 'Lock',
        //     component: Lock
        // },
        { path: '*', component: NotFound }
    ]
};

/* let authPages = {
  path: '/',
  component: AuthLayout,
  name: 'Authentication',
  children: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        noBodyBackground: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/lock',
      name: 'Lock',
      component: Lock
    },
    { path: '*', component: NotFound }
  ]
}; */

const routes = [{
        path: '/',
        redirect: '/dashboard',
        name: 'Home'
    },
    // componentsMenu,
    // formsMenu,
    // tablesMenu,
    // mapsMenu,
    // pagesMenu,
    {
        path: '/',
        component: DashboardLayout,
        redirect: '/dashboard',
        name: 'Dashboard layout',
        children: [{
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
              path: 'events',
              name: 'Events',
              component: Events
            },
            {
              path: 'eventdafts',
              name: 'Events',
              component: EventDrafts
            },
            {
              path: 'eventdetail/:id',
              name: 'Event Details',
              component: EventDetail
            },
          //   {
          //     path: '/events',
          //     name: 'Events',
          //     component: Events
          // },
            //,
            // {
            //     path: 'alternative',
            //     name: 'Alternative',
            //     component: AlternativeDashboard,
            //     meta: {
            //         navbarType: 'light'
            //     }
            // },
            // {
            //     path: 'calendar',
            //     name: 'Calendar',
            //     component: Calendar
            // },
            // {
            //     path: 'charts',
            //     name: 'Charts',
            //     component: Charts
            // },
            // {
            //     path: 'widgets',
            //     name: 'Widgets',
            //     component: Widgets
            // }
            { path: '*', component: NotFound }
        ]
    },
    userPages,
];

export default routes;
