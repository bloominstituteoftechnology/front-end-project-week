import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';
import _ from "lodash";



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
        const { data } = this.props;
        return (
            <div className="App-content-container">
                <h2>Your Notes:</h2>
                <div className="NotesList-container">
                {_.map(data, (note, id) => <Link to={`/note/${id}`} className="NoteCard-list" key={id}> <NoteCard note={note} /> </Link>) }
                </div>
            </div>
        )
    }
}
 
const mapStateToProps = state => {
    const props = state;
    return props;
} 

export default connect(mapStateToProps, { fetchNotes })(NotesList);