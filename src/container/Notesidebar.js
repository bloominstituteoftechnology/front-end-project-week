import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import NoteList from './components/NoteList.js';
import CreateNote from './components/CreateNote.js';
import Notes from './func/Notes.js';
import SingleNote from './func/SingleNote.js';


import './component.css';

class Notesidebar extends Component{
    constructor(){
        super();
        this.state = {
            notesList: [
                {
                "title": "Card_1",
                "content": "fvgbhnjnhbgvfcd",
                id: 1527057950536
                }, 
                {
                    "title": "Card_2",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950457
                },
                {
                    "title": "Card_3",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950123
                },
                {
                    "title": "Card_4",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950224
                },
                {
                    "title": "Card_5",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950749
                },
                {
                    "title": "Card_6",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950123
                },
                
            ],
        }
    }

    fetchData = (dataFromChild) => {
        console.log("fetchData", dataFromChild);
        this.setState({ notesList: dataFromChild 
        });   
    }

    filterNotes = (props) => {
        const newArr = this.state.notesList.filter(note => {
        return note.title === props.match.params.title
        })
        return newArr[0];
    }

    deleteNotes = (id) => {
        const newIds = this.state.notesList.filter(note => {
        return note.id !== id
        })
        this.setState({ notesList : newIds})
    }
    
    render() {
        console.log("NSB",this.props)
        return(
            <React.Fragment >
                <div className="sidebar">
                    <div className="sidebar-button">
                        <Button bsStyle="success"><Link to="/Notes" >View Notes</Link></Button>
                        <Button bsStyle="success"><Link to="/Create" >Create Notes</Link></Button>
                    </div>
                    <Route exact path="/Notes" render={props => <NoteList {...props} NoteData={this.state.notesList}/>} />
                    <Route exact path="/Create" render={props => <CreateNote fetch={this.fetchData} />} />
                    <Route path="/Notes/:title" render={props => <SingleNote NoteData={this.filterNotes(props)} DeleteData={this.deleteNotes} />} />
                </div>
            </React.Fragment>
                
            )
        }

        
    
    }

    // var Arr = this.state.notesList.filter( note => note.title !== index );
        // this.setState({ notesList: Arr });
export default Notesidebar;