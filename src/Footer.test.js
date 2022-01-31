import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('footer exists', () => {
  render(
    <Footer />
  );
  expect(screen.getByText(/created for demonstrative purposes/i)).toBeInTheDocument();
});
