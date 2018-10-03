import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CreditCardForm from './CreditCardForm';

it('should render credit card form component correctly', () => {
  const tree = renderer.create((
    <CreditCardForm />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})