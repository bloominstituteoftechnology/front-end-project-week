import React from 'react';
import styled from "styled-components";
import OktaSignIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';


const LoginContent = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

const HEADER = styled.h1`

 font-size:30px;
 font-weight: bold;
 color: black;
`
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


export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {user:null}
        this.widget = new OktaSignIn({
            baseUrl: 'https://dev-106394.okta.com',
            issuer: 'https://dev-106394',
            clientId: '0oab6y992hZoZmVyi356',
            redirectUri: 'http://localhost:3000/implicit/callback',
            authParams: {
                responseType: 'id_token'
            },
            idps: [
                { type: 'GOOGLE', id: '0oab6xloaFX564Yvm356' }
            ]

        })
    }

    // ...other stuff removed for brevity's sake
    componentDidMount() {
        this.widget.session.get((response) => {
            if (response.status !== 'INACTIVE') {
                this.setState({ user: response.login });
            } else {
                this.showLogin();
            }
        });
    }
    showLogin = () => {
        this.widget.renderEl({ el: this.loginContainer },
            (response) => {
                this.setState({ user: response.claims.email });
            },
            (err) => {
                console.log(err);
            }
        );
    }

    logout = () => {
        this.widget.signOut(() => {
            this.setState({ user: null });
            this.showLogin();
        });
    }


    render() {
        return (
            <LoginContent>
                <HEADER>LOGIN IN LAMBDA NOTES</HEADER>

                {this.state.user ? (
                    <div className="container">
                        <div>Welcome, {this.state.user}!</div>
                        <button onClick={this.logout}>Logout</button>
                    </div>
                ) : null}
                {this.state.user ? null : (
                    <div ref={(div) => { this.loginContainer = div; }} />
                )}
            </LoginContent>
        )
    };
}

