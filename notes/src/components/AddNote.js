import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNote } from '../actions';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    addNote = event => {
        event.preventDefault();
        const { title, textBody } = this.state;
        let newNote = {title, textBody}
        this.props.addNote(newNote)
        this.setState(() => ({
            title: '',
            textBody: '',
        }))
    }

    render() {
        return (
            <div className='add'>
                <form className='add-form' onSubmit={this.addNote}>Add Note
                    <input className='add-input' name='title' value={this.state.title} onChange={this.changeHandler} type='text' placeholder='Title' required></input>
                    <input className='add-input' name='textBody' value={this.state.textBody} onChange={this.changeHandler} type='text' placeholder='Content' required></input>
                    <input className='add-submit' type='submit' value='submit'/>
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

export default connect(mapStateToProps, { addNote })(AddNote);
