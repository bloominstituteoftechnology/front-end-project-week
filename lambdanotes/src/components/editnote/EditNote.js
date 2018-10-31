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
                <br/>
                <input className="title1"  defaultValue ={note.name} ref={this.nameField}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="comment">
                <label>Note Description</label>
                <br/>
                <br/>
                <input className="comment" defaultValue ={note.description} ref={this.descriptionField}/>
                <br/>
                <br/>
                <button className="savebutton" onClick={() => this.handleEdit(this.nameField.current.value, this.descriptionField.current.value, note.id, this.props.history)}>
                    <span>Submit</span>
                </button>
            </div>
        </div>
        )
    }; 
}

export default EditNote