import React, { Component } from 'react';
import './NewNote.css';
import { Link } from 'react-router-dom';
// import { makeNote } from '../../actions/actions';
// import { connect } from 'react-redux';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                title: '',
                content: '',
                id: '',
                tags: []
            }
        }
    }    

    saveHandler = () => {
        let newNote = { ...this.state.note };

        function getNewId() {
            let seed = Math.random()*160/8;
            let counter = 0; 
            let myId = counter + seed;
            counter = counter + 1;
            return myId;
        }

        newNote.id = getNewId();
        this.props.initialData.notes.push(newNote);
    }

    changeHandler = (e) => {
        let currentInput = { ...this.state.note };
        currentInput[e.target.name] = e.target.value;
        this.setState({ note: currentInput });
    }

    render() {
        console.log(this);
        return (
            <div className="new-note">
                <h3>Create New Note:</h3>
                <input 
                className="note-title" 
                placeholder="Note Title"
                name="title"
                value={this.state.note.title}
                onChange={this.changeHandler}
                ></input>
                <br />
                <textarea 
                className="note-content" 
                placeholder="Note Content"
                name="content"
                value={this.state.note.content}
                onChange={this.changeHandler}
                ></textarea>

                <Link className="note-save-button-inner" to="/"><div 
                className="note-save-button"
                onClick={this.saveHandler}
                >Save</div>
                </Link>
            </div>
        )
    }
}

export default NewNote;