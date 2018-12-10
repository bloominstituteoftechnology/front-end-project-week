import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Note = props => {
  if (props.note) {
    console.log(props, "sadss");
    const { title, textBody, _id } = props.note;
    console.log(_id, 'IDDDDD')
    return (
      <div className="note-page">
        <div className="links">
          <Link to={`/edit/${_id}`}>
            <h4  className="note-links">edit</h4>
          </Link>
          <Link to={`/delete/${_id}`}>
            <h4 className="note-links">delete</h4>
          </Link>
        </div>

        <h3 className="note-page-title">{title}</h3>
        <p className="note-page-content">{textBody}</p>
      </div>
    );
  } else {
    return null;
  }
  // add an error message
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    note: state.note.find(note => note._id === id)
  };
};

export default connect(
  mapStateToProps,
  {}
)(Note);
