import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchNote, updateNote } from '../actions';

class EditPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textBody: '',
            id: null,
            edited: false
        }
    }

    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id).then(() => {
            this.setState({
                title: this.props.note.title,
                textBody: this.props.note.textBody,
                id: this.props.note._id
            })
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    editNote = event => {
        event.preventDefault();
        const { title, textBody, id } = this.state;
        let editedNote = {title, textBody, id}
        this.props.updateNote(editedNote);
        this.setState({ edited: true })
    }

    render() {
        return this.state.edited ? 
        <Redirect to='/' /> :
        (
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
        note: state.note,
        fetching: state.fetching
    };
};

export default connect(mapStateToProps, { fetchNote, updateNote })(EditPage);