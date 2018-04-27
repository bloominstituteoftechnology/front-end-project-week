import React, { Component } from 'react';
import PageNavigator from './PageNavigator';
import { lambdaNotes } from './MyNotes';
import { Link } from 'react-router-dom';
import './EditNoteForm.css';

class EditNoteForm extends Component {
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
          this.props.parent.state.Notes.push(this.state);
          this.setState({
            title: '',
            body: ''
          });
      }

    render() {
        return (
            <div className="edit-note-container">
                <div className="edit-note-wrapper">
                    <h3 className="edit-note-header">Edit Note:</h3>
                    <input name="title" className="title-input" placeholder="Note Title" onChange={this.handleChange.bind(this)} />
                    <textarea name="body" placeholder="Note Content"  className="body-text-area" onChange={this.handleChange.bind(this)}/>
                    <Link to="/" className="save-button-link"><button className="save-button" onClick={this.handleSubmit.bind(this)}>Save Changes</button></Link>
                </div>
            </div>
        );
    }
}

export default EditNoteForm;