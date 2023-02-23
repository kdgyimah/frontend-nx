import { render } from '@testing-library/react';

import Icontext from './icontext';

describe('Icontext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icontext />);
    expect(baseElement).toBeTruthy();
  });
});
