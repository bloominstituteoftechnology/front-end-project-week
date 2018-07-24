import React, { Component } from 'react';
import { addNewNote } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.form`
    width: 650px;
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.input`
    width: 350px;
    height: 30px;
    border-radius: 2px;
    margin-bottom: 10px;
    padding-left: 15px;
`;

const Header = styled.h3`
    width: 100%;
`;

const Content = styled.textarea`
    width: 100%;
    height: 500px;
    border-radius: 2px;
    padding-left: 15px;
    padding-top: 15px
    line-height: 20px
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 175px;
    height: 30px;
    background: #20AFB5;
    color: white;
    font: bold;
`;

class NewNoteForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        };
    }

    updateInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addNote = () => {
        const note = {
            title: this.state.title,
            content: this.state.content,
            id: Math.random(),
        }
        this.props.addNewNote(note);
        this.setState({ title: '', content: '' });

    }

    render() {
        return (
            <Container>
                <Header>Create New Note:</Header>
                <Title 
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.updateInputChange} 
                />
                <Content
                    type='text'
                    placeholder='Note Content'
                    name='content'
                    value={this.state.content}
                    onChange={this.updateInputChange}
                />
                <Button onClick={this.addNote}>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        Save
                    </Link>
                </Button>
            </Container>
        )
    }
}

export default connect(null, { addNewNote })(NewNoteForm);