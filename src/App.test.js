import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/CHECKED :)/i);
  expect(linkElement).toBeInTheDocument();
});
