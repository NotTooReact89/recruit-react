import * as React from 'react';
import CreditCardForm from './CreditCardForm';
const renderer = require('react-test-renderer');

it('should render credit card form component correctly', () => {
  const tree = renderer.create((
    <CreditCardForm />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})