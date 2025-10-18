import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

// add jest-axe matchers to expect
expect.extend(toHaveNoViolations);
