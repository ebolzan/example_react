import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Principal from './components/Principal';

const root = ReactDOM.createRoot(document.getElementById('root'));
const elementH2 = React.createElement("h2", null, "Aprendendo react do jeito certo");
const elementDIV = React.createElement("div", null, elementH2);
root.render(
  <Principal/>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
