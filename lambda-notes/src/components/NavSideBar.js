import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavSideBar extends Component{
    render(){
        return(
            <div>
                <h1>Lambda Notes</h1>
                <Link to="/">View Your Notes</Link>
                <Link to="/create-note">+Create New Note</Link>
            </div>
        )
    }
}

export default NavSideBar;