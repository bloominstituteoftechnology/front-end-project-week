import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/index';
import styled from 'styled-components';

const NewForm = styled.div`
display: flex;
padding-left 500px;
width: 100%;
height: 500px;
background-color: #EEEEEE;`

class NewNote extends Component {
    state = {
        tags: '',
        title: '',
        content: '',
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddNote = () => {
        const { title, content } = this.state;
        this.props.createNote({ title, content });
        this.setState({ title: '', content: '' });
    }

    render() {
        return (
            <NewForm>
                <form onSubmit={() => this.handleAddNote()}>
                    <h1>Create New Note:</h1>
                    <input
                        name='title'
                        value={this.state.title}
                        type="text"
                        placeholder="Note Title"
                        onChange={this.handleInputChange}
                    /><br />
                    <input
                        name='content'
                        value={this.state.content}
                        type="text"
                        placeholder="Note content"
                        onChange={this.handleInputChange}
                    /><br />
                    <button type='submit'>
                        Save
                </button>
                </form>
            </NewForm>
        );
    }
}

const mapStateToProps = state => {
    return {
        createNote: state.createNote
    };
}

export default connect(mapStateToProps, { createNote })(NewNote);
