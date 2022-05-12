import React, { lazy, Suspense } from 'react';
import {
  Route,
  Navigate,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { AuthStore } from '@/store';
import { PUBLIC_ROUTE } from './appRoutes';

const Dashboard = lazy(() => import('@/features/Dashboard'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const NotFound = lazy(() => import('@/pages/NotFoundPage'));

function PrivateRoute() {
  const location = useLocation();
  const token = AuthStore(state => state.token);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={PUBLIC_ROUTE.SIGN_IN} state={{ from: location }} replace />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

function AppRoutes() {
  const publicRoutes = [
    {
      path: PUBLIC_ROUTE.LANDING,
      component: SignInPage,
    },
    {
      path: PUBLIC_ROUTE.SIGN_IN,
      component: SignInPage,
    },
  ];

  return (
    <div>
      <Suspense fallback={<Spin size="large" />}>
        <Router>
          <Routes>
            {publicRoutes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {/* <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            /> */}
            <Route path="" element={<PrivateRoute />}>
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Route>
            <Route component={NotFound} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default AppRoutes;
