import React from 'react';
import '../CSS/GotOne.css';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { withRouter } from 'react-router-dom';

class GotOne extends React.Component {
  handleDelete = () => {
    this.props.deleteNote(this.props.location.state.note._id);
    this.props.history.push("/");
  }
  render() {
    const {textBody, title} = this.props.location.state.note;
    return (
      <div className="note-card single-card col-md-12">
        <div className="edit-delete">
          <p className="mx-3">Edit</p>
          <p onClick={this.handleDelete}>Delete</p>
        </div>
        <h2 className="single-card-title">{title}</h2>
        <p className="single-card-text">{textBody}</p>
      </div>
    )
  }
}

export default withRouter(connect(null, { deleteNote })(GotOne));