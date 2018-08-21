import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AddForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    background: lightgray;

    > h1 {
        margin: 20px 0;
        font-weight: bold;
    }

    > input {
        width: 50%;
        height: 30px;
        margin: 5px 0;
        padding: 10px;
    }

    > textarea {
        height: 300px;
        padding: 10px;
        margin: 5px 0;
    }

    > button {
        margin: 5px 0;
        width: 35%;
        background: #20B2AA;
        color: white;
        font-weight: bold;
        font-size: 1.4rem;
        height: 35px;
        border: 1px solid gray;
    }
    

`


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
            <AddForm>
            <h1>Create New Note: </h1>
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
            </AddForm>
         );
    }
}
 
export default NewNote;