import auth0 from 'auth0-js';

import history from '../history';

export default class Auth {
    accessToken;
    idToken;
    expiresAt;


  auth0 = new auth0.WebAuth({
    domain: 'paul-todo.auth0.com',
    clientID: 'R4Opaz6TbKScb1B89DgJ3vTZWEuoF5bU',
    redirectUri: 'http://localhost:3001/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  constructor(){
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  handleAuthentication(){
    this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
        } else if (err) {
          history.replace('/home');
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
        }
    });
  }

  getAccessToken(){
      return this.accessToken;
  }

  getIdToken(){
      return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    history.replace('/home');
  }

  renewSession(){
    this.auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
        } else if (err) {
            this.logout();
            console.log(err);
            alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        }
    });
  }

  logout(){
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated(){
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }

}