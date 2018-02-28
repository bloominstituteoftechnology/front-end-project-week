import React, { Component } from 'react';

class NotesList extends Component {
  state = {
    notes: [
      {
        title: 'Note Title',
        content: 'Morbi pellentesque euismod venentis. Nulla ut nibh nunc. Phallasellus diam metus, blandit ac purus a effictur mollis...'
      },
      {
        title: 'Note Title',
        content: 'Morbi pellentesque euismod venentis. Nulla ut nibh nunc. Phallasellus diam metus, blandit ac purus a effictur mollis...'
      },
      {
        title: 'Note Title',
        content: 'Morbi pellentesque euismod venentis. Nulla ut nibh nunc. Phallasellus diam metus, blandit ac purus a effictur mollis...'
      },
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.notes.map((note, index) => {
            return (
              <li>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


export default NotesList;
