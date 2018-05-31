import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateNote from '../CreateNote/CreateNote';
import NoteContainer from '../NoteContainer/NoteContainer';
import './Sidebar.css';

const Button = (props) => {
    return (
        <button className = {`${props.className}`}>{props.text}</button>
    )
}

class Sidebar extends Component {
    render() {
        return (
            <div className = "sidebar-wrapper">
                <Link to = '/notes'component={NoteContainer}><h1 className = "app-header">Lambda <br/>Notes</h1></Link>
                <Link to = '/notes/create' component={CreateNote} ><Button className="button-view" text={`+ Create a New Note`}/></Link>
                <Link to ='/notes'component={NoteContainer}><Button className = "button-create" text ={`View Your Notes`}/></Link>
            </div>
        );
    }
}

export default Sidebar;
