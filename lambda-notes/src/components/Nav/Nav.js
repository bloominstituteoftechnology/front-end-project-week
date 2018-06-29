import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleOnClickLogin = (event) => {
    this.props.history.push('/login');
  }

  handleOnClickRegister = (event) => {
    this.props.history.push('/register');
  }

  handleOnClickLogout = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
    }
    this.props.onClickLogout('Logout Success!');
  };

    render() { 
        return (
            <div className="Nav-container">
                <h1>Lambda Notes</h1>
                {!this.props.isLogged && <div>
                  <button onClick={this.handleOnClickLogin}>Login</button>
                  <button onClick={this.handleOnClickRegister}>Register</button>
                </div>}
                {this.props.isLogged && <div>
                  <button onClick={this.handleOnClickLogout}>Logout</button>
                <Link to="/notes">
                    <button className="main-button">View Your Notes</button>
                </Link>
                <Link to="/newnote">
                    <button className="main-button">+ Create New Note</button>
                </Link>
                </div>}

            </div>
        )
    }
}
 
export default withRouter(Nav);