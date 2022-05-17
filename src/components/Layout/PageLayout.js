import React, { lazy } from 'react';
import { Layout } from 'antd';
import Topbar from '@/features/Topbar';
import { LayoutWrapper } from '@/components/Layout/styles';
import { Navigate, Route, Routes } from 'react-router-dom';
const { Content, Footer } = Layout;
const NotFound = lazy(() => import('@/pages/NotFoundPage'));
import { PUBLIC_ROUTE } from '@/router/appRoutes';

const styles = {
  content: {
    marginTop: '100px',
  },
};

const HomePage = lazy(() => import('@/pages/HomePage'));
const GenrePage = lazy(() => import('@/pages/GenrePage/Genre'));
const WatchListPage = lazy(() => import('@/pages/WatchList'));
const RecentlyVisitedPage = lazy(() => import('@/pages/RecentlyVisited'));
const MovieDetailsPage = lazy(() =>
  import('@/pages/MovieDetailsPage/MovieDetails'),
);

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
  {
    path: PUBLIC_ROUTE.WATCH_LISt,
    component: WatchListPage,
  },
  {
    path: PUBLIC_ROUTE.RECENTLY_VISITED,
    component: RecentlyVisitedPage,
  },
];
function PageLayout() {
  return (
    <LayoutWrapper>
      <Layout>
        <Topbar />
        <Content style={styles.content}>
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
        </Content>
        <Footer className="text-center">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </LayoutWrapper>
  );
}

export default PageLayout;
