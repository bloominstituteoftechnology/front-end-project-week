import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();

            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            // Sets state to logged in if we have username and password in local storage
            if (localStorage.getItem('token') ) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        }

        render() {
            // If logged in, it will show App. Otherwise it will show the login page
            if (this.state.loggedIn) return <App />
            return <Login />
        }
    }

export default Authenticate;