import React, { Component } from 'react';
import { addNote } from '../actions/notesActions';
import { connect } from 'react-redux';

class CreateNote extends Component {
    constructor(props) {
        super();
        this.state = {
            title: '',
            description: ''
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
   

    handleOnSubmit(event) {
        event.preventDefault();
        const newNote = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.addNote(newNote);

        this.setState({
            title: '',
            description: ''
        })
    }

    handleOnChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='CreateNoteForm'>
                <h3 className="CreateFormTitle">Create New Note:</h3>
                <form className="addedNote" onSubmit={this.handleOnSubmit} onChange={this.handleOnChange}>
                    <input className="InputTitle" type="text" name="title" placeholder="Title Here..." onChange={this.handleOnChange} value={this.state.title} />
                    <input className="InputTitle" type="text" name="description" placeholder="Description Here..." onChange={this.handleOnChange} value={this.state.description} />
                    <button type="button" onClick={this.handleOnSubmit}>Save</button>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { addNote })(CreateNote);

