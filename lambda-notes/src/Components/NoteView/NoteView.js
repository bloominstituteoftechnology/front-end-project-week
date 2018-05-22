import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import "./Noteview.css";
import DeleteModal from '../NoteView/DeleteModal';

const NoteView = () => {
    return (
        <div className = "note-wrapper">
            <Sidebar />
            <div className = "header-wrapper">
                <header className = "noteview-header">
                    <Link to = "/edit" className = "header-link">edit</Link>
                    <DeleteModal className = "header-link">delete</DeleteModal>
                    <h1 className = "note-name">in purus eu magna</h1></header>
                    <p className = "note-body">"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque."</p>
                </div>
        </div>
    )
}
 

export default NoteView;
