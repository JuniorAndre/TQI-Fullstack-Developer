import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app with button, a quote and a button', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByText(/Naruto/);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});
