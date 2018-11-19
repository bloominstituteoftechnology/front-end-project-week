import React from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { addNote } from './actions/index';
import { H2Header, NoteContainer, NoteForm, FormTitle, SubmitButton } from './StyledComponents';



class CreateNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            textBody: '',
        }
    }

    handleChange = (value) => {
        this.setState({
            textBody: value
        })
    }


    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            textBody: ''
        })
        this.props.history.push('/notes');
    }

    render(){
        return(
            <NoteContainer>
                <H2Header>Create New Note:</H2Header>

                <NoteForm onSubmit={this.submitHandler} >
                    <FormTitle onChange={this.inputHandler} type="text" value={this.state.title} name="title" placeholder="Note Title" />
                    <ReactQuill value={this.state.textBody} onChange={this.handleChange} />
                    <SubmitButton type="submit">Save</SubmitButton>
                </NoteForm>
            </NoteContainer>
        )
    }
}


export default connect( ()=>({}), { addNote })(CreateNote); 