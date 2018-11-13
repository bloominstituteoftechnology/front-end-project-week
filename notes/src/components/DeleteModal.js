import React from 'react';
// import NavBar from './NavBar';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

// const DeleteModal = props => {
class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  }
  

  deleteNote = () => {
    const id = this.props.note._id;
    this.props.deleteNote(id);
  };

  render() {
    // const id = this.props.note._id;

    return (
      <div className='modal-view'>
        <div className='modal-view-box'>
          <h3>Are you sure you want to delete this?</h3>
          <button onClick={() => this.deleteNote()} >Delete</button>
          <a type='button' href='/'>No</a>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    note: state.singleFlatNote.noteSelected,
    showUpdate: state.singleFlatNote.showUpdate,
    deleteNote: state.singleFlatNote.deleteNote
  }
}

export default connect(mapStateToProps, {
  deleteNote,
})(DeleteModal);
// export default DeleteModal;