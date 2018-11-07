
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteView extends Component {
    constructor() {
        super()
        this.state = {
            matched: [],
        }
    }

    componentWillMount() {
        let routeId = this.props.match.params.id;
        let matched = this.props.notesData.filter((item) => item._id === routeId);
        this.setState({ matched })
    }

    render() {
        return (
        <div className= 'note-view-wrapper'>
           <h1>{this.state.matched[0].title} onClick = {() => this.props.currentNote} </h1>
           <p>{this.state.matched[0].textBody}</p>
        </div>
        )    
    }
}

export default NoteView;