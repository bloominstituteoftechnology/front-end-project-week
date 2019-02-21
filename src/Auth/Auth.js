import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'rob-lambda-notes.auth0.com',
    clientID: 'o0qVR11rVDyOGiHeHCKLCUwO17KvJi4d',
    redirectUri: 'https://zen-knuth-c4274b.netlify.com/',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}