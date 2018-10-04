import React from 'react';
import { Link } from "react-router-dom";
import './SingleNote.css';


class EditNote extends React.Component {
    constructor(props) {
        super(props);

        this.titleField = React.createRef();
        this.textBodyField = React.createRef();

        //JB---/Convert to stateful comp. and utilize ref. to avoid passing state back App.js....REDUX starts to make more sense.
    }

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
                <button className="edit-button" onClick={() => this.props.handleEdit( this.titleField.current.value, this.textBodyField.current.value, note._id)}><span>Submit</span></button>
            </div>
        </div>
        )
    } 
}

export default EditNote