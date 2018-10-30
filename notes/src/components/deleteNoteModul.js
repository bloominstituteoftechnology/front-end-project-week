import React from 'react';
import axios from 'axios';

class DeleteNoteModul extends React.Component {
    constructor(){
        super();
    }

    deleteNote = () => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.ID.id}`)
        .then(response => alert("Note has been deleted",response))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className={`delete-modul ${this.props.hidden}`}>
                <h3>Are you sure you want to delete this?</h3>
                <div className="btn-section">

                    <div 
                    className="r-btn"
                    onClick={this.deleteNote}
                    >Delete</div>

                    <div
                    onClick={() => this.props.toggleHidden()}
                    className="b-btn"
                    >No</div>

                </div>
            </div>
        );
    }
}

export default DeleteNoteModul;