import React, {Component} from 'react';
import axios from 'axios';

class AddNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    addNote = (event)=> {
        event.preventDefault();
        this.setState({
            title: '',
            textBody: ''
        });
        console.log(this.state);
    }

    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    addNote = (event)=> {
        axios.post('https://killer-notes.herokuapp.com/note/create')
            .then(response=> {
                console.log(response);
                this.setState({notes: response.data});
            })
            .catch(err=> {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNote}>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='textBody'
                        placeholder='Note'
                        value={this.state.textBody}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>
                        Add Note
                    </button>
                </form>
            </div>
        );
    }
}

export default AddNoteForm;