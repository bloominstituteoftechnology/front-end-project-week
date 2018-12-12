import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNote, editNote } from '../actions';
import styled from 'styled-components';

const NotesInputForm = styled.div`
    padding: 3rem;
    margin-left: 22rem;
    position: relative;

    h2 {
        margin: 3rem 0;
        font-size: 2rem;
        font-weight: bold;
    }

     h3 {
        margin: 1rem 0;
        font-weight: bold;
        margin-bottom: 15.5rem
    }

    form {
        display: flex;
        flex-direction: column;
    }
`

const SubmitButton = styled.button`
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
`

const TitleInput = styled.input`
    height: 4rem;
    width: 35.5rem;
    padding: 1rem;
    margin-bottom: 2rem;
`
const BodyInput = styled.textarea`
    height: 32rem;
    width: 60.5rem;
    padding: 1rem;
    font-family: sans-serif;
`

const TagsForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 6.5rem;
`

const TagsInput = styled(TitleInput)`
    width: 29.5rem;
`

const TagsDisplay = styled.div`
    position: absolute;
    bottom: 19rem;
    width: 60.5rem;
    display: flex;
    flex-wrap: wrap;
`

const TagsButton = styled.button`
    border: 1px solid #AFAFAF;
    background-color: #24B8BD;
    color: #EAF4F3;
    width: 6rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;  
`

const IndividualTag = styled.div`
    padding: 0.5rem;
    border: 1px solid #AFAFAF;
    background-color: white;
    font-size: 1.4rem;
    width: max-content;
    margin: 0 0.5rem;

    span {
        margin: 0 0.5rem;
    }
`

class NoteForm extends React.Component {
    constructor(){
        super();
        this.state = {
            tags: [],
            title: '',
            textBody: '',
            tagsText: '',
        }
    }

    handlesChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addToTags = event => {
        event.preventDefault();
        this.setState({
            tags: [...this.state.tags, this.state.tagsText],
            tagsText: '',
        })
    }

    submitHandler = event => {
        event.preventDefault();
        if (this.props.edit) {
            this.props.editNote({
                tags: this.state.tags,
                title: this.state.title,
                textBody: this.state.textBody,
            }, this.props.match.params.id);
        } else {
            this.props.addNote({
                tags: this.state.tags,
                title: this.state.title,
                textBody: this.state.textBody,
            });
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
                    <h3>Tags:</h3>
                    <SubmitButton>{this.props.edit? 'Update' : 'Add Note'}</SubmitButton>
                </form>
                <TagsDisplay>
                    {this.state.tags.map((tag, index) => 
                        <IndividualTag key={index}>
                            {tag} 
                        </IndividualTag>    
                    )}
                </TagsDisplay>
                <form onSubmit={this.addToTags}>
                <TagsForm>
                    <TagsInput 
                            type='text'
                            name='tagsText'
                            value={this.state.tagsText}
                            placeholder='Note Tags (enter one at a time!)'
                            onChange={this.handlesChanges}    
                    />
                    <TagsButton><i className="fas fa-plus"></i></TagsButton>
                </TagsForm>
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