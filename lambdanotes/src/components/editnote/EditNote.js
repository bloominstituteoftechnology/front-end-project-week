import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../singlenote/SingleNote.css';


class EditNote extends React.Component {
    constructor(props) {
        super(props);

        this.titleField = React.createRef();
        this.textBodyField = React.createRef();

        //JB---/Convert to stateful comp. and utilize ref. to avoid passing state back App.js....REDUX starts to make more sense.
    }

    handleEdit( title, textBody, noteId, history){
            console.log(title, textBody, noteId, history);
            axios
                .put(`https://killer-notes.herokuapp.com/note/edit/${noteId}`,
                    {
                    "title": title, 
                    "textBody": textBody
                    })
                .then(response => history.push('/notes'))
                    };

    render(){

        const note = this.props.notes.find(
            note => note._id === this.props.match.params.noteId);

    return (
        <div className="cards-container">
            <div className="links">
                <Link to ={`/notes/${note._id}/edit`}>
                    <button className="edit">
                        <span>edit</span>
                    </button>
                </Link>
                <Link to ={`/notes/${note._id}/delete`}>
                        <button className="delete">
                            <span>delete</span>
                        </button>
                </Link>
            </div>
            <div className="title-edit">
                <input defaultValue ={note.title} ref={this.titleField}/>
            </div>
            <div className="textBody-edit">
                <input defaultValue ={note.textBody} ref={this.textBodyField}/>
                    <br/>
                <button className="edit-button" onClick={() => this.handleEdit(this.titleField.current.value, this.textBodyField.current.value, note._id, this.props.history)}>
                    <span>Submit</span>
                </button>
            </div>
        </div>
        )
    }; 
}

export default EditNote