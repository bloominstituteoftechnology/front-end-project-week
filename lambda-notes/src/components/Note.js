import React from 'react';
import { connect } from 'react-redux';

import { view_note } from '../actions/index'

import './css/Note.css';

class Note extends React.Component {
  render() {
    const body = this.props.note.body.substr(0, 165).concat('...');
    return (
      <div className="note" onClick={this.handleNote}>
        <h1>{this.props.note.title}</h1>
        <hr />
        <p>{body}</p>
      </div>
    );
  }
  handleNote = () => {
    this.props.view_note(this.props.note);
  }
}

const mapStateToProps = state => {
  return {
    current: state.current,
  };
};

export default connect(mapStateToProps, { view_note })(Note);
