//IMPORTS
import React, { Component } from 'react';
import NoteList from './NoteList.js';
import AddNote from './AddNote.js';
import ViewNote from './ViewNote.js';
import EditNote from './EditNote.js';
import { Route } from 'react-router-dom';

class Content extends Component {
    constructor() {
        super();
        this.state={
            cards: [ 
                { title: "Note Name # 1", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { title: "Note Name # 2", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Note Name # 3", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Note Name # 4", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Note Name # 5", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Note Name # 6", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Note Name # 7", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Note Name # 8", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Note Name # 9", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }
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
    //can refactor later to say note - this is for adding new notes
    addNewCard = newCard => {
        this.setState({ cards: [...this.state.cards, newCard]});
    }

    //updating notes
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
        // console.log(selectedNote);
        this.setState({ selectedNote: selectedNote });
    }

    //delete note
    deleteNote = title => {
        const updatedNotes = this.state.cards.filter(card => card.title !== title);
        this.setState({ cards: updatedNotes });
    }

    render() {
        return(
        <row>
            <div className='col-12'>
                    <Route exact path="/" render={() => <NoteList updateSelectedNote={this.updateSelectedNote} {...this.state} />} />
                    <Route path='/AddNote' render={() => <AddNote addNewCard = {this.addNewCard} updateNewNote = {this.updateNewNote} />} />
                    <Route path='/ViewNote' render={(props) => <ViewNote {...this.state} deleteNote={this.deleteNote} {...props} />} />
                    <Route path="/edit-note" render={() => <EditNote {...this.state} updateNote={this.updateNote} />} />
                    {/* <Route path='/NoteList' render={() => <NoteList updateSelectedNote={this.updateSelectedNote} {...this.state} />} /> */}
            </div> 
        </row>       
        )
    }
}

export default Content;