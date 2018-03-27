import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LeftPanel extends Component {
    render() {
        return (
            <div className="LeftPanel">
                <h1>Lambda Notes</h1>
                <div>
                    <NoteButton text="View Your Notes" onClick={}/>
                </div>
                <div>
                    <NoteButton text="+ Create New Note"/>
                </div>
            </div>
        )
    }
}

class NoteButton extends Component {
    render() {
        return (
        <button className="NoteButton">{this.props.text}</button> 
    );
}
}

