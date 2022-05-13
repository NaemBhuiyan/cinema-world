import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import { Layout } from 'antd';
import Topbar from '@/features/Topbar';

import { DashboardContainer } from './styles';

const { Content, Footer } = Layout;
// const styles = {
//   layout: { flexDirection: 'row', overflowX: 'hidden' },
//   content: {
//     padding: '90px 0 0',
//     flexShrink: '0',
//     position: 'relative',
//   },
// };

import { PUBLIC_ROUTE } from './appRoutes';

const HomePage = lazy(() => import('@/pages/HomePage'));
const NotFound = lazy(() => import('@/pages/NotFoundPage'));

// function PrivateRoute() {
//   const location = useLocation();
//   const token = AuthStore(state => state.token);

//   return token ? (
//     <Outlet />
//   ) : (
//     <Navigate to={PUBLIC_ROUTE.SIGN_IN} state={{ from: location }} replace />
//   );
// }

// PrivateRoute.propTypes = {
//   children: PropTypes.node,
// };

function AppRoutes() {
  const publicRoutes = [
    {
      path: PUBLIC_ROUTE.LANDING,
      component: HomePage,
    },
  ];

  return (
    <DashboardContainer>
      <Layout style={{ height: '100vh' }}>
        <Topbar />
        <Content>
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
                <Route component={NotFound} />
              </Routes>
            </Router>
          </Suspense>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </DashboardContainer>
  );
}

export default AppRoutes;
