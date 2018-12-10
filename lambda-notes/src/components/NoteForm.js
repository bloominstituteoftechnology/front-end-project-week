import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNote, editNote } from '../actions';
import styled from 'styled-components';

const NotesInputForm = styled.div`
    padding: 3rem;
    margin-left: 22rem;

    h2 {
        margin: 3rem 0;
        font-size: 2rem;
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    button {
        width: 19rem;
        height: 4.5rem;
        border: 1px solid #AFAFAF;
        background-color: #24B8BD;
        color: #EAF4F3;
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;    
    }
`

const TitleInput = styled.input`
    height: 4rem;
    width: 35.5rem;
    padding: 1rem;
    margin-bottom: 2rem;
`
const BodyInput = styled.textarea`
    height: 34rem;
    width: 60.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
    font-family: sans-serif;
`

class NoteForm extends React.Component {
    constructor(){
        super();
        this.state = {
            tags: [],
            title: '',
            textBody: '',
        }
    }

    handlesChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault();
        if (this.props.edit) {
            this.props.editNote(this.state, this.props.match.params.id);
        } else {
            this.props.addNote(this.state);
        }
        this.props.history.push('/');
    }

    componentDidMount() {
        if(this.props.edit) {
            const currentNote = this.props.notes.find(note => {
                return note._id.toString() === this.props.match.params.id
            });
            if (currentNote) {
                this.setState({
                    tags: currentNote.tags,
                    title: currentNote.title,
                    textBody: currentNote.textBody,
                })
            }
        }
    }

    render() {
        return(
            <NotesInputForm>
                <h2>{this.props.edit? 'Edit Note:' : 'Create New Note:'}</h2>
                <form onSubmit={this.submitHandler}>
                    <TitleInput
                        type='text'
                        name='title'
                        value={this.state.title}
                        placeholder='Note Title'
                        onChange={this.handlesChanges}
                        required
                    />
                    <BodyInput
                        type='text'
                        name='textBody'
                        value={this.state.textBody}
                        placeholder='Note Content'
                        onChange={this.handlesChanges}
                        required
                    />
                    <button>{this.props.edit? 'Update' : 'Add Note'}</button>
                </form>
            </NotesInputForm>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default withRouter(
    connect(mapStateToProps, { addNote, editNote })(NoteForm)
);