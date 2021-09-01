// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';

afterEach(cleanup);

describe('Header component', () => {
  it('renders', () => {
    render(<Header></Header>);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});