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
                    <Link to = "/edit" className = "header-link">edit</Link>
                    <Link to = "/" className = "header-link">delete</Link>
                    <h1 className = "note-name">in purus eu magna</h1></header>
                    <p className = "note-body">"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque."</p>
                </div>
        </div>
    )
}
 
export default NoteView;
