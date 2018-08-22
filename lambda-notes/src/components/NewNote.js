import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNotes, addNote} from '../actions/actions';
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

    add = () => {
        if (this.state.title.length > 0 && this.state.content.length > 0) {
            this.props.addNote(this.state);
            }
        this.props.getNotes();
    }
    render() { 

        const {title, content} = this.state;
       
        return ( 
            <AddForm>
            <h1>Create New Note: </h1>
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
                    onChange={(event) => this.change(event)}
                />

                <button onClick={() => this.add(this.state)}>Save</button>
            </AddForm>
         );
    }
}


 
export default connect (null, {getNotes, addNote})(NewNote);