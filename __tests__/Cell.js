import React from 'react';
import TestRenderer from 'react-test-renderer';

import Cell from '../src/Cell';

describe('Cell', () => {
  it('renders a div with class `pure-u-1` by default', () => {
    const renderer = TestRenderer.create(<Cell className="my-cell" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('applies the class based on the `size` property', () => {
    const renderer = TestRenderer.create(<Cell size="1/2" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-u-sm-*` class based on the `sm` property', () => {
    const renderer = TestRenderer.create(<Cell size="1/2" sm="1" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-u-md-*` class based on the `md` property', () => {
    const renderer = TestRenderer.create(<Cell size="1/2" md="1" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-u-lg-*` class based on the `lg` property', () => {
    const renderer = TestRenderer.create(<Cell size="1/2" lg="1/3" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-u-xl-*` class based on the `xl` property', () => {
    const renderer = TestRenderer.create(<Cell size="1/2" lg="2/3" xl="1/4" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });
});
