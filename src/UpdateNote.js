import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from './actions/index';
import {withRouter} from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { NoteContainer, NoteForm, FormTitle, SubmitButton, H2Header } from './StyledComponents';

class UpdateNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            textBody: '',
        }
    }

    componentDidMount(){
        this.setState({
            title: this.props.currentNote.title,
            textBody: this.props.currentNote.textBody,
        })
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
        const updatedNote = {
            title: this.state.title,
            textBody: this.state.textBody,
            _id: this.props.currentNote._id,
        }
        this.props.updateNote(this.props.currentNote._id, updatedNote);
        this.props.history.push(`/notes/${this.props.currentNote._id}`);
    }

    render(){
        return(
            <NoteContainer>
                <H2Header>Edit Note:</H2Header>
            <NoteForm onSubmit={this.submitHandler}>
                <FormTitle onChange={this.inputHandler} type="text" name="title" placeholder="Note Title" value={this.state.title}></FormTitle>
                <ReactQuill className="quillEditor" value={this.state.textBody || ''} onChange={this.handleChange} />
                <SubmitButton type="submit">Update</SubmitButton>
            </NoteForm>
            </NoteContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote
    }
}

export default withRouter(connect(mapStateToProps, { updateNote })(UpdateNote));
