// Dependencies
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ViewNote = (props) => {
  console.log("ViewNote-props",props.id);
  const note = [...props.notes].filter(note => {
    return note.id == props.id;
  })[0];
  const { title, text } = note;
  return (
    <div>
      <div className="actions d-flex justify-content-end">
        <Link to="/note/edit/" className="mx-2">edit</Link>
        <Link to="/note/delete/" className="mx-2">delete</Link>
      </div>
      <div className="view-note">
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