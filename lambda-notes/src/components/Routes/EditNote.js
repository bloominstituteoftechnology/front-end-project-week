import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editNote } from '../../actions/index';
import styled from 'styled-components';

const EditForm = styled.div`
display: flex;
padding-left 500px;
width: 100%;
height: 850px;
background-color: #EEEEEE;`


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            title: '',
            content: ''
        }
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        let note = this.props.notes.find(note => id === note.id.toString())
        this.setState({ title: note.title, content: note.content })
        console.log(note)

    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleEditNote = e => {
        e.preventDefault();
        const editedNote = {
            title: this.state.title,
            content: this.state.content

        }
        this.props.editNote(editedNote, this.props.match.params.id);
    }

    render() {
        console.log(this.props)

        return (
            <EditForm>
                <form onSubmit={(e) => this.handleEditNote(e)}>
                    <h1>Edit Note:</h1>
                    <input
                        name='title'
                        value={this.state.title}
                        type="text"
                        onChange={this.handleInputChange}
                    /><br />
                    <input
                        name='content'
                        value={this.state.content}
                        type="text"
                        onChange={this.handleInputChange}
                    /><br />
                    <button type='submit'>
                        Update
                </button>
                </form>
            </EditForm>
        );
    }
}

const mapStateToProps = state => {
    return {

        notes: state.notesReducer.notes
    };
}

export default connect(mapStateToProps, { editNote })(EditNote);