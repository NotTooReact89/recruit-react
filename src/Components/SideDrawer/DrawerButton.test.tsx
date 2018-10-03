import * as React from 'react';
import * as renderer from 'react-test-renderer';
import DrawerButton from './DrawerButton';

it('should render drawer button correctly', () => {
  const tree = renderer.create((
    <DrawerButton click={jest.fn()} />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})