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
            note: [],
            title: '',
            textBody: '',
        }
    }

    componentDidMount(){
        const note = this.props.notes.find(item=> `${item._id}` === this.props.match.params.id);
        this.setState({
            note: note, 
            title: note.title,
            textBody: note.textBody,
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
            _id: this.state.note._id,
        }
        console.log(updatedNote);
        this.props.updateNote(this.state.note._id, updatedNote);
        setTimeout(()=>{this.props.history.push(`/notes/${this.state.note._id}`)}, 1000);
    }

    render(){
        return(
            <NoteContainer>
                <H2Header>Edit Note:</H2Header>
            <NoteForm onSubmit={this.submitHandler}>
                <FormTitle onChange={this.inputHandler} type="text" name="title" placeholder="Note Title" value={this.state.title}></FormTitle>
                <ReactQuill className="quillEditor" value={this.state.textBody} onChange={this.handleChange} />
                <SubmitButton type="submit">Update</SubmitButton>
            </NoteForm>
            </NoteContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes 
    }
}

export default withRouter(connect(mapStateToProps, { updateNote })(UpdateNote));
