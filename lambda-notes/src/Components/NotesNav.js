import React, {Component} from 'react'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

import '../App.css'
class NotesNav extends Component {

    render(){
        let button1 =
            <NavLink activeClassName='selected' to='/home'>
            <button onClick={this.props.clickForAllHandler}>View Your Notes</button>
            </NavLink>
        
        let button2 =
            <NavLink activeClassName='selected' to='/new'>
            <button onClick={this.props.clickForNewHandler}> + Create New Note</button>
            </NavLink>


        if (this.props.DEL === true) {
            button1 =
            <button disabled={true}>View Your Notes</button>
            button2 =
            <button disabled={true}> + Create New Note</button>

        }
    return (
        <nav>
            <div className='nav'>
            <h1>Lambda Notes</h1>
            {button1}
            {button2}
            </div>
        </nav>
    )
}
}

export default NotesNav