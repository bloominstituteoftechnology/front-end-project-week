import React from 'react';
import { connect } from 'react-redux';

import { edit_note_clicked } from '../actions/index';

import './css/ViewNote.css';

class ViewNote extends React.Component {
  render() {
    return (
      <div className="view">
        <div className="edit" onClick={this.handleEdit}>
          edit
        </div>
        <div className="delete">
          delete
        </div>
        <h1 className="view-header"> {this.props.note.title} </h1>
        <p className="view-body"> {this.props.note.body} </p>
      </div>
    );
  }
  handleEdit = () => {
    this.props.edit_note_clicked(this.props.note);
  };  
}

const mapStateToProps = state => {
  return {
    current: state.current,
    note: state.note,
  };
};

export default connect(mapStateToProps, { edit_note_clicked })(ViewNote);
