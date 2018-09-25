import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EditForm = styled.form`
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
        font-size: 1.6rem;
    }

    > textarea {
        height: 300px;
        padding: 10px;
        margin: 5px 0;
        font-size: 1.4rem;
        line-height: 1.5;
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


const URL = 'http://localhost:9000/notes/';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            id: 0
         }
    }

componentDidMount () {
    const id = Number(this.props.match.params.id);
        axios.get(URL)
        .then(response => {
            let matching = response.data.find(note => note.id === id);
            this.setState({
                title: matching.title,
                content: matching.content,
                id: matching.id
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    change = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

    update = (event) => {
        event.preventDefault();
        const updatedNote = {
            title: this.state.title,
            content: this.state.content
        }
        axios.put(`${URL}${this.state.id}`, updatedNote)
        .then(response => {
            console.log(response);
            console.log(response.data);
            window.location = '/notes';
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() { 
        
        return (
            <EditForm>
                <h1>Edit Note: {this.state.title}</h1>
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

                <button type='submit' onClick={this.update}>Update</button>
            </EditForm>
         );
    }
}
 
export default EditNote;