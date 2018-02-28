import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { addNote } from '../actions';
import { deleteNote } from '../actions';
import { connect } from 'react-redux';

import '../css/index.css';

class Note extends Component {

  render() {
    console.log('The properties of Note are:', this.props);
    return (
      <div className="Note">
        <div className="Toolbar">
          <div className="Toolbar__button">
            Edit
          </div>
          <Link to={'/'} className="Toolbar__button" onClick={() => this.props.deleteNote(this.props.note.id)}>
            [X]
          </Link>
        </div>
        <div className="Note__title">
          {this.props.note.title}
        </div>
        <div className="Note__text">
          {this.props.note.text}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State was mapped to props.', state);
  return {
    props: state,
  }
}
export {Note};
export default connect(mapStateToProps, { deleteNote })(Note);