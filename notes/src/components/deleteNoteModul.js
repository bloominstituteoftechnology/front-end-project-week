import React from 'react';
import axios from 'axios';

class DeleteNoteModul extends React.Component {
    constructor(){
        super();
    }

    deleteNote = () => {
        axios.delete(`https://killer-notes.herokuapp.com/note/delete/${this.props.ID}`)
        .then(response => alert("Note has been deleted",response))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="delete-modul">
                <h3>Are you sure you want to delete this?</h3>
                <div className="btn-section">

                    <div 
                    className="r-btn"
                    onClick={this.deleteNote}
                    >Delete</div>

                    <div
                    className="b-btn"
                    >No</div>

                </div>
            </div>
        );
    }
}

export default DeleteNoteModul;