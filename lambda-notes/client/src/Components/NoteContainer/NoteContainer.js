import Sidebar from '../Sidebar/Sidebar';
import './NoteContainer.css';
import NoteCards from '../NoteCard/NoteCard';
import { HeaderName } from '../NoteCard/NoteCard';

import React, { Component } from 'react';

class NoteContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }
    render() {
        console.log("NoteContainer", this.props);
        return (
            <div className = "note-container">
                <Sidebar />
                <div className="main-container">
                <HeaderName text = "Your Notes" className = "note-header" />
                <NoteCards className="note-cards" history={this.props.history}/>
                </div>

            </div>
        );
    }
}

export default NoteContainer;
