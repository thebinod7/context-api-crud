import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import '../src/assets/style.css';

import { initializeFirebase } from './modules/pushNotification';

initializeFirebase();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
