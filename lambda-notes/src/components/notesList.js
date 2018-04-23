import React, { Component } from 'react';

import Note from './note';

export default class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        { title: "Card title # 1", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card title # 2", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card title # 3", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card title # 2", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card title # 3", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      ]
    }
  }
  render() {
    return (
      <div className="note-list">
        { this.state.cards.map( card => <Note { ...card } /> ) }
      </div>
    );
  }

}
