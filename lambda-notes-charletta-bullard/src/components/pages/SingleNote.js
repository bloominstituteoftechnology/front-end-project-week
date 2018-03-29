import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { deleteNote } from '../actions';
import DeleteNote from './DeleteNote';

class SingleNote extends Component {
  state = {
      title: '',
      text: '',
      id: '',
      deleting: false,
    };
  

  render() {
    const id = this.props.match.params.id - 1;
    return (
      <div>
        <h3 className='heading'>{this.props.notes[id].title}</h3>
        <p className='notetext'>{this.props.notes[id].text}</p>
        
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
        > <div>edit</div>
          delete
        </NavLink>
      </div>
    );
  }

  // deleteNote = () => {
  //   deleteNote(this.props.notes.id);
  //   this.props.history.push('/noteslist');
  //   this.setState({ deleting: true });
  // };

  cancelDelete = () => {
    this.props.history.push('/noteslist');
    this.setState({ deleting: false });
  };
}

// const mapStateToProps = state => {
//   return {
//     current: state.current,
//     notes: state.notes,
//     deleting: state.deleting,
//   };

export default SingleNote;