import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CreateNoteFormContainerStyledDiv, CreateNoteStyledForm, CreateNoteStyledTextarea, CreateNoteStyledInput,CreateNoteStyledInput2 } from './CreateNoteForm';
import axios from 'axios';
import host from '../host';
import styled from 'styled-components';

const UpdateNoteStyledButton = styled.button`
    background-color: #2BC1C4;
    color: white;
    width: 190px;
    height:45px;
    font-size:16px;
    font-weight:bold;
    margin-top:15px;
    margin-bottom:15px;
`

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteEntry:{
                title: '',
                textBody: '',
                tags: []
            }
        };
    }

    editNoteTitleHandler = e => {
        // console.log(e.target.value);
    
        this.setState({
          noteEntry: {
            title: e.target.value,
            textBody: this.state.noteEntry.textBody,
            tags: this.state.noteEntry.tags
          }
        })
    }

    editNoteTextBodyHandler = e => {
        // console.log(e.target.value);
    
        this.setState({
          noteEntry: {
            title: this.state.noteEntry.title,
            textBody: e.target.value,
            tags: this.state.noteEntry.tags
          }
        })
    }

    componentDidMount() {
        const id = this.props.match.match.params.id;
        axios.get(`${host}/api/noteEntries/${id}`)
            .then(res=> {
                // console.log('res from EditNote.js componentDidMount: ', res)
                this.setState({noteEntry:res.data[0]})
            })
            .catch(err=> {
                console.log(err)
            })
    }
    
    
    render() {
        // console.log('this.state: ', this.state);
        // console.log('this.state.noteEntry: ', this.state.noteEntry);

        return (
            <CreateNoteFormContainerStyledDiv>
                <h1 style = {{margin:'55px 0px 25px 0px', font:'Roboto Bold', fontWeight:'bold', fontSize:'20px', color:'#4A4A4A'}}>Edit Note:</h1>
                <CreateNoteStyledForm>

                    <CreateNoteStyledInput
                        type="text"
                        placeholder="Note Title"
                        name="title"
                        onChange = {this.editNoteTitleHandler}
                        value = {this.state.noteEntry.title}
                    />

                    <CreateNoteStyledTextarea
                        type="text"
                        placeholder="Note Content"
                        name="content"
                        onChange = {this.editNoteTextBodyHandler}
                        value = {this.state.noteEntry.textBody}
                    >
                    </CreateNoteStyledTextarea>
                    
                </CreateNoteStyledForm>

                <Link to={`/`}>
                    <UpdateNoteStyledButton onClick={(e) => this.props.editNoteEntry(e, this.props.match.match.params.id, this.state.noteEntry)}>
                        Update
                    </UpdateNoteStyledButton>
                </Link>

            </CreateNoteFormContainerStyledDiv>
        )
    };
}

export default EditNote