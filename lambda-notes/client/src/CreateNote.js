import React, { Component } from 'react';
import './index.css';
import Sidebar from './Sidebar';
import { Header } from './NoteList';
import Form from './Form';
class CreateNote extends Component {
    render() {
        return (
            <div className="note-component-wrapper">
               <Sidebar />
               <div className="create-header">
               <Header text="Create New Note" />
               <Form />
               </div>
            </div>
        );
    }
}

export default CreateNote;
