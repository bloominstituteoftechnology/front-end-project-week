import React from 'react';
import {connect} from 'react-redux';
import {createNote} from '../actions';
import {ButtonStyled, TitleInput, ContentInput, ComponentBody, ComponentHeader} from './style';

class AddNote extends React.Component{
    state = {
        title: '',
        content: ''
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    addNote = event =>{
        event.preventDefault();
        const note = {
            title: this.state.title,
            content: this.state.content
        }
        this.setState({title: '', content: ''});
        this.props.createNote(note);
    }

    render(){
        return(
            <ComponentBody>
                <ComponentHeader>
                    Create New Note:
                </ComponentHeader>
                <TitleInput
                    type='text'
                    placeholder='Note Title'
                    value={this.state.title}
                    name='title'
                    onChange={this.handleChange}
                />
                <ContentInput
                    rows = '6'
                    placeholder='Note Content'
                    value={this.state.content}
                    name='content'
                    onChange={this.handleChange}
                />
                <ButtonStyled onClick={this.addNote}>
                    Save
                </ButtonStyled>
            </ComponentBody>
        )
    }
}

const mapStateToProps = state =>({
});

export default connect(mapStateToProps, {createNote})(AddNote);