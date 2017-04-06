import React from 'react';
import TestRenderer from 'react-test-renderer';

import MenuItem from '../src/MenuItem';

describe('MenuItem', () => {
  it('renders a li with class `pure-menu-item` by default', () => {
    const renderer = TestRenderer.create(<MenuItem className="my-item" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-menu-selected` class if the `selected` property is set', () => {
    const renderer = TestRenderer.create(<MenuItem selected />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-menu-disabled` class if the `disabled` property is set', () => {
    const renderer = TestRenderer.create(<MenuItem disabled />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-menu-has-children` class if the `hasChildren` property is set', () => {
    const renderer = TestRenderer.create(<MenuItem hasChildren />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-menu-allow-hover` class if the `allowHover` property is set', () => {
    const renderer = TestRenderer.create(<MenuItem allowHover />);
    expect(renderer.toJSON).toMatchSnapshot();
  });
});
