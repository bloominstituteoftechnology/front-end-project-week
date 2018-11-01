import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: '',
            textBody: ''
        }
    }

addNote = () => {
    axios
    .post('https://fe-notes.herokuapp.com/note/create', this.state)
    .then(response => this.setState({ notes: response.data}))
    .catch(error => console.log(error));
}

newNoteHandler = event => {
    event.preventDefault();
    this.addNote();
    this.setState({
        title: '',
        textBody: ''
    })
    this.props.history.push('/')
}

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

render() {
    return(
        <div className="input-form">
            <h2>Create New Note</h2>
            <form onSubmit={this.newNoteHandler}>
            <input
            className="title-input"
            onChange={this.changeHandler}
            type="text"
            placeholder="title"
            value={this.state.title}
            name="title" />

        
            <textarea className="text-input"
           onChange={this.changeHandler}
           type="textarea"
           placeholder="text"
           value={this.state.textBody}
           name="textBody" />

            <button onClick={this.newNoteHandler} type="submit" className="button">Add Note</button>
            </form>
        </div>
    )
}
}
export default withRouter(NoteForm); 