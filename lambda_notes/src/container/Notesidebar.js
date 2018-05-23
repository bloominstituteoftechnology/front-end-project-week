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
            notesList: [
                    {
                    "title": "Card_1",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950536
                },
            ]
        }
    }

    fetchData = (dataFromChild) => {
    console.log("fetchData", dataFromChild);
    this.setState({ notesList: dataFromChild });    
}

    // submitNote = (e) => {
    //     e.preventDefault();
    //     const newNote = this.state.notesList;
    //     const item = { title: this.state.title, content: this.state.content, id: Date.now() };
    //     newNote.push(item);
    //     console.log(newNote);
    //     this.props.fetch(this.state.notesList);
    //     this.setState({ title: "", content: "", newNote })
    // }

    // componentDidMount(){
    //     console.log("testing lifecycle component", this.state.notesList)
    //     this.fetchData();
    // }
   
    

    render(){
        return(
            <React.Fragment >
                <div className="sidebar">
                    <div className="sidebar-button">
                        <Button bsStyle="success"><Link to="/Notes" >View Notes</Link></Button>
                        <Button bsStyle="success"><Link to="/Create" >Create Notes</Link></Button>
                    </div>
                    <Route exact path="/Notes" render={props => <NoteList NoteData={this.state.notesList}/>} />
                    <Route exact path="/Create" render={props => <CreateNote fetch={this.fetchData} />} />
                </div>
            </React.Fragment>
                
        )
    }
}

export default Notesidebar;