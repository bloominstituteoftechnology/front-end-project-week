import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

const Note = (props) => {
  console.log('Note.js props', props);
  return (
    <div>
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Note-Container">
        <div>
          <Link to="/edit">Edit</Link>
          <Link to="/">Delete</Link>
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

export default connect(mapStateToProps)(Note);
