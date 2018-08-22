import React from 'react';
import { Link } from 'react-router-dom';
import styled from "react-emotion";


const Main = styled("main")`
  margin-left: 25%;
  width: 75%;
  height: 100vh;
  padding: 25px 33px 20px 35px;

  .links-header {
    display: flex;
    justify-content: flex-end;

    .link {
      text-decoration: underline;
      font-size: 1.8rem;
      color: #4A494A;
      margin-right: 19px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  h2 {
    font-size: 2.7rem;
    font-weight: bold;
    color: #4A494A;
    margin-top: 38px;
  }

  p {
    font-size: 1.7rem;
    line-height: 29px;
    letter-spacing: 1.3px;
    margin-top: 38px;
  }
`;

const NoteDescription = props => {

  let note = props.notes.filter(item => item.id === parseInt(props.match.params.id, 10));

  const handleDelete = () => {
    props.history.goBack();
    props.deleteNote(note[0].id)
  }

  if (note.length === 0) {
    return <h1>Loading</h1>
  } else {
    return (
      <Main>
        <header className="links-header">      
          <Link className="link" to={`/notes/${note[0].id}/edit`}>edit</Link>
          <a className="link" onClick={() => {handleDelete()}}>delete</a>
        </header>
        <article>
          <h2>{note[0].title}</h2>
          <p>{note[0].description}</p>
        </article>
      </Main>
    );
  }
}

export default NoteDescription;
