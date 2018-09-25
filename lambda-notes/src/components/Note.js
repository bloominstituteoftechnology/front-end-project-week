import React from 'react';
import '../App.css';
import { Route, NavLink } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            title: '',
            textBody: ''
        }
    }

    componentDidMount() {
        this.props.fetchNotes();
        const note = this.props.notes.find(note => note._id == this.props.match.params.id);
        this.setState({
            _id: note._id,
            title: note.title,
            textBody: note.textBody
        })
    }

    render() {
        return (
            <div className='main-view'>
                <div className='note-nav'>
                    <NavLink to={`/note-edit/${this.state._id}`} className="note-links">edit</NavLink>
                    <NavLink to={`/note/${this.state._id}/delete`} className="note-links">delete</NavLink>
                </div>
                <h2>{this.state.title}</h2>
                <p>{this.state.textBody}</p>
                <Route path='/note/:id/delete' render={props => ( <DeleteNote {...props} deleteNote={this.props.deleteNote} /> )} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        fetchingNotes: state.fetchingNotes, 
    }
}

export default connect(mapStateToProps, {fetchNotes})(Note); 