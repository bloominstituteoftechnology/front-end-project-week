import React from 'react';
import { Link } from 'react-router-dom';

//props from singleNote {...props} id={this.state.notes._id} deleteNote={this.deleteNote}

const DeleteModal = (props) => {
    return(
        <div className="dModal">
            <span className="modalContent">
                <span>Are you sure you want to delete this?</span> <br />
                {/* needs onClick later to delete */}
                <Link to="/notes">
                    <button 
                        className="modalButtons firstButton" 
                        onClick={ () => {props.deleteNote(props.id) }}
                    >
                            Delete
                    </button>
                </Link>

                <Link to={`/note/${props.id}`}><button className="modalButtons">No</button></Link>
            </span>
        </div>
    )
}

export default DeleteModal