import React, { Component } from 'react';
import './createNote.css';
import { addNote } from '../../actions';
import { connect } from 'react-redux';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
                title: '',
                textBody: ''
            
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            
            title: '',
            textBody: ''
            
        });
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="createNote">
                <h3>Create New Note:</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input className="newTitle" type="text" placeholder="Title" value={this.state.title} name="title" onChange={event => this.changeHandler(event)} />
                    <textarea className="newContent" placeholder="Content" value={this.state.textBody} name="textBody" onChange={event => this.changeHandler(event)} />
                    <input className="saveButton" type="submit" value="save" />
                </form>
            </div>
        )
    }
}

export default connect(null,{
    addNote
})(CreateNote)