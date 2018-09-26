import React from 'react';
import Note from './Note';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';



const NoteList = (props) => {
    return (
        <div className = 'note-list-container'>
            <h1>Your Notes:</h1>
        <div className = 'note-list'>
            {props.notes.map(note => {
                return <Link to = {`/notes/${note._id}`} key={`${note._id}`}>
                <Note {...note} key = {note._id} />
                </Link>
            })}

        </div>
        </div>
    )
}

const mapStateToProps = () => {
    return {
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
  })(NoteList));