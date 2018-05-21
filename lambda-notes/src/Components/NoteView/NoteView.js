import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import "./Noteview.css";
const NoteView = () => {
    return (
        <div className = "note-wrapper">
            <Sidebar />
            <div className = "header-wrapper">
                <header className = "noteview-header">
                    <Link to = '/list/number/edit' className = "header-link">edit</Link>
                    <Link to = '/' className = "header-link">delete</Link>
                    <h1 className = "note-name">Note Name</h1></header>
                    <p className = "note-body">With supporting text below as a natural lead-in to additional content.</p>
                </div>
        </div>
    )
}
 
export default NoteView;
