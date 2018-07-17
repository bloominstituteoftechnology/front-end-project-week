import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Note from './Note';
import { fetchSingleNote } from '../actions';

class SingleNote extends React.Component {
    componentDidMount () {
        const id = this.props.match.params.id;
        this.props.fetchSingleNote(id)
    }

    render() { 
        console.log(this.props.note)
        return (
            <Note note={this.props.note}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note
    }
}

 
export default connect(mapStateToProps, {fetchSingleNote})(SingleNote);