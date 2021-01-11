import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Game from './Game';
// import reportWebVitals from './reportWebVitals';
// import Test from './Test';
import AppRouter from './AppRouter';
import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  // <React.StrictMode>
  <Auth0Provider 
      domain="harisdomain.us.auth0.com"
      clientId="AFqqCQkalc9URtKti5MqSeGGiCrmqgEY"
      redirectUri={window.location.origin}>
      <AppRouter />
  </Auth0Provider>,
  document.getElementById('root')
);

