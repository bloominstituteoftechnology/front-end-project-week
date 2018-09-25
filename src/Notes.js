import React from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

const Notes = props => {
  const headers = [
    {label: 'ID', key: 'id'},
    {label: 'Title', key: 'title'},
    {label: 'Content', key: 'text'}
  ]
  return (
    <div className='notes-container'>
      <h4>Your Notes:</h4>
      <div className='notes'>
        {props.notes.map(note => {
          let preview = note.textBody;
          if (note.textBody.length > 100) {
            preview = note.textBody.slice(0,85) + '...';
          }
          return (
            <div className='note' key={note._id}>
              <Link to={`/view/${note._id}`}>
                <h5>{note.title}</h5>
                <p>{preview}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <CSVLink className='download-link' data={props.notes} filename={'lambda-notes.csv'} headers={headers}>Download Notes in CSV Format</CSVLink>
    </div>
  );
}

export default Notes;
