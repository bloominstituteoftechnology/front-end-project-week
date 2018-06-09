import React, { Component } from 'react';
import './index.css';
import { Header } from './NoteList';
import Sidebar from './Sidebar';
import Form from './Form';

class EditNote extends Component {
    render() {
        return (
            <div className="note-component-wrapper">
               <Sidebar />
               <div className="create-header">
               <Header text="Edit Note" />
               <Form />
               </div>
            </div>
        );
    }
}
export default EditNote;