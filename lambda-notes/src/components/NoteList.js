import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNote } from '../actions';

class NoteList extends Component {
    state = {
        search: '',
        titleCheck: false,
        bodyCheck: false
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.toLowerCase().substr(0,
            20)});
        event.preventDefault();
    }

    updateBody(event) {
        this.setState({ bodyCheck: !this.state.bodyCheck, titleCheck: this.state.bodyCheck})
    }

    updateTitle(event) {
        this.setState({ titleCheck: !this.state.titleCheck, bodyCheck: this.state.titleCheck})
    }
    render() {
        // console.log(this.props.notes)
        // console.log('body',this.state.bodyCheck)
        // console.log('title',this.state.titleCheck)
        let filteredNotes = this.props.notes.filter((note) => {
            if (this.state.search === '') {
                return this.props.notes;
            }
            if (this.state.titleCheck) {
                return note.title.toLowerCase().indexOf(this.state.search) !== -1;
            } else if (this.state.bodyCheck) {
                return note.body.toLowerCase().indexOf(this.state.search) !== -1;
            }
            return this.props.notes;
        });
        return (
            <div className="notelist-container">
                <h1>Your Notes:</h1>
                <form>
                    <input 
                        placeholder="Select Search Type..."
                        type="text"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                    />
                    <div className="radio-container">
                        <input 
                            className="radio-button"
                            type="radio"
                            value={this.state.titleCheck}
                            name="search"
                            onChange={this.updateTitle.bind(this)}
                            /><label>Search Title</label>
                        <input 
                            className="radio-button"
                            type="radio"
                            value={this.state.bodyCheck}
                            name="search"
                            onChange={this.updateBody.bind(this)}
                            /><label>Search Body</label>
                    </div>
                </form>
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