import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// lo que me permite usar ruta es este componente 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  {/* preparando mi aplicacion para usar rutas */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

