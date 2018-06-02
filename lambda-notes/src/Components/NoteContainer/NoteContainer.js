import Sidebar from '../Sidebar/Sidebar';
import './NoteContainer.css';
import { dummydata as notes} from '../../dummydata/dummydata';
import NoteCards from '../NoteCard/NoteCard';
import { HeaderName } from '../NoteCard/NoteCard';

import React, { Component } from 'react';

class NoteContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes:[{notes}]
        }
    }
    render() {
        console.log("NoteContainer", this.props);
        return (
            <div className = "note-container">
                <Sidebar />
                <div className="main-container">
                <HeaderName text = "Your Notes" className = "note-header" />
                <NoteCards notes = {notes} className="note-cards" history={this.props.history}/>
                </div>

            </div>
        );
    }
}

export default NoteContainer;
