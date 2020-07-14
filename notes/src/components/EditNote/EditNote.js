import React, { Component } from 'react';
import './editNote.css';
import { editNote } from '../../actions';
import { connect } from 'react-redux';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteShape: {
                title: this.props.noteShape.title,
                textBody: this.props.noteShape.textBody
            },
            id: this.props.noteShape.id
        }
    }

    changeHandler = event => {
        this.setState({
            noteShape: {
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.editNote(this.state.id, this.state.noteShape);
        this.setState({
            title: '',
            textBody: ''
        });
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="editNote">
                <h3>Edit Note:</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input className="newTitle" type="text" placeholder="Title" value={this.state.noteShape.title} name="title" onChange={event => this.changeHandler(event)} />
                    <textarea className="newContent" placeholder="Content" value={this.state.noteShape.textBody} name="textBody" onChange={event => this.changeHandler(event)} />
                    <input className="saveButton" type="submit" value="save" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        noteShape: state.notesReducer.noteShape
    }
}

export default connect(mapStateToProps, {
    editNote
})(EditNote);