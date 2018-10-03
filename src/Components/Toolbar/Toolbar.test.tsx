import * as React from 'react';
import Toolbar from './Toolbar';
const renderer = require('react-test-renderer');

it('should render credit card form component correctly', () => {
  const tree = renderer.create((
    <Toolbar drawerClickHandler={jest.fn()} />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})