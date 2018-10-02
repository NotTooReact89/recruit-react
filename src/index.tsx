import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Add these lines:
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'drawer-container:*');
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
