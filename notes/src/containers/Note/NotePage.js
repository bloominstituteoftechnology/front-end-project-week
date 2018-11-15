import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Modal = styled.div`
  display: flex;
  justify-conent: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(114, 144, 144, 0.66);
`;

const NotePage = props => {
  if (props.notes.length) {
    let note = props.notes.find(note => `${note.id}` === props.match.params.id);

    const deleteNote = e => {
      e.preventDefault();
      props.deleteNote(note.id);
      props.history.push("/");
    };
    return (
      <div>
        {props.delete && (
          <Modal>
            <p>Are you sure you want to delete this?</p>
            <button onClick={deleteNote}>Delete</button>
            <button onClick={props.deleteNoteOff}>No</button>
          </Modal>
        )}
        {/* onClick=
        {() => props.editNote(note.title, note.textBody)} */}
        <Link to={`/note/${note.id}/edit`}>edit</Link> {""}
        <button onClick={props.deleteNoteOn}>delete</button>
        <h1>{note.title}</h1>
        <p>{note.textBody}</p>
      </div>
    );
  }
};

export default NotePage;
