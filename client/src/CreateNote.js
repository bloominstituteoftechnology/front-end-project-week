import React, { Component } from 'react';
import './CreateNote.css';
import { Header } from './Header';
import Form from './Form';
class CreateNote extends Component {
    render() {
        return (
            <div className="note-component-wrapper">
                <div className="create-header">
                    <Header text="Create New Note" />
                    <Form 
                        handleChange={this.props.handleChange}
                        title=""
                        body=""
                    />
                </div>
            </div>
        );
    }
}

export default CreateNote;
