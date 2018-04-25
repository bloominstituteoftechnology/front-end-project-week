import React, { Component } from 'react';
import PageNavigator from './PageNavigator';
import { lambdaNotes } from './MyNotes';
import './NewNoteForm.css';

class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit() {
          console.log(this.props.lambdaNotes);
          this.props.parent.state.Notes.push(this.state);
          this.props.parent.setState();
      }

    render() {
        console.log(this.state, this.props.parent.state);
        return (
            <div className="new-note-container">
                <div className="new-note-wrapper">
                    <h3 className="new-note-header"> Create New Note:</h3>
                    <input name="title" className="title-input" placeholder="Note Title" onChange={this.handleChange.bind(this)} />
                    <textarea name="body" placeholder="Note Content"  className="body-text-area" onChange={this.handleChange.bind(this)}/>
                    <button className="save-button" onClick={this.handleSubmit.bind(this)}>Save</button>
                </div>
            </div>
        );
    }
}

export default NewNoteForm;