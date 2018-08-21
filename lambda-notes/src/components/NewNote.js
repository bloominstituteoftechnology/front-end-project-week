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
            window.location = '/notes';
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

       
        return ( 
            <form>
                <input
                    type='text'
                    name='title'
                    placeholder='Note title'
                    value={this.state.title}
                    onChange={this.change}
                />
                <textarea
                    type='text'
                    name='content'
                    placeholder='Note content'
                    value={this.state.content}
                    onChange={this.change}
                />

                <button onClick={this.addNote}>Save</button>
            </form>
         );
    }
}
 
export default NewNote;