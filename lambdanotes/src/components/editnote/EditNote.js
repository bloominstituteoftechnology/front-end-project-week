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
////Add description back in
    handleEdit( name, description, noteId, history){
            console.log(noteId);
            axios
                .put(`http://localhost:9000/notes/${noteId}`,
                    {
                    "name": name,
                    "description": description, 
                    "id": noteId
                    })
                .then(response => history.push('/notes'))
                    };

    render(){

        const note = this.props.notes.find(
            note => note.id === parseInt(this.props.match.params.noteId, 10));


    return (
        <div>
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
            <h2>Edit</h2>
            <div className="title1">
                <label>Note Name</label>
                <br/>
                <input defaultValue ={note.name} ref={this.nameField}/>
            </div>
            <div className="comment">
                <label>Note Description</label>
                <br/>
                <input defaultValue ={note.description} ref={this.descriptionField}/>
                <button className="edit-button" onClick={() => this.handleEdit(this.nameField.current.value, this.descriptionField.current.value, note.id, this.props.history)}>
                    <span>Submit</span>
                </button>
            </div>
        </div>
        )
    }; 
}

export default EditNote