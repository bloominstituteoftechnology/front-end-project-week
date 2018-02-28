import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions';
import Sidebar from '../Sidebar/Sidebar';
import Modal from '../Modal/Modal';

const Note = (props) => {
  console.log('Note.js props', props);
    // props.deleteNote(props.match.params.id)
  return (
    <div>
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Note-Container">
        <div>
          <Link to={`/edit/${props.match.params.id}`}>Edit</Link>
          {/* <Modal text={'Delete'}/> */}
          {/* <Link to="/">Delete</Link> */}
          <button>Delete</button>
        </div>
        <div className="Note-Title">
          {props.state.notes[props.match.params.id].title}
        </div>
        <div className="Note-Content">
          {props.state.notes[props.match.params.id].content}
        </div>
      </div>
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { deleteNote })(Note);
