
import React, { Component } from 'react';
import NoteList from './noteList.js';
import AddNote from './addNote.js';
import ViewNote from './viewNote.js';
import EditNote from './editNote.js';


import { Route } from 'react-router-dom';

class Content extends Component {
    state={
            cards: [ 
                { title: "Note 1", content: "Hello World" },
                { title: "Note 2", content: " " },
                { title: "Note 4", content: " " },
                { title: "Note 4", content: " " },
                { title: "Note 5", content: " " },
                { title: "Note 6", content: " " },
                { title: "Note 7", content: " " },
                { title: "Note 8", content: " " },
                { title: "Note 9", content: " " },

        
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
    
    addNewCard = newCard => {
        this.setState({ cards: [...this.state.cards, newCard]});
    }

    updateNewNote = (newNote) => {
        this.setState({ cards: [...this.state.cards, newNote]});
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

    updateSelectedNote = (selectedNote) => {
        this.setState({ selectedNote: selectedNote });
    }

    deleteNote = title => {
        const updatedNotes = this.state.cards.filter(card => card.title !== title);
        this.setState({ cards: updatedNotes });
    }

    render() {
        return(
        <row>
            <div className='col-12'>
                    <Route exact path="/" render={() => <NoteList updateSelectedNote={this.updateSelectedNote} {...this.state} />} />
                    <Route path='/addNote' render={() => <AddNote addNewCard = {this.addNewCard} updateNewNote = {this.updateNewNote} />} />
                    <Route path='/ViewNote' render={(props) => <ViewNote {...this.state} deleteNote={this.deleteNote} {...props} />} />
                    <Route path="/edit-note" render={() => <EditNote {...this.state} updateNote={this.updateNote} />} />
            </div> 
        </row>       
        )
    }
}

export default Content;