import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = 'https://dakine-lambdanotes-api.herokuapp.com/api/notes';


class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
         }
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    addNote = event => {
        event.preventDefault();
        const newNote = {
          title: this.state.title,
          content: this.state.content
        }
        axios.post(URL, newNote)
          .then(response => {
            console.log(response);
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          })
          this.setState({
            title: '',
            content: ''
          });
    }

    render() {

        const {title, content} = this.state;
        return (
                <div className="new-note-container">
                <div className="new-note">

                <h1 className="new-note-header">Create a New Note:</h1>
                </div>
            <div className="new-note-button">
                <button type='submit' onClick={this.addNote}> <Link to ='/notes' lassName="new-note-button">Save</Link></button>
</div>
                <div className="new-note-form-container">
            <form>
            <div className="new-note-title">
                <input
                    type='text'
                    name='title'
                    placeholder='Note title'
                    value={title}
                    onChange={(event) => this.change(event)}
                />
                </div>
                <div className="new-note-content-wrapper">
                <textarea  className="new-note-content"
                    type='text'
                    name='content'
                    placeholder='Note content'
                    value={content}
                    onChange={this.change}
                />
                </div>
            </form>
            </div>
            </div>
         );
    }
}

export default NewNote;
