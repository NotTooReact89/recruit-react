import * as React from 'react';
import { IClickProps } from '..';

import './Backdrop.css';

const Backdrop = (props: IClickProps) => (
    <div className="backdrop" onClick={props.click} />
);

export default Backdrop;