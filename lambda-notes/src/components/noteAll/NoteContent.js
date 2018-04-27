import React, { Component } from 'react';
import NoteList from './NoteList';
import AddNote from './AddNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';
import { Route } from 'react-router-dom';

class NoteContent extends Component {
    constructor(){
        super();
        this.state={
            cards: [ { title: "Card Title #1", content: "Content" },
                    { title: "Card Title #2", content: "Content" }
        ],
        };
    }

    addNewCard = newCard => {
        this.setState({ cards: [...this.state.cards, newCard]});
    }

    updateNote = (updatedNote) => {
        const updatedNotes = this.state.cards.map(note => {
            if (note.title === this.state.selectedNote.title) {
                return { title: updatedNote.title, content: updatedNote.content };
            } else {
                return note;
            }
            });

            this.setState({ cards: updatedNotes });
    }

    updatedSelectedNote = (selectedNote) => {
        this.setState({ selectedNote: selectedNote });
    }

    deleteNote = title => {
        const updatedNotes = this.state.cards.filter(card => card.title !== title);
            this.setState({ cards: updatedNotes });
    }

    render() {
        return(
            <Row>
                <div className='col-12'>
                    <Route exact path='/' render={() => <NoteList updateSelectedNote={this.updateSelectedNote} {...this.state} />} />
                    <Route path='/AddNote' render={() => <AddNote addNewCard={this.addNewCard} updateNewNote = {this.updateNewNote} />} />
                    <Route path='/ViewNote' render={() => <ViewNote {...this.state} deleteNote={this.deleteNote} {...props} />} />
                    <Route path='/EditNote' render={() => <EditNote {...this.state} updateNote={this.updateNote} />} />
                </div>
            </Row>
        )
    }
}

export default NoteContent;