import React from 'react';
import TestRenderer from 'react-test-renderer';

import Table from '../src/Table';

describe('Table', () => {
  it('renders a table with class `pure-table` by default', () => {
    const renderer = TestRenderer.create(<Table className="my-table" />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-table-bordered` class if the `bordered` property is set', () => {
    const renderer = TestRenderer.create(<Table bordered />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-table-horizontal` class if the `horizontal` property is set', () => {
    const renderer = TestRenderer.create(<Table horizontal />);
    expect(renderer.toJSON).toMatchSnapshot();
  });

  it('adds the `pure-table-striped` class if the `striped` property is set to true', () => {
    const renderer = TestRenderer.create(<Table striped />);
    expect(renderer.toJSON).toMatchSnapshot();
  });
});
