import Sidebar from '../Sidebar/Sidebar';
import './NoteContainer.css';
import { dummydata as notes} from '../../dummydata/dummydata';
import NoteCardList from './NoteCardList';
import React, { Component } from 'react';

class NoteContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes:[{notes}]
        }
    }
    render() {
        console.log(this.state);
        return (
            <div className = "note-container">
                <Sidebar />
                <NoteCardList notes={notes}/>
            </div>
        );
    }
}

export default NoteContainer;
