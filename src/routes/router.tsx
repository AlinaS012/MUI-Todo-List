import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Splash from '../components/loader/Splash';
import PageLoader from '../components/loader/PageLoader';
// import paths, { rootPaths } from './paths';


const App = lazy(() => import('../App'));
const MainLayout = lazy(() => import('../layouts/main-layout'));
// const AuthLayout = lazy(() => import('../layouts/auth-layout'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Error404 = lazy(() => import('../pages/errors/Error404'));

const routes = [
  {
    path: '/', 
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true, 
            element: <Dashboard />,
          },
        ],
      },
      {
        path: '*',
        // element: <Dashboard />, //Error404
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Dashboard />   
            </Suspense>
          </MainLayout>
        ),
        // children: [
        //   {
        //     index: true, 
        //     element: <Dashboard />,
        //   },
        // ],
      },
    ],
  },
]

const router = createBrowserRouter(routes);
export default router;
