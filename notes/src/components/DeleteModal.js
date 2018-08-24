import React from 'react';
import { deleteNote } from '../actions'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DelModal extends React.Component {
    render(){
        return(
        <div className="delete-modal">
            <p>Are you sure you want to delete this?</p>
            <div className="btn delete-btn" onClick={()=>this.props.deleteNote(this.props.note._id)}><Link to="/notes">Delete</Link></div> {/* call action with id param */}
            <div className="btn"><Link to={`/notes/${this.props.note._id} `}>No</Link></div>
        </div>
    )
    }
}
const mapStateToProps= (state) => {
    return (
        {
            deleteNote: state.noteReducer.deleteNote,
            note: state.noteReducer.note
        }
    )
}

export default connect(mapStateToProps, { deleteNote })(DelModal);
