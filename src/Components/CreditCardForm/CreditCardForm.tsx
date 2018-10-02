import * as React from 'react';
import Log from '../../Lib/Log';
import './CreditCardForm.css';
import { FormErrors } from './FormErrors';

interface IFormError {
  ccNumber: string,
  cvvNumber: string,
  expiryDate: string
}

interface IFormState {
  ccNumber: string,
  cvvNumber: string,
  ccNumberValid: boolean,
  cvvNumberValid: boolean,
  expiryDate: string,
  expiryDateValid: boolean,
  formErrors: IFormError,
  formValid: boolean
}
class CreditCardForm extends React.Component<any, IFormState> {
  constructor (props: any) {
    super(props);
    this.state = {
      ccNumber: '',
      ccNumberValid: false,
      cvvNumber: '',
      cvvNumberValid: false,
      expiryDate: '',
      expiryDateValid: false,
      formErrors: {ccNumber: '', cvvNumber: '', expiryDate: ''},
      formValid: false
    }
  }

  public handleUserInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value} as any,
                  () => { this.validateField(name, value) });
  }

  public validateField(fieldName: string, value: string) {
    const fieldValidationErrors = this.state.formErrors;
    let ccNumberValid = this.state.ccNumberValid;
    let cvvNumberValid = this.state.cvvNumberValid;
    let expiryDateValid = this.state.expiryDateValid;

    switch(fieldName) {
      case 'ccNumber':
      ccNumberValid = value.length >= 1;
        fieldValidationErrors.ccNumber = ccNumberValid ? '' : ' should not be empty';
        break;
      case 'cvvNumber':
        cvvNumberValid = value.length >= 1;
        fieldValidationErrors.cvvNumber = cvvNumberValid ? '': ' should not be empty';
        break;
      case 'expiryDate':
        expiryDateValid = value.length >= 1;
        fieldValidationErrors.expiryDate = expiryDateValid ? '': ' should not be empty';
        break;
      default:
        break;
    }
    this.setState({
      ccNumberValid,
      cvvNumberValid,
      expiryDateValid,
      formErrors: fieldValidationErrors
    }, this.validateForm);
  }

  public validateForm() {
    this.setState({formValid: this.state.ccNumberValid && this.state.cvvNumberValid && this.state.expiryDateValid});
  }

  public errorClass(error: string) {
    return(error.length === 0 ? '' : 'has-error');
  }

  public handleSubmit = (event: any) => {
    event.preventDefault()
    if (this.state.formValid) {
        Log.info(`Credit card number: ${event.target.ccNumber.value}`)
        Log.info(`CVV number: ${event.target.cvvNumber.value}`)
        Log.info(`Expiry number: ${event.target.expiryDate.value}`)
    }
  }

  public render () {
    return (
      <form onSubmit={this.handleSubmit} className="ccForm">
        <h2>Enter your credit card details</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.ccNumber)}`}>
          <label htmlFor="ccNumber">Credit card number</label>
          <input type="text" required={true} className="form-control input-custom" name="ccNumber"
            placeholder="Your 10 digit credit card number"
            value={this.state.ccNumber}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.cvvNumber)}`}>
          <label htmlFor="cvvNumber">CVV number</label>
          <input type="password" required={true} className="form-control input-custom" name="cvvNumber"
            placeholder="Three digit at the back of your card"
            value={this.state.cvvNumber}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.expiryDate)}`}>
          <label htmlFor="expiryDate">Expiry date</label>
          <input type="date" required={true} className="form-control input-custom" name="expiryDate"
            placeholder="Your credit card expiry date"
            value={this.state.expiryDate}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" className="btn btn-custom">Submit</button>
      </form>
    )
  }
}

export default CreditCardForm;