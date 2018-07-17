import React from 'react';
import '../App.css';
import NotesContainer from './NotesContainer';
import {NavLink} from 'react-router-dom';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: []
    }
  }

  handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSearch = event => {
    event.preventDefault();
    let searchResults = this.props.notes.slice();
    searchResults = searchResults.filter(note => {
      if (note.textBody.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || note.title.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())) {
        return note;
      }
    });
    this.setState({searchResults: searchResults})
  }
  render() {
    let returnedNotes;
    returnedNotes = (this.state.searchResults.length > 0) ? this.state.searchResults: this.props.notes;
    return (
    <div className="note-list">
      <div className="list-sidebar">
        <h1>Lambda Notes</h1>
        <NavLink to="/"><button className="sidebar-button">View Your Notes</button></NavLink>
        <NavLink to="/create"><button className="sidebar-button">+ Create New Note</button></NavLink>
        <button onClick={this.handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="right-bar">
        <h3 className="note-list-header">Your Notes: </h3>
        <form onChange={this.handleSearch}>
          <input type="search" name="searchTerm" placeholder="Search" onChange={this.handleChange}/>
        </form>
        <NotesContainer notes={returnedNotes} />
      </div>
    </div>
  )
  }
}

export default NotesList;
