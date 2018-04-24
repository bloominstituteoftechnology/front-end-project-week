//IMPORTS
import React, { Component } from 'react';
import NoteList from './NoteList.js';
import AddNote from './AddNote.js';
import ViewNote from './ViewNote.js';
import EditNote from './EditNote.js';
import { Route } from 'react-router-dom';

class Content extends Component {
    constructor(){
        super();
        this.state={
            cards: [ { title: "Card title # 1", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
            { title: "Card title # 2", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Card title # 3", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Card title # 4", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Card title # 5", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Card title # 6", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Card title # 7", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Card title # 8", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }, { title: "Card title # 9", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }
          ], 
        };
    } 
    //can refactor later to say note
    addNewCard = newCard => {
        this.setState({ cards: [...this.state.cards, newCard]});
    }


    render() {
        return(
            <div className='col-12'>
                <Route exact path="/" render={() => <NoteList  {...this.state} />} />
                <Route path='/addNote' render={() => <AddNote addNewCard = {this.addNewCard} />} />
                <Route path='/ViewNote' component={ViewNote} />
                <Route path='/EditNote' component={EditNote} />
            </div>    
        )
    }
}

export default Content;