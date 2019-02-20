/* eslint no-restricted-globals:0 */

import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = '/note'
const LOGIN_FAILURE_PAGE = '/'
class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
        domain: 'stefan-rhys.auth0.com',
        clientID: '7vx7kBUj7b6K7bg6fBGB9lU2YxrV0M5g',
        redirectUri: "http://localhost:3000/note/callback",
        responseType: 'token id_token',
        scope: 'openid'
    });

    this.getProfile = this.getProfile.bind(this);
    // this.loadSession = this.loadSession.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.login = this.login.bind(this);
    // this.signOut = this.signOut.bind(this);
  }

  getAccessToken() {
    return this.accessToken;
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"))
    return new Date().getTime() < expiresAt
  }
    handleAuthentication() {

        this.auth0.parseHash((err, authResults) => {

            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem('expires_at', expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err)
            }
      })
  }


  login() {
    this.auth0.authorize();
  }


}

const auth0Client = new Auth();

export default auth0Client;
