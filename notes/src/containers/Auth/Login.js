import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInWidget from './SigninWidget';
import { withAuth } from '@okta/okta-react';
// import styled from "styled-components";

// const LoginContent = styled.div`
//  display: flex;
//  flex-direction: column;
//  justify-content: center;
//  align-items: center;
// `

// const HEADER = styled.h1`

//  font-size:30px;
//  font-weight: bold;
//  color: black;
// `
// const Button = styled.button`
//   background: #00cec9;
//   border: 1px solid rgb(167, 167, 167);
//   padding: 15px;
//   margin: 10px;
//   width: 210px;
//   font-size: 20px;
//   font-weight: bold;
//   color: white;
//   outline: none;
//   cursor: pointer;
// `;

export default withAuth(class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: null
        };
        this.checkAuthentication();
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    onSuccess = (res) => {
        if (res.status === 'SUCCESS') {
            res.session.setCookieAndRedirect('https://dev-106394.okta.com/app/note')
            return this.props.auth.redirect({
                sessionToken: res.session.token
            });
        } else {
            // The user can be in another authentication state that requires further action.
            // For more information about these states, see:
            //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
        }
    }

    onError = (err) =>{
        console.log('error logging in', err);
    }

    render() {



        if (this.state.authenticated === null) return null;
        return this.state.authenticated ?
            <Redirect to={{ pathname: '/' }} /> :
            <SignInWidget
                baseUrl={this.props.baseUrl}
                onSuccess={this.onSuccess}
                onError={this.onError} />;
    }
});