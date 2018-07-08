import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {

    logout = () => {
        if (localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt');
            localStorage.removeItem('userId');
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className='navigation'>
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? <Link to={`/${localStorage.getItem('userId')}`}><h1>Lambda</h1><h1>Notes</h1></Link> : <Link to='/'><h1>Lambda</h1><h1>Notes</h1></Link>}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? <Link to={`/${localStorage.getItem('userId')}`}><button>View Your Notes</button></Link> : <Link to='/signup'><button>Sign Up</button></Link>}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? <Link to={`/${localStorage.getItem('userId')}/createnote`}><button>+ Create New Note</button></Link> : <Link to='/login'><button>Log In</button></Link>}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? <button className='logout' onClick={this.logout}>Log Out</button> : null}
            </div>
        )
    }
};

export default withRouter(Navigation); 