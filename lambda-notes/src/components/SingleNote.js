import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

class SingleNote extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.forceUpdate();
  }
  handleDeleteNote = () => {
    const { _id } = this.props.location.state._id;
    this.props.deleteNote(_id);
  };

  render() {
    const { _id } = this.props.location.state._id;
    return (
      <div className="single-note">
        <div className="edit-links">
          <Link className="edit" to={{ pathname: '/update', _id }}>
            edit
          </Link>
          <Link className="edit" to="/" onClick={() => this.handleDeleteNote(_id)}>
            delete
          </Link>
        </div>
        <h3>{this.props.location.state.title}</h3>
        <div className="note-text">{this.props.location.state.textBody}</div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    deleteNote
  }
)(SingleNote);
