import React from 'react';
import '../CSS/GotOne.css';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { withRouter, Link } from 'react-router-dom';

class GotOne extends React.Component {
  handleDelete = () => {
    this.props.deleteNote(this.props.location.state.note._id);
    this.props.history.push("/");
  }
  // <Link to={{
  //   pathname: `${this.props.note.title}/${this.props.note._id}`,
  //   state: {
  //     note: this.props.note
  //   }
  // }}>
  render() {
    const {textBody, title, _id} = this.props.location.state.note;
    return (
      <div className="note-card single-card col-md-12">
        <div className="edit-delete">
          <p className="mx-3">
            <Link to={{
              pathname: `/editForm/${title}/${_id}`,
              state: this.props.location.state.note
            }}>Edit</Link>
          </p>
          <p onClick={this.handleDelete}>Delete</p>
        </div>
        <h2 className="single-card-title">{title}</h2>
        <p className="single-card-text">{textBody}</p>
      </div>
    )
  }
}

export default withRouter(connect(null, { deleteNote })(GotOne));