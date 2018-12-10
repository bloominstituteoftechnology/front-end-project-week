import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { withRouter } from 'react-router';


class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            loggedIn: true
        }
    }

    logout = () => {
        localStorage.removeItem('username');
        console.log('logout');
        this.props.logout();
    }

    render() {
        return (
            <div className="sidebar">
                <h1>Lambda Notes</h1>
                <div className="button btn-sidebar"><Link to="/" onClick={() => this.forceUpdate()}>View Your Notes</Link></div>
                <div className="button btn-sidebar"><Link to="/create">+ Create New Note</Link></div>
                <div className="btn-danger btn-sidebar" onClick={this.logout}>Log out</div>
            </div>
        )
    }
}

export default withRouter(Sidebar);