import * as React from 'react';
import SideDrawer from './SideDrawer';
const renderer = require('react-test-renderer');

it('should show side drawer correctly', () => {
  const tree = renderer.create((
    <SideDrawer show={true} />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should hide side drawer correctly', () => {
    const tree = renderer.create((
      <SideDrawer show={false} />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })