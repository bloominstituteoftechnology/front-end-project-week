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

    render() {
        return(
            <div className='col-12'>
                <Route exact path='/' render={() => <NoteList {...this.state} />} />
                <Route path='/addNote' render={() => <AddNote addNewCard = {this.addNewCard} />} />
            </div>
        )
    }
}

export default NoteContent;