import React from 'react';
import { connect } from 'react-redux';
import { EditView, NoteView, NavBar } from '../components';
import { getSingleNote } from '../actions';

class SingleNoteViewer extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleNote(id);
  }

  render() {
    if (this.props.fetching) {
      return <h2>Fetching your &#9835;</h2>;
    }
    if (this.props.note) {
      return (
        <div>
        {this.props.showUpdate
        ? <EditView note={this.props.note} />
        : <NoteView note={this.props.note} />}
        </div>
      )
    } else {
      return (
        <div className='delete-viewer'>
          <NavBar />
          <div>
            <h2>Note Unavailable or Deleted</h2>
            {/* <a href='/'>Click to See All Notes</a> */}
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    note: state.singleFlatNote.noteSelected,
    error: state.singleFlatNote.error,
    fetching: state.singleFlatNote.fetching,
    showUpdate: state.singleFlatNote.showUpdate,
    deleteNote: state.singleFlatNote.deleteNote
  }
}

export default connect(
  mapStateToProps, 
  { getSingleNote }
)(SingleNoteViewer)