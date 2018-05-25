import React, { Component } from 'react';
import NoteList from './NoteList';
import AddNote from './AddNote';
import ViewNote from './ViewNote';
// import EditNote from './EditNote';
import { Route } from 'react-router-dom';

class NoteContent extends Component {
    constructor(){
        super();
        this.state={
            cards: [ { title: "Card Title #1", content: "Content" },
                        { title: "Card Title #2", content: "Content" }
                ],
            newNote: {
                title: '',
                content: ''
            },
            selectedNote: {
                title: '',
                content: ''
            }
        }
    }

    addNewCard = newCard => {
        this.setState({ cards: [...this.state.cards, newCard]});
    }

    updateNewNote = (newNote) => {
        this.setState({ cards: [...this.state.cards, newNote]});
    }

    updatedSelectedNote = (selectedNote) => {
        // console.log(selectedNote);
        this.setState({ selectedNote: selectedNote });
    }

    render() {
        return(
            <div>
                <div className='col-12'>
                    <Route exact path='/' render={() => <NoteList updateSelectedNote={this.updateSelectedNote} {...this.state} />} />
                    <Route path='/AddNote' render={() => <AddNote addNewCard={this.addNewCard} updateNewNote={this.updateNewNote} />} />
                    <Route path='/ViewNote' render={(props) => <ViewNote {...this.state} deleteNote={this.deleteNote} {...props} />} />
                    <Route path='/NoteList' render={() => <NoteList updateSelectedNote= {this.updateSelectedNote} {...this.state} />} />
                </div>
            </div>
        )
    }
}

export default NoteContent;