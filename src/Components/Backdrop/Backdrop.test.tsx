import * as React from 'react';
import Backdrop from './Backdrop';
const renderer = require('react-test-renderer');

it('should render backdrop correctly', () => {
  const tree = renderer.create((
    <Backdrop click={jest.fn()} />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})