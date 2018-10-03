import * as React from 'react';
import './App.css'
import { Backdrop, CreditCardForm, SideDrawer, Toolbar } from './Components';

interface IState {
  sideDrawerOpen: boolean
}

class App extends React.Component<any, IState> {

  constructor(props: any) {
    super(props)
    this.state= {
      sideDrawerOpen: false
    }
  }

  public onDrawerClick = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  public onBackdropClick = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  public render() {
    return (
      <div className='container-fluid'>
        <Toolbar drawerClickHandler={this.onDrawerClick} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {this.state.sideDrawerOpen ? <Backdrop click={this.onBackdropClick} /> : null}
        <main className='formContainer'>
          <CreditCardForm />
        </main>
      </div>
    );
  }
}

export default App;