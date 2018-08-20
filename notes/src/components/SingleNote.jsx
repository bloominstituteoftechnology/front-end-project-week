import React, { Component } from "react";
import PropTypes from "prop-types";

class SingleNote extends Component {
  render() {
    return (
       
        <div className="notesViewContainer">
        <div className="svButtonRow">
          <div className="svButtons">edit </div>
          <div className="svButtons">delete</div>
        </div>
          <div className="viewTitle">{this.props.title}</div>
          <div className="viewBody">{this.props.body}</div>
        </div>
    );
  }
}

SingleNote.propTypes = {};

export default SingleNote;
