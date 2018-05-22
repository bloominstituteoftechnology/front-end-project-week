import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import NoteList from './components/NoteList.js';
import CreateNote from './components/CreateNote.js';


import './sidebar.css';

class Notesidebar extends Component{
    render(){
        return(
            <React.Fragment >
                <div className="sidebar">
                    <div className="sidebar-button">
                        <Button bsStyle="success"><Link to="/Notes" >View Notes</Link></Button>
                        <Button bsStyle="success"><Link to="/Create" >Create Notes</Link></Button>
                    </div>
                    <Route exact path="/Notes" component={NoteList} />
                    <Route exact path="/Create" component={CreateNote} />
                </div>
            </React.Fragment>
                
        )
    }
}

export default Notesidebar;