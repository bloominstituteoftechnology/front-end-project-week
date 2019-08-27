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
            <div className="fixed">
            <h1>Lambda Notes</h1>
            <NavLink activeClassName='selected' to='/home'>
            <button className="buttons" onClick={this.props.clickForAllHandler}>View Your Notes</button>
            </NavLink>

            <NavLink activeClassName='selected' to='/new'>
            <button className="buttons" onClick={this.props.clickForNewHandler}> + Create New Note</button>
            </NavLink>
            </div>
        </nav>
    )
}
}

export default NotesNav