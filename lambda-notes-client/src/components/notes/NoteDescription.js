import React from 'react';
import { Link } from 'react-router-dom';
import styled from "react-emotion";

import DeleteModal from '../modals/DeleteModal';
import AddNoteTagsForm from '../forms/AddNoteTagsForm';


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
      margin-right: 18px;
      &:hover {
        cursor: pointer;
        color: #0f0f0f;
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

  .tags-section {
    margin-top: 200px;
    width: 45%;

    .tag-content {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;

      .tag {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #2AC0C4;
        border: solid 1px #939797; 
        border-radius: 10px;
        margin-right: 10px;
        margin-top: 15px;
        padding: 0 15px;
  
        p {
          margin-top: 0;
          margin-right: 7px;
          color: white;
          font-size: 1.5rem;
        }
  
        span {
          font-size: 1.8rem;
          font-weight: bold;
          color: red;
  
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;


const NoteDescription = props => {

  let note = props.notes.filter(
    item => item.id === props.match.params.id
  );

  //Handle Errors
  if (note.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Main>

        {/*Body - handles modal*/}
        <header className="links-header">
          <Link className="link" to={`/notes/${note[0].id}/edit`}>
            edit
          </Link>
          <a className="link" onClick={props.handleModal}>
            delete
          </a>
        </header>

        <article>
          <h2>{note[0].title}</h2>
          <p>{note[0].description}</p>
        </article>

        <section className="tags-section">
          <AddNoteTagsForm 
            addNoteTag={props.addNoteTag} 
            id={note[0].id}
          />
          <div className="tag-content">
            {note[0].tags.map(item => {
              return (
                <div className="tag">
                  <p className="tag-text">{item}</p>
                  <span 
                    className="tag-delete" 
                    onClick={() => props.deleteTag(item, note[0].id)}
                  >
                  X
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/*Modal - handles delete*/}
        {props.isModalOpen ? (
          <DeleteModal
            history={props.history}
            id={note[0].id}
            deleteNote={props.deleteNote}
            handleModal={props.handleModal}
          />
        ) : null}
      </Main>
    );
  }
};

export default NoteDescription;
