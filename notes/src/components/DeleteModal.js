import React from 'react';
import NavBar from './NavBar';
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

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("ID", id)
    this.props.deleteNote(id);
  }

  deleteNote = () => {
    this.props.deleteNote();
  };

  render() {
    // console.log('DELETE PROPS', props)
    // const id = props.match.params.id;
    // console.log('PARAMS ID', id)

    return (
      <div className='note-view'>
        <NavBar />
        {/* <h1>ADD DROP DOWN MENU FOR DELETE</h1> */}
        <div>
        <h5>Are you sure you want to delete this?</h5>
        {/* <button onClick={() => deleteNote(id)} >Delete</button> */}
        <button onClick={() => deleteNote()} >Delete</button>
        <a href='/'>no</a>
        
        <div className='single-note-extended-container'>
          <div>
          </div>
          <h3>Note Title (need to update for each note)</h3>
          <p>Note Content (need to update for each note). No max length!!!</p>
        </div> 
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    // notes: state.notes,
    note: state.singleFlatNote.noteSelected,
    showUpdate: state.singleFlatNote.showUpdate,
    deleteNote: state.singleFlatNote.deleteNote
  }
}

export default connect(mapStateToProps, {
  deleteNote
})(DeleteModal);
// export default DeleteModal;