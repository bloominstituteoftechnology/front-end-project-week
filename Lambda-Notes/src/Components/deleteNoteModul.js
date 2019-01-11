import React from 'react';
import axios from 'axios';
 class DeleteNoteModul extends React.Component {
    //allows us to delete the note
    deleteNote = () => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.ID}`)
        .then(response => {
            this.props.toggleHidden();
            this.props.history.push("/");
            this.props.refresh();
        })
        .catch(error => console.log(error))
    }
// renders everything for the delete stuff, hidden until used
    render(){
        return(
            <div className={`modul-bg ${this.props.hidden}`}>
                <div className={`delete-modul ${this.props.hidden}`}>
                    <h3>Are you sure you want to delete this?</h3>
                    <div className="btn-section">

                        <div 
                        className="r-btn"
                        onClick={this.deleteNote}
                        >Delete</div>

                        <div
                        onClick={this.props.toggleHidden}
                        className="b-btn"
                        >No</div>

                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteNoteModul;