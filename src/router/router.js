import React, { lazy, Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Spin } from 'antd';

import { PUBLIC_ROUTE } from './appRoutes';

const HomePage = lazy(() => import('@/pages/HomePage'));
const GenrePage = lazy(() => import('@/pages/GenrePage/Genre'));
const MovieDetailsPage = lazy(() =>
  import('@/pages/MovieDetailsPage/MovieDetails'),
);
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
    {
      path: PUBLIC_ROUTE.GENRE,
      component: GenrePage,
    },
    {
      path: PUBLIC_ROUTE.MOVIE_DETAILS,
      component: MovieDetailsPage,
    },
  ];

  return (
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
          <Route path="" element={<Navigate to="/movies" />} />
          <Route component={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRoutes;
