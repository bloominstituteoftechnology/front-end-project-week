import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';
import './MainContainer.css';

class MainContainer extends Component {

    constructor() {
        super();
        this.state = {
            currentDisplay: ''
        }
    }    

    render() {
        return (
            <div className="main-container">
                <SideBar />
                <NoteList />
            </div>
        )
    }
}

export default MainContainer;