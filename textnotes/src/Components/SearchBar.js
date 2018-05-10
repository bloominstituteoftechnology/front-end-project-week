import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


import SearchSuggest from './SearchSuggest';
import '../App.css';

class SearchBar extends Component {

    state = {
        queue: '',
    }

    handleInputChange = (e) => {
        this.setState({ queue: e.target.value.substr(0,20) });
    }

      render() {

        let filteredNotes = this.props.notes.filter(
            (note) => {
                return note.title.indexOf(this.state.queue) !== -1;
            }
        );

        return (
            <div>
                <h2>Search for your Notes here</h2>
                <form className="bar">
                    <input
                        placeholder="Searching..."
                        value={this.state.queue}
                        onChange={this.handleInputChange}
                    />

                    {filteredNotes.map(note => {
                        return (
                            <Link to={`/Note/${note.id}`}>
                                <SearchSuggest key={note.id} note={note} />
                            </Link>
                        );
                    })}
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}



export default connect(mapStateToProps, { })(SearchBar);