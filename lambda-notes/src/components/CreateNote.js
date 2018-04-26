import React, { Component } from 'react';
import { addNote } from '../actions/notesActions';
import { connect } from 'react-redux';
import '../App.css'
import './CreateNote.css';

class CreateNote extends Component {
    constructor(props) {
        super(props);
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
                    <input className="InputTitle" type="text" name="title" placeholder="New TItle..." onChange={this.handleOnChange} value={this.state.title} />
                    <input className="InputContent" placeholder="New Content" type="text" name="description"  onChange={this.handleOnChange} value={this.state.description} />
                    <button className="SaveBtn" type="button" onClick={this.handleOnSubmit}><h10 className="Save" >Save</h10></button>
                </form>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { addNote })(CreateNote);

