import React, { Component } from 'react';
import './index.css';
import { Header } from './NoteList';
import Sidebar from './Sidebar';
import Form from './Form';

class EditNote extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="note-component-wrapper">
               <Sidebar />
               <div className="create-header">
               <Header text="Edit Note" />
               <Form note = {this.props.location.state}/>
               </div>
            </div>
        );
    }
}
export default EditNote;