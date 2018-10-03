import * as React from 'react';
import { IClickProps } from '..';
import './DrawerButton.css';

const DrawerButton = (props: IClickProps) => (
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
    </button>
);

export default DrawerButton;