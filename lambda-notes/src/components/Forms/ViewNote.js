// Dependencies
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const cssMakesMeCry = {
  color: "black",
  fontFamily: `'Roboto', sans-serif`,
  textDecoration: "underline",
};

const ViewNote = (props) => {
  console.log("ViewNote-props",props.id);
  const note = props.notes.filter(note => note.id == props.id)[0];
  const { title, text } = note; 
  return (
    <div style={{background: "var(--color-bg--main)"}} className="pr-3">
      <div className="actions d-flex pt-3 justify-content-end">
        <Link style={cssMakesMeCry} to={`/note/edit/${props.id}`} className="mx-2">edit</Link>
        <Link style={cssMakesMeCry} to={`/note/delete/${props.id}`} className="mx-2">delete</Link>
      </div>
      <div className="view-note p-4">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

const mapDispatchToProps = state => {
  return {
    notes: state.notes,
  };
};

export default withRouter(connect(mapDispatchToProps, null)(ViewNote));