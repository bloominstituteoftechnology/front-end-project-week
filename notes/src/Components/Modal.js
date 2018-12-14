import React from 'react';
import axios from 'axios';
 class Modal extends React.Component {
    
    deleteNote = () => {
        axios.delete(`http://localhost:9000/api/notes/${this.props.ID}`)
        .then(response => alert("Note has been deleted",response))
        .catch(error => console.log(error))
    }

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

export default Modal;