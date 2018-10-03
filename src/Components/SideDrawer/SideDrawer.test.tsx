import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SideDrawer from './SideDrawer';

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