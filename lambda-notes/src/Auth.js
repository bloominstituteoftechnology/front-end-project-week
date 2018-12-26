import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'lambda-notes.auth0.com',
    clientID: 'R3VilooIfpbBhFVUBMMHCUocuIgFyKK4',
    redirectUri: 'http://localhost:3000/home',
    responseType: 'token id_token',
    scope: 'openid',
  });

  login() {
    this.auth0.authorize();
  }

  
}
