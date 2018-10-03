import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Toolbar from './Toolbar';

it('should render credit card form component correctly', () => {
  const tree = renderer.create((
    <Toolbar drawerClickHandler={jest.fn()} />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})