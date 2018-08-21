import React, {Component} from 'react';
import axios from 'axios';


const URL = 'http://localhost:5000/notes';


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
            <form>
                <input
                    type='text'
                    name='title'
                    placeholder='Note title'
                    value={title}
                    onChange={(event) => this.change(event)}
                />
                <textarea
                    type='text'
                    name='content'
                    placeholder='Note content'
                    value={content}
                    onChange={this.change}
                />

                <button type='submit' onClick={this.addNote}>Save</button>
            </form>
         );
    }
}
 
export default NewNote;