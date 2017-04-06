import React from 'react';
import TestRenderer from 'react-test-renderer';

import Menu from '../src/Menu';

describe('Menu', () => {
  it('renders a div with class `pure-menu` by default', () => {
    const renderer = TestRenderer.create(<Menu className="my-menu" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-menu-horizontal` class if the `horizontal` property is set', () => {
    const renderer = TestRenderer.create(<Menu horizontal />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-menu-scrollable` class if the `scrollable` property is set', () => {
    const renderer = TestRenderer.create(<Menu scrollable />);
    expect(renderer.toJSON).toMatchSnapshot();
  });
});
