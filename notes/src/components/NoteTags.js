import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Note from './Note';
import {fetchNotes} from '../actions/index';

class NoteTags extends React.Component {

    componentDidMount(){
        this.props.fetchNotes();
      }


    render() {

        let filteredNotes = this.props.notes.filter(note => {
            return note.tags.includes(this.props.match.params.tag)
    })

        return (
            <div>
            <div className = 'note-list'>
            {filteredNotes.map(note => {
                return <Note {...note} key = {note.id} />
            })}

        </div>
        </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default withRouter(connect(mapStateToProps, {fetchNotes})(NoteTags));