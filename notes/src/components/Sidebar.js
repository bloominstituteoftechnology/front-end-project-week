import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const logout = () => {
    localStorage.removeItem('username');
    console.log('logout');
    window.location.reload();
}

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="sidebar">
                <h1>Lambda Notes</h1>
                <div className="button"><Link to="/" onClick={() => this.forceUpdate()}>View Your Notes</Link></div>
                <div className="button"><Link to="/create">+ Create New Note</Link></div>
                <GoogleLogout
                buttonText="Log out"
                onLogoutSuccess={logout}>
                </GoogleLogout>
            </div>
        )
    }
}

export default Sidebar;