import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteNote } from '../actions';
import DeleteNote from '/components/pages/DeleteNote';

class SingleNote extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      text: '',
      id: '',
      deleting: false,
    };
  }

  render() {
    const id = this.props.match.params.id - 1;
    return (
      <div>
        <h3 className='heading'>{this.props.notes[id].title}</h3>
        <p className='notetext'>{this.props.notes[id].text}</p>
        <div>edit</div>
        <NavLink
          to={`/delete/${id}`}
          render={
            this.state.deleting ? (

              <DeleteNote
                deleteNote={this.deleteNote}
                cancelDelete={this.cancelDelete}
              />
            ) : null
          }
        >
          delete
        </NavLink>
      </div>
    );
  }

  deleteNote = () => {
    deleteNote(this.props.notes.id);
    this.props.history.push('/noteslist');
    this.setState({ deleting: true });
  };

  cancelDelete = () => {
    this.props.history.push('/noteslist');
    this.setState({ deleting: false });
  };
}

const mapStateToProps = state => {
  return {
    current: state.current,
    notes: state.notes,
    deleting: state.deleting,
  };
};
export default connect(mapStateToProps)(SingleNote);