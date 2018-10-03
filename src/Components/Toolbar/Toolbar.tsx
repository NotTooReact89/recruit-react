import * as React from 'react';

import { DrawerToggleButton } from '..';
import './Toolbar.css';

interface IToolbarProps {
  drawerClickHandler: () => void;
}

const Toolbar = (props: IToolbarProps) => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
        <div className='toolbar__toggle-button'>
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
    </nav>
  </header>
);

export default Toolbar;