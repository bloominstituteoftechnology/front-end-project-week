import React, { Component } from 'react';
import Note from './Note.js';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayedNotes: []
        }
    }

    componentDidMount = () => {
        this.props.fetchNotes();
        setTimeout(() => this.initializeData(), 1000);
    }

    filterNotes = e  => {
        let searchInput = e.target.value;
        this.setState(() => {
            return ({
                displayedNotes: this.props.notes.filter(note => note.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1)
            })
        });
    }

    initializeData = () => {
        this.setState({
            displayedNotes: this.props.notes
        })
    }

    render() {
        if (this.props.fetchingNotes){
            return (<div></div>)
        }
        return (
            <div className="home">
            <Input className="search-bar" type="text" onChange={this.filterNotes} placeholder="Search" />
            <h3>Your Notes:</h3>
                <div className="home-note-container">
                    {this.state.displayedNotes.map(note => {
                        return (
                            
                                <div className="note" key={note.id}>
                                    <Link to={`/notes/${note.id}`}>
                                        <Note id={note.id} title={note.title} content={note.content} />
                                    </Link>
                                </div>
                            
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Notes;