import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './Styles/GlobalStyles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
