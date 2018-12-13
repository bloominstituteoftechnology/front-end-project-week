import React from 'react';
import { Link } from 'react-router-dom';

class Notes extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentPage: 1,
      notesPerPage: 6
    };
  }

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const notes = this.props.notes;
    const { currentPage, notesPerPage } = this.state;

    // Logic for displaying current notes
    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

    const renderNotes = currentNotes.map((note, index) => {
      // <div className='note__list'>
      return (
        <div key={note.id} className='card'>
          <Link to={`/note/get/${note.id}`} className='card__title' deleteNote>
            <h2 className='card__title' key={note.id}>
              {note.title}
            </h2>
          </Link>

          <hr className='card__hr' />
          <br />
          <p className='card__text' key={note.id}>
            {note.content.length > 300
              ? note.content.substring(0, 313 - 13) + 'test '
              : note.content}
          </p>
        </div>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(notes.length / notesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className='pageNumbers__number'
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <div className='pageNumbers'>{renderPageNumbers}</div>
        <div className='note__list'>{renderNotes}</div>
      </div>
    );
  }
}

export default Notes;
