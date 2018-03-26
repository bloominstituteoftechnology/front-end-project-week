import React, { Component } from 'react';
// import 'List.css';

class NotesList extends Component {
  state = {
    notes: [
      { key: 0, title: 'Todo', body: 'There are several stuffs to do' },
      { key: 1, title: 'Get groceries', body: 'Unfortunately, you are a slave to this fleshbag so go eat stuff' },
      { key: 2, title: 'Something I saw today', body: 'There was a fire fighter revving a chainsaw at the mall' },
      { key: 3, title: 'To style or not to style', body: 'That is the question. reactstrap or from scratch' },
    ]
  }

  render() {
    return (
      <div>
        <ul className='notesList'>
          {this.state.notes.map((note, idx) => {
            return (
              <li className='note' key={note.key}>
                <div className='noteTitle'><h3>{note.title}</h3></div>
                <div className='noteBody'><p>{note.body}</p></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NotesList;