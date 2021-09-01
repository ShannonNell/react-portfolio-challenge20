// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav></Nav>);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Nav
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
