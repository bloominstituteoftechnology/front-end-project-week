import React from 'react';
import {connect} from 'react-redux';
import {createNote} from '../actions';
import {ButtonStyled, InnerTitleBox, FormStyled, TitleInput, ContentInput, FormTitle} from './style';

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
            <FormStyled>
                <FormTitle>
                    <InnerTitleBox>
                        Create New Note:
                    </InnerTitleBox>
                </FormTitle>
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
                <ButtonStyled type='submit' onClick={this.addNote}>
                    Save
                </ButtonStyled>
            </FormStyled>
        )
    }
}

const mapStateToProps = state =>({
});

export default connect(mapStateToProps, {createNote})(AddNote);