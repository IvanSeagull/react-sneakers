import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.scss';
import App from './App';

import 'macro-css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
