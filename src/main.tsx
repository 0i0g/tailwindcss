import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'rc-slider/assets/index.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './fonts/line-awesome-1.3.0/css/line-awesome.css';
import './index.css';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
