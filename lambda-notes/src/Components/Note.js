import React from "react";
import PropTypes from "prop-types";

const Note = props => {
  return (
    <div className="Note">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <p>{props.textBody} </p>
    </div>
  );
};

//Sets default prop values
Note.defaultProps = {
  title: "",
  textBody: ""
};

//Type validation for props
Note.propTypes = {
  title: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired
};

export default Note;