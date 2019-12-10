import React, {Component} from 'react'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

import '../App.css'
class NotesNav extends Component {

    constructor(props) {
        super(props);
    }
    render(){
    return (
        <nav>
            <h1>Famous Quotes</h1>
            <div>
            <NavLink activeClassName='selected' to='/home'>
            <button onClick={this.props.clickForAllHandler}>View Your Notes</button>
            </NavLink>

            <NavLink activeClassName='selected' to='/new'>
            <button onClick={this.props.clickForNewHandler}> + Create New Note</button>
            </NavLink>
            </div>
        </nav>
    )
}
}

export default NotesNav