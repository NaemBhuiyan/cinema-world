import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { theme, AppLocale } from '@/config';
import { ErrorBoundary } from '@sentry/react';
import { ErrorFallback } from '@/components';
import { LanguageStore } from '@/store';

export default function AppProvider({ children }) {
  const locale = LanguageStore(state => state.locale);
  const currentAppLocale = AppLocale[locale];

  return (
    <ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <ErrorFallback error={{ error, componentStack, resetError }} />
      )}
      showDialog
    >
      <ConfigProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </IntlProvider>
      </ConfigProvider>
    </ErrorBoundary>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
