import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Note = props => {
  if (props.note) {
    console.log(props, "sadss");
    const { title, content, id } = props.note;
    console.log(id, 'IDDDDD')
    return (
      <div className="note-page">
        <div className="links">
          <Link to={`/edit/${id}`}>
            <h4  className="note-links">edit</h4>
          </Link>
          <Link to={`/delete/${id}`}>
            <h4 className="note-links">delete</h4>
          </Link>
        </div>

        <h3 className="note-page-title">{title}</h3>
        <p className="note-page-content">{content}</p>
      </div>
    );
  } else {
    return null;
  }
  // add an error message
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, 'OWN')
  const { id } = ownProps.match.params;
  return {
    note: state.note.find(note => `${note.id}` === id)
  };
};

export default connect(
  mapStateToProps,
  {}
)(Note);
