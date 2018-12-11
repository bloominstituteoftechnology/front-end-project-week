import React from 'react';
import { Link } from 'react-router-dom';

class Notes extends React.Component {
  render() {
    return (
      <div className='note__list'>
        {this.props.notes.map(note => {
          return (
            <div key={note.id} className='card'>
              <Link to={`/note/get/${note.id}`} deleteNote>
                <h2 className='card__title' key={note.id}>
                  {note.title}
                </h2>
              </Link>

              <hr className='card__hr' />
              <br />
              <p className='card__text' key={note.id}>
                {note.content}
                {/* {note.textBody} */}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Notes;
