import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import NoteList from './components/NoteList.js';
import CreateNote from './components/CreateNote.js';


import './sidebar.css';

class Notesidebar extends Component{
    constructor(){
        super();
        this.state = {
            title: "",
            content: "",
            notesList: [
                {
                    "title": "Card_1",
                    "content": "fvgbhnjnhbgvfcd"
                },
                {
                    "title": "Card_2",
                    "content": "fvgbhnjnhbgvfcd"
                },
                {
                    "title": "Card_3",
                    "content": "fvgbhnjnhbgvfcd"
                }
            ]
        }
    }
   
    handleTextChange = (title) => {
        this.setState({ title: title })
    }

    submitNote = () => {
        const newNote = this.state.notesList.slice();
        const item = { title: this.state.title, content: this.state.content, id: Date.now() };
        newNote.push(item);
        console.log(newNote);
        this.setState({ title: "", content: "", newNote })
    }

    

    render(){
        console.log(this.state)
        return(
            <React.Fragment >
                <div className="sidebar">
                    <div className="sidebar-button">
                        <Button bsStyle="success"><Link to="/Notes" >View Notes</Link></Button>
                        <Button bsStyle="success"><Link to="/Create" >Create Notes</Link></Button>
                    </div>
                        <Route exact path="/Notes" render={props => <NoteList NoteData={this.state.notesList}/>} />
                        <Route exact path="/Create" render={props => <CreateNote
                            NoteData={this.state.notesList}
                            onTextChange={this.handleTextChange} />} />
                </div>
            </React.Fragment>
                
        )
    }
}

export default Notesidebar;