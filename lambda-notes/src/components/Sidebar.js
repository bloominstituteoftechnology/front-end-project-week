import React, {Component} from 'react';
import {Route, NavLink,} from 'react-router-dom';
import NewNoteForm from './NewNoteForm';
import './Sidebar.css';





class Sidebar extends Component {
    render(){
    return ( 
        <div className="sidebar-container">
        <ul className="nav-bar">
        <div className="nav">
        <h1 className="title">Lambda Notes</h1>
        <li><NavLink exact to="/" className="nav-text" activeClassName="active-component">View Your Notes</NavLink></li>
         &emsp;
         <li><NavLink to="/create-new-note/" className="nav-text" activeClassName="active-component">+ Create New Note</NavLink></li>
         </div>
    </ul>
   <Route exact path="/create-new-note/" component={NewNoteForm} />
</div>
        );
    }
}
 

export default Sidebar;