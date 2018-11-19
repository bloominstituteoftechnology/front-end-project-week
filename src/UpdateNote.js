import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from './actions/index';
import {withRouter} from 'react-router-dom';
import { NoteContainer, NoteForm, FormTitle, FormText, SubmitButton, H2Header } from './StyledComponents';

class UpdateNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            note: [],
            title: '',
            textBody: '',
            __v: ''
        }
    }

    componentDidMount(){
        const note = this.props.notes.find(item=> `${item._id}` === this.props.match.params.id);
        this.setState({
            note: note, 
            title: note.title,
            textBody: note.textBody,
            __v: note.__v
        })
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const newv = this.state.__v + 1;
        const updatedNote = {
            title: this.state.title,
            textBody: this.state.textBody,
            _id: this.state.note._id,
            __v: newv
        }
        console.log(updatedNote);
        this.props.updateNote(updatedNote.id, updatedNote);
        this.setState({
            note: '',
            title: '',
            textBody: '',
            __v: 0
        })
        setTimeout(()=>{this.props.history.push(`/notes/${this.state.note._id}`)}, 1000);
    }

    render(){
        return(
            <NoteContainer>
                <H2Header>Edit Note:</H2Header>
            <NoteForm onSubmit={this.submitHandler}>
                <FormTitle onChange={this.inputHandler} type="text" name="title" placeholder="Note Title" value={this.state.title}></FormTitle>
                <FormText onChange={this.inputHandler} type="text" name="textBody" placeholder="Note Content" value={this.state.textBody}></FormText>
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
