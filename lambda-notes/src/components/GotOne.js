import React from 'react';

// Auxillary Packages
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { withRouter, Link } from 'react-router-dom';

// Components
import ConfirmDelete from './ConfirmDelete';

// CSS
import '../CSS/GotOne.css';

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
        <div className="note-card single-card col-md-12 pos-relative got-one-card">
        <div className="edit-delete">
          <p className="mx-3">
            <Link style={{color: 'black', fontWeight: 'bold', fontSize: '0.7rem'}} to={{
              pathname: `/editForm/${title}/${_id}`,
              state: this.props.location.state.note
            }}>Edit</Link>
          </p>
          <p onClick={this.confirmIt}>Delete</p>
        </div>
        <h2 className="single-card-title">{title}</h2>
        <p className="single-card-text" style={{whiteSpace: 'pre-line'}}>{textBody}</p>
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