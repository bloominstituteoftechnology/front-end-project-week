// importing libraries
import React from 'react';
import styled from 'styled-components';

// styled Note
const Note = styled.div`
  padding: 4rem;

  .menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .menu-item {
\      margin-left: 2rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .content {
    margin: 4rem 0;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  }
  `;

const NoteDetail = (props) => {
  const note = props.note;
  return (
    <Note>
      <div className="menu">
        <div
          className="menu-item"
          onClick={() => {
            props.history.push(`/notes/edit/${note._id}`);
          }}
        >
          Edit
        </div>
        <div
          className="menu-item"
          onClick={() => {
            props.deleteNote(note._id);
            props.history.push('/');
          }}
        >
          Delete
        </div>
      </div>
      <div className="content">
        <h2>{note.title}</h2>
        <div>
          <p>{note.textBody}</p>
        </div>
      </div>
    </Note>
  );
}
 
export default NoteDetail;