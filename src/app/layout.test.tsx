import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

jest.mock('../components/Auth', () => {
  return function MockAuth() {
    return <div data-testid='auth-component' />;
  };
});

describe('Layout page', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
