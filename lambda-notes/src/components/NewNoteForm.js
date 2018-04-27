import React, { Component } from 'react';
import PageNavigator from './PageNavigator';
import { lambdaNotes } from './MyNotes';
import { Link } from 'react-router-dom';
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
          this.props.parent.state.Notes.push(this.state);
          this.setState({
            title: '',
            body: ''
          });
      }

    render() {
        return (
            <div className="new-note-container">
                <div className="new-note-wrapper">
                    <h3 className="new-note-header"> Create New Note:</h3>
                    <input name="title" className="title-input" placeholder="Note Title" onChange={this.handleChange.bind(this)} />
                    <textarea name="body" placeholder="Note Content"  className="body-text-area" onChange={this.handleChange.bind(this)}/>
                    <Link to="/" className="save-button-link"><button className="save-button" onClick={this.handleSubmit.bind(this)}>Save</button></Link>
                </div>
            </div>
        );
    }
}

export default NewNoteForm;