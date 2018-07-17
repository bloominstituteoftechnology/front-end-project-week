import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';
import NewNote from '../NewNote/NewNote';
import ViewNote from '../ViewNote/ViewNote';
import EditNote from '../EditNote/EditNote';
import './MainContainer.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MainContainer extends Component {

    constructor() {
        super();
        this.state = {
            currentDisplay: ''
        }
    }    

    render() {
        return (
            <Router>
                <div className="main-container">
                    <SideBar />
                    <Route exact path="/" component={NoteList} />
                    <Route exact path="/new" component={NewNote} />
                    <Route exact path="/view" component={ViewNote} />
                    <Route exact path="/edit" component={EditNote} />
                </div>
            </Router>
        )
    }
}

export default MainContainer;