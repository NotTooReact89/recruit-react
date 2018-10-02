import * as React from 'react';
import Images from '../../Images';
import './SideDrawer.css';

interface ISideDrawerProps {
  show: boolean
}

interface ISideDrawerState {
  drawerClass: string
}

class SideDrawer extends React.Component<ISideDrawerProps, ISideDrawerState> {
  public static getDerivedStateFromProps(nextProps: ISideDrawerProps, prevState : ISideDrawerState) {
    if (nextProps.show) {
      return {
        drawerClass: 'side-drawer open'
      }
    }
    return {
      drawerClass: 'side-drawer'
    }
  }

  public props: ISideDrawerProps
  public state: ISideDrawerState

  constructor(props: ISideDrawerProps) {
    super(props)
    this.state = {
      drawerClass : this.props.show ? 'side-drawer open' : 'side-drawer'
    }
  }

  public render() {
    return (
      <nav className={this.state.drawerClass}>
        <a href="/"><img src={Images.icons.back} alt='back' width="64" height="64" /></a>
        <ul>
          <li>
            <a href="/">Menu Item 1</a>
          </li>
          <li>
            <a href="/">Menu Item 2</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
