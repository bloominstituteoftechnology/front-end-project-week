import React, { Component } from 'react';
import './index.css';
import Sidebar from './Sidebar';
import NoteCard from './NoteCard';

export const Header = (props) =>{
    return(
        <div className="main-container-header">
            {this.props.text}
        </div>
    )
}
class NoteList extends Component {
    render() {
        return (
            <div className="notelist-wrapper">
                <Sidebar />
                <NoteCard text="Your Notes"/>
            </div>
        );
    }
}

export default NoteList;
