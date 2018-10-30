import React, { Component } from "react";
import { connect } from "react-redux";
import { updateNote } from '../actions';

class EditPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textBody: '',
            id: null
        }
    }

    componentDidMount() {
        const currentNote = this.props.notes.find(note => note._id === this.props.match.params.id)
        this.setState({
            title: currentNote.title,
            textBody: currentNote.textBody,
            id: currentNote._id
        })
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    editNote = event => {
        event.preventDefault();
        const { title, textBody, id } = this.state;
        let editedNote = {title, textBody, id}
        this.props.updateNote(editedNote);
    }

    render() {
        return (
            <div className='edit'>
                <form className='edit-form' onSubmit={this.editNote}>Edit Note
                    <input className='edit-input' name='title' value={this.state.title} onChange={this.changeHandler} type='text' placeholder='Title' required></input>
                    <input className='edit-input' name='textBody' value={this.state.textBody} onChange={this.changeHandler} type='text' placeholder='Content' required></input>
                    <input className='edit-submit' type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {
        notes: state.notes,
    };
};

export default connect(mapStateToProps, { updateNote })(EditPage);