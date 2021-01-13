import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import GlobalStyle from './GlobalStyle';

import Routes from './routes/routes';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// d1d61cc7f5af865cd1747a6d33d68ce1