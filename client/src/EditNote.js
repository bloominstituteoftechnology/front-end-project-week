import React, { Component } from 'react';
import './css/index.css';
import { Header } from './Header';
import Form from './Form';

class EditNote extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="note-component-wrapper">
               <div className="create-header">
               <Header text="Edit Note" />
               <Form 
                title={this.props.location.state.title}
                body={this.props.location.state.body}
                handleChange={this.props.handleChange}
                />
               </div>
            </div>
        );
    }
}
export default EditNote;