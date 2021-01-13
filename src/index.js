import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import { Auth0Provider } from "@auth0/auth0-react";
// import App from './App';
ReactDOM.render(
  <Auth0Provider 
      domain="harisdomain.us.auth0.com"
      clientId="AFqqCQkalc9URtKti5MqSeGGiCrmqgEY"
      redirectUri={window.location.origin}>
      <AppRouter />
  </Auth0Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
