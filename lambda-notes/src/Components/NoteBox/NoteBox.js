import React from "react";
import PropTypes from "prop-types";

import "./NoteBox.css";

const NoteBox = props => {
  let text = props.textBody
    .split("")
    .splice(0, 199)
    .join("")
    .concat("...");
  let title = props.title
    .split("")
    .splice(0, 19)
    .join("")
    .concat("...");

  let longWord = props.textBody
    .split(" ")
    .filter(word => word.length > 20)
    .join("");
  let displayWord = longWord
    .split("")
    .splice(0, 19)
    .join("")
    .concat("...");

  return (
    <div className="note-box">
      <h4>{props.title.length > 20 ? title : props.title}</h4>
      <div className="line" />
      <p>
        {longWord.length > 20
          ? displayWord
          : props.textBody.length > 200
          ? text
          : props.textBody}
      </p>
    </div>
  );
};

export default NoteBox;


NoteBox.propTypes = {
  title: PropTypes.string,
  textBody: PropTypes.string
}