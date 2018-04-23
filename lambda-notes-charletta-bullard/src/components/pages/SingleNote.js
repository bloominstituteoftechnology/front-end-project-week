import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';

class SingleNote extends Component {
  state = {
    title: '',
    text: '',
    id: '',
    deleting: false,
    editing: false,
  };

  render() {
    const id = this.props.match.params.id - 1;
    return (
      <div>
        <h3 className="heading">{this.props.notes[id].title}</h3>
        <p className="notetext">{this.props.notes[id].text}</p>

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
          {' '}
          delete
        </NavLink>
        <NavLink
          to={'/edit'}
          render={
            this.state.editing ? <EditNote editNote={this.editNote} /> : null
          }
        >
          {' '}
          edit
        </NavLink>
      </div>
    );
  }

  cancelDelete = () => {
    this.props.history.push('/noteslist');
    this.setState({ deleting: false });
  };
}

export default SingleNote;
