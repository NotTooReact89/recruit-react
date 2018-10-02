import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

localStorage.setItem('debug', 'recruit-react:*');

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
