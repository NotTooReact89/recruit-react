import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Backdrop from './Backdrop';

it('should render backdrop correctly', () => {
  const tree = renderer.create((
    <Backdrop click={jest.fn()} />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})