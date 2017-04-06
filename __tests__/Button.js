import React from 'react';
import TestRenderer from 'react-test-renderer';

import Button from '../src/Button';

describe('Button', () => {
  it('renders a button by default', () => {
    const renderer = TestRenderer.create(<Button />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('renders an anchor the `href` property is set', () => {
    const renderer = TestRenderer.create(<Button href="#" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('transfers the `href` property to the anchor', () => {
    const renderer = TestRenderer.create(<Button href="#test" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-button` class', () => {
    const renderer = TestRenderer.create(<Button className="my-button" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-button-active` class if the `active` property if set', () => {
    const renderer = TestRenderer.create(<Button active />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('transfers the `disabled` and adds the `pure-button-disabled` class if the `disabled` property if set', () => {
    const renderer = TestRenderer.create(<Button disabled />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-button-primary` class if the `primary` property if set', () => {
    const renderer = TestRenderer.create(<Button primary />);
    expect(renderer.toJSON).toMatchSnapshot();
  });
});
