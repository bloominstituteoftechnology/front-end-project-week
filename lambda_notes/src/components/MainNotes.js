import React, { Component } from 'react';
import NotesList from './NotesList';
import CreateNote from './CreateNote';
import NoteView from './NoteView';
import EditNote from './EditNote';
import { Route, Switch } from 'react-router-dom';
import './index.css';

export default class MainNotes extends Component {
    constructor() {
        super();
        this.state= {
            dummyNotes: [
            {
                id: 1,
                title: 'First Note',
                body: `When you play the game of thrones, you win or you die. May the Father
                judge him justly. The Dothraki do things in their own time, for their
                own reasons. Forgive my manners. I don't see many ladies these days.
                Lucky for the ladies. And now his watch is ended. The winds of Winter.
                You know nothing, Jon Snow. It's ten thousand miles between Kings
                landing and the wall.`,
            },
            {
              id: 2,
              title: 'Second Note',
              body: `When you play the game of kings, you win or you die. May the Father
              judge him justly. The Dothraki do things in their own time, for their
              own reasons. Forgive my manners. I don't see many ladies these days.
              Lucky for the ladies. And now his watch is ended. The winds of Winter.
              You know nothing, Jon Snow. It's ten thousand miles between Kings
              landing and the wall.`,
          },
          {
              id: 3,
              title: 'Third Note',
              body: `When you play the game of birds, you win or you die. May the Father
              judge him justly. The Dothraki do things in their own time, for their
              own reasons. Forgive my manners. I don't see many ladies these days.
              Lucky for the ladies. And now his watch is ended. The winds of Winter.
              You know nothing, Jon Snow. It's ten thousand miles between Kings
              landing and the wall.`,
          }
        ],
            title: '',
            body: '',
        }
    }

    addNote = e => {
        e.preventDefault();
        const noteSnapshot = this.state.dummyNotes.slice();
        noteSnapshot.push({
            id: this.state.dummyNotes.length + 1,
            title: this.state.title,
            body: this.state.body,
        });
        this.setState({
            dummyNotes: noteSnapshot, 
            title: '',
            body: ''
        });
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        return(
            <div className='notesContainer'>
                <Switch>
                    <Route exact path='/' render={props =>
                        (
                            <NotesList
                                {...props}
                                dummyNotes={this.state.dummyNotes}
                            />
                        )} 
                    />
                    <Route exact path='/note/:id' render={props =>
                        (
                            <NoteView
                                {...props}
                                dummyNotes={this.state.dummyNotes}
                            />
                        )} 
                    />
                    <Route exact path='/create' render={props =>
                        (
                            <CreateNote 
                                {...props}
                                handleInputChange={this.handleInputChange}
                                handleSubmit={this.addNote}
                            /> 
                        )}  
                    />
                    <Route exact path='/edit/:id' render={props =>
                        (
                            <EditNote
                                {...props}
                            />
                        )} 
                    />
                </Switch>
            </div>
        );
    }
}