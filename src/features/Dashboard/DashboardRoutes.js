import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PRIVATE_ROUTE } from '@/router';
import { Spin } from 'antd';

const NotFound = lazy(() => import('@/pages/NotFoundPage'));

const routes = [
  {
    path: PRIVATE_ROUTE.HOME,
    component: lazy(() => import('@/pages/HomePage')),
  },
  {
    path: PRIVATE_ROUTE.DEMO_PAGE,
    component: NotFound,
  },
];

export default function AppRouter() {
  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={`${i + route.key}`}
            path={`${route.path}`}
            element={<route.component />}
          />
        ))}
        <Route component={NotFound} />
      </Routes>
    </Suspense>
  );
}
