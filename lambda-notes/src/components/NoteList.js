import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNote } from '../actions';

class NoteList extends Component {
    state = {
        search: ''
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.toLowerCase().substr(0,
            20)});
        event.preventDefault();
    }

    render() {
        // console.log(this.props.notes)
        let filteredNotes = this.props.notes.filter((note) => {
            if (this.state.search === '') {
                return this.props.notes;
            }
            return note.title.toLowerCase().indexOf(this.state.search) !== -1;
        });
        return (
            <div className="notelist-container">
                <h1>Your Notes:</h1>
                <input 
                    text="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
                <div className="notelist" id="sortable">
                    {filteredNotes.map(note => {
                        return (
                            <Link 
                            style={{textDecoration: "none", color: "black"}} 
                            key={note.id} to={`/note/${note.id}`} 
                            className="note-link note ui-state-default">
                            <div>
                                <h4>{note.title}</h4>
                                <p>{note.body}</p>
                            </div>
                        </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { addNote })(NoteList);