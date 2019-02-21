import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };

    }

    checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidMount = async () => {
        this.checkAuthentication();
    }

    componentDidUpdate = async () =>{
        this.checkAuthentication();
    }

    login = async () =>{
        this.props.auth.login('/');
    }

    logout = async () => {
        this.props.auth.logout('/');
    }

    render() {
        if (this.state.authenticated === null) return null;

        const button = this.state.authenticated ?
            <button onClick={this.logout}>Logout</button> :
            <button onClick={this.login}>Login</button>;

        return (
            <div>
                <Link to='/'>Home</Link><br />

                {button}
            </div>
        );
    }
});