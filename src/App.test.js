import React from 'react';
import { render, test, expect } from '@testing-library/react';
import App from './App';
// import regeneratorRuntime from 'regenerator-runtime';
test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
