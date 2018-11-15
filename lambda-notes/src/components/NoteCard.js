import React, { Component } from 'react'
import PropTypes from 'prop-types';


 class NoteCard extends Component {

  render() {
    const {title, content,} = this.props.note;

    return (
      <div>
        <div className="container mb-5">
            <i className="fa fa-edit"></i>
            <i className="fa fa-trash"></i>
            <h4 className="note-title">{title}</h4>
            <textarea>{content}</textarea>
        </div>
      </div>
    )
  }
}

// PropTypes

export default NoteCard;