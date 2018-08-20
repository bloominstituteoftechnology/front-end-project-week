import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import './newnote.css';

class NewNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            text: ""
        }
    }

    editInput = e => {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value});
    }

    addNoteHandler = e => {
        e.preventDefault();
        console.log("Add Note handler: " + this.state.text);
        this.props.addNote(this.state);
    }

    render(){
        return (
            <div className="new-note-view">
                <h2>Create New Note:</h2>
                <form>
                    <input className="title-input" name="title" placeholder="Note Title" onChange={this.editInput} />
                    <textarea name="text" placeholder="Note Content" onChange={this.editInput}></textarea>
                    <Link className="btn" to="/" onClick={this.addNoteHandler}>Save</Link>
                </form>
            </div>
        );
    }
}

export default NewNote;