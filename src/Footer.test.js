import { render, screen } from '@testing-library/react';
import Footer from './components/Footer';

test('footer exists', () => {
  render(<Footer />);
  expect(screen.getByText(/created for demonstrative purposes/i)).toBeInTheDocument();
});
