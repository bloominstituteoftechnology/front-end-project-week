import React from 'react';
// import Note from '../containers/Note';
import { deleteNote } from '../actions'; //remember params from editnote
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DelModal extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        // console.log(this.props.note._id);
        return(
        <div className="delete-modal">
            <p>Are you sure you want to delete this?</p>
            <button onClick={()=>this.props.deleteNote(this.props.note._id)}><Link to="/notes">Delete</Link></button> {/* call action with id param */}
            <button><Link to={`/notes/${this.props.note._id} `}>No</Link></button> {/* really want note/:id*/}
            {/* <Route path={`/notes/${props.id}`} component={Note} /> */}
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
