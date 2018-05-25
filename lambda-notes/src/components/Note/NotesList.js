import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';


import NoteCard from './NoteCard';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        console.log("notes data ", this.props.data.isFetching);
        if(this.props.data.fetched)
            return (
            <div className="App-content-container">
                <h2>Your Notes:</h2>
                <div className="NotesList-container">
                    {this.props.data.notes.map( note => <Link to={`/note/${note.id}`} className="NoteCard-list" key={note.id}> <NoteCard note={note} /> </Link>) }
                </div>
            </div>
        )
        return (
            <div className="App-content-container"> 'Loading...' </div>
        )
    }
}
 
const mapStateToProps = state => {
    const props = state;
    return props;
} 

export default connect(mapStateToProps, { fetchNotes })(NotesList);
