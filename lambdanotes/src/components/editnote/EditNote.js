import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../singlenote/SingleNote.css';


class EditNote extends React.Component {
    constructor(props) {
        super(props);

        this.nameField = React.createRef();
        this.descriptionField = React.createRef();

        //JB---/Convert to stateful comp. and utilize ref. to avoid passing state back App.js....REDUX starts to make more sense.
    }

    handleEdit( name, description, noteId, history){
            console.log(noteId);
            axios
                .put(`http://localhost:9000/notes/${noteId}`,
                    {
                    "name": name, 
                    "description": description
                    })
                .then(response => history.push('/notes'))
                    };

    render(){

        const note = this.props.notes.find(
            note => note.id == this.props.match.params.noteId);

            console.log(this.props.history);

    return (
        <div className="cards-container">
            <div className="links">
                <Link to ={`/notes/${note.id}/edit`}>
                    <button className="edit">
                        <span>edit</span>
                    </button>
                </Link>
                <Link to ={`/notes/${note.id}/delete`}>
                        <button className="delete">
                            <span>delete</span>
                        </button>
                </Link>
            </div>
            <div className="title-edit">
                <input defaultValue ={note.name} ref={this.nameField}/>
            </div>
            <div className="description-edit">
                <input defaultValue ={note.description} ref={this.descriptionField}/>
                    <br/>
                <button className="edit-button" onClick={() => this.handleEdit(this.nameField.current.value, this.descriptionField.current.value, note.id, this.props.history)}>
                    <span>Submit</span>
                </button>
            </div>
        </div>
        )
    }; 
}

export default EditNote