import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../../actions/index';
import styled from 'styled-components';

const EditForm = styled.div`
display: flex;
padding-left 500px;
width: 100%;
height: 500px;
background-color: #EEEEEE;`


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            id: props._id,
            title: '',
            textBody: ''
        }
    };

    componentDidMount(id) {
        this.setState({ id })

    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleEditNote = e => {
        e.preventDefault();
        const editedNote = {
            id: this.props.note._id,
            title: this.props.title,
            textBody: this.props.textBody

        }
        this.props.editNote(editedNote);
    }

    render() {
        console.log(this.handleEditNote)
        return (
            <EditForm>
                <form onSubmit={() => this.handleEditNote()}>
                    <h1>Edit Note:</h1>
                    <input
                        name='title'
                        value={this.state.title}
                        type="text"
                        onChange={this.handleInputChange}
                    /><br />
                    <input
                        name='textBody'
                        value={this.state.textBody}
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
        editNote: state.editNote
    };
}

export default connect(mapStateToProps, { editNote })(EditNote);