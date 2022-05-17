import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import PropTypes from 'prop-types';
import { theme, AppLocale } from '@/config';
// import PageLayout from '../Layout/Layout';
// import ErrorFallback from '../ErrorFallback';

export default function AppProvider({ children }) {
  const currentAppLocale = AppLocale['en'];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ConfigProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
