import React, { Component } from 'react';
import './index.css';

export default class NotesList extends Component {
  constructor() {
      super();
      this.state = {
          dummyNotes: [
              {
                  _id: 'dsagh783',
                  title: 'First Note',
                  body: `When you play the game of thrones, you win or you die. May the Father
                  judge him justly. The Dothraki do things in their own time, for their
                  own reasons. Forgive my manners. I don't see many ladies these days.
                  Lucky for the ladies. And now his watch is ended. The winds of Winter.
                  You know nothing, Jon Snow. It's ten thousand miles between Kings
                  landing and the wall.`,
                    createdAt: 6537826124945,
              },
              {
                _id: 'dsag2413',
                title: 'Second Note',
                body: `When you play the game of kings, you win or you die. May the Father
                judge him justly. The Dothraki do things in their own time, for their
                own reasons. Forgive my manners. I don't see many ladies these days.
                Lucky for the ladies. And now his watch is ended. The winds of Winter.
                You know nothing, Jon Snow. It's ten thousand miles between Kings
                landing and the wall.`,
                  createdAt: 6521324945,
            },
            {
                _id: 'ds463783',
                title: 'Third Note',
                body: `When you play the game of birds, you win or you die. May the Father
                judge him justly. The Dothraki do things in their own time, for their
                own reasons. Forgive my manners. I don't see many ladies these days.
                Lucky for the ladies. And now his watch is ended. The winds of Winter.
                You know nothing, Jon Snow. It's ten thousand miles between Kings
                landing and the wall.`,
                  createdAt: 65371254645,
            }
          ]
      }
  }
  
  render() {
    return (
      <div className="notesListContainer">
        <div className="notesList">
          {this.state.dummyNotes.map((note, index) => {
            return(
              <div className='note' key={index + note.title}>
                <div>
                  <h4>{note.title}</h4>
                  <hr />
                  <p>{note.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
