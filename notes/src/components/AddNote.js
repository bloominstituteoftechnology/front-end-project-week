import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {createNote} from '../actions';

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

const ButtonStyled = styled.button`
`

const InnerTitleBox = styled.div`
    justify-content: flex-start;
`

const FormStyled = styled.div`
    border: 2px solid;
    margin: auto;
    width: 35%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const TitleInput = styled.input`
    width: 90%;
`

const ContentInput = styled.textarea`
    width: 90%;
    margin-top: 5px;
`

const FormTitle = styled.div`
    font-size: 1.4 rem;
    font-weight: bold;
    width: 100%;
    display: flex;
`