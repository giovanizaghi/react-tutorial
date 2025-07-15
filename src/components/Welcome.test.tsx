import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('renders Welcome with name prop', () => {
  render(<Welcome name="Developer" />);
  expect(screen.getByText("Welcome, Developer")).toBeInTheDocument();
});
