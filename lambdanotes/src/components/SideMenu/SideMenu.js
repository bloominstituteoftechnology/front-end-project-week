import React, { Component } from 'react';
import './SideMenu.css';
import { Route, NavLink } from "react-router-dom";

import ListView from '../ListView/ListView';
import NewNote from '../NewNote/NewNote';
import NoteView from '../NoteView/NoteView';
import EditNote from '../EditNote/EditNote';

class SideMenu extends Component {
    constructor() {
        super();
        this.state = {
            notes: [
                {
                    id: 0,
                    title: "Note 0",
                    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
                },
                {
                    id: 1,
                    title: "Note 1",
                    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
                },
                {
                    id: 2,
                    title: "Note 2",
                    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
                },
                {
                    id: 3,
                    title: "Note 3",
                    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
                }
            ],
            title:'',
            textBody: '',
        }
    }

    addNote = event => {
        event.preventDefault();
        const notes = this.state.notes.slice();
        notes.push({ textBody: this.state.textBody, title: this.state.title, id: Date.now() });
        this.setState({ notes, title: '', textBody: '' });
    }

    deleteNote = note => {
        let notes = this.state.notes.slice();
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes.splice(i, 1);
            }
        }
        this.setState({ notes })
    }

    editNote = note => {
        //copia del estado utilizando el método slice() y pasando el parametro note
        let notes = this.state.notes.slice();
        // iteramos con i el array/lista de objectos guardados/store en el objeto notes
        for(let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes[i] = note
            }
        }
        this.setState({ notes })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        return (
            <div className="sidemenu-container">
                <ul className="nav-bar">
                    <div className="nav-container">
                        <h1 className="menu-title">Lambda<br/>Notes</h1>
                        <li><NavLink exact to="/" className="nav-text" activeClassName="active-component">View Your Notes</NavLink></li>
                        <li><NavLink to="/create-new-note/" className="nav-text" activeClassName="active-component">+ Create New Note</NavLink></li>
                    </div>     
                </ul>

                <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />}/>
                <Route exact path="/create-new-note/" render={(props) => <NewNote {...props} notes={this.state.notes} addNote={this.addNote} handleInputChange={this.handleInputChange}/>}/>
                <Route exact path="/note-view/:id" render={(props) => <NoteView {...props} notes={this.state.notes} deleteNote={this.deleteNote} handleInputChange={this.handleInputChange}/>}/>
                <Route exact path="/note-view/:id/edit" render={(props) => <EditNote {...props} notes={this.state.notes} editNote={this.editNote} handleInputChange={this.handleInputChange}/>}/>
            </div>
        );
    }
}

export default SideMenu;