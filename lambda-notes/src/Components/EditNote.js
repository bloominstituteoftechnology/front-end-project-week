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
            note:{}
        };
    }

    fetchNote = () => {
    }
    componentDidMount() {
        // let note = this.props.noteEntries.filter(noteEntry => noteEntry.id ==this.props.match.match.params.id)
        // note = note[0]
        // console.log('this.props2: ', this.props)
        // console.log('note2: ', note)
        
        const id = this.props.match.match.params.id;
        axios.get(`http://localhost:8000/api/noteEntries/${id}`)
            .then(res=> {
                console.log(res)
                this.setState({note:res.data[0]})
            })
            .catch(err=> {
                console.log(err)
            })
    }
    
    
    render() {
        // const textBody = this.state.note.textBody
        const { note } = this.state
        console.log('sdfsdf', this.state.note.textBody)
        const textBodyCopy = this.state.note.textBody
        
        return (
            <CreateNoteFormContainerStyledDiv>
                <h1 style = {{margin:'55px 0px 25px 0px', font:'Roboto Bold', fontWeight:'bold', fontSize:'20px', color:'#4A4A4A'}}>Edit Note:</h1>
                <CreateNoteStyledForm>
                    <CreateNoteStyledInput
                        type="text"
                        placeholder="Note Title"
                        name="title"
                        onChange={this.props.createNoteTitleHandler}
                        // defaultValue={props.noteEntries[props.match.match.params.id - 1].title}
                        defaultValue={note.title}
                    />
                    {/* <CreateNoteStyledTextarea
                        type="text"
                        placeholder="Note Content"
                        name="content"
                        onChange={this.props.createNoteTextBodyHandler}
                        // defaultValue={props.noteEntries[props.match.match.params.id - 1].textBody}
                        defaultValue={note.textBody}
                        
                    >
                    {`dfdsdf + ${textBodyCopy}`}
                    </CreateNoteStyledTextarea> */}
                    <CreateNoteStyledInput2
                        type="text"
                        placeholder="Note Content"
                        name="content"
                        onChange={this.props.createNoteTextBodyHandler}
                        // defaultValue={props.noteEntries[props.match.match.params.id - 1].textBody}
                        defaultValue={textBodyCopy}
                        
                    />
                    
                </CreateNoteStyledForm>

                <Link to={`/`}>
                    <UpdateNoteStyledButton onClick={(e) => this.props.editNoteEntry(e, this.props.match.match.params.id)}>
                        Update
                    </UpdateNoteStyledButton>
                </Link>

            </CreateNoteFormContainerStyledDiv>
        )
    };
}

export default EditNote