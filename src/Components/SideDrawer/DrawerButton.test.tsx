import * as React from 'react';
import DrawerButton from './DrawerButton';
const renderer = require('react-test-renderer');

it('should render drawer button correctly', () => {
  const tree = renderer.create((
    <DrawerButton click={jest.fn()} />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})