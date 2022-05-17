import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import PageLayout from '@/components/Layout/PageLayout';
import { Spin } from 'antd';

function AppRoutes() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <Router>
        <Routes>
          <Route path="/*" element={<PageLayout />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRoutes;
