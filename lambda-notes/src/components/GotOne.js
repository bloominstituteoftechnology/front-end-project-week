import React from 'react';
import '../CSS/GotOne.css';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { withRouter, Link } from 'react-router-dom';
import ConfirmDelete from './ConfirmDelete';

class GotOne extends React.Component {
  state = {
    showConfirm: false,
  }

  confirmIt = () => {
    this.setState({
      showConfirm: !this.state.showConfirm
    })
  }

  handleDelete = () => {
    this.props.deleteNote(this.props.location.state.note._id);
    this.props.history.push("/");
  }

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
          <p onClick={this.confirmIt}>Delete</p>
        </div>
        <h2 className="single-card-title">{title}</h2>
        <p className="single-card-text">{textBody}</p>
        {
          this.state.showConfirm 
          ? <ConfirmDelete handleDelete={this.handleDelete} confirmIt={this.confirmIt} />
          : null
        }
      </div>
    )
  }
}

export default withRouter(connect(null, { deleteNote })(GotOne));