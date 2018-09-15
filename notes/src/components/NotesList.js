import React from 'react';
import '../App.css';
import NotesContainer from './NotesContainer';
import {NavLink} from 'react-router-dom';
import Authenticate from './Authentication/Authenticate';
import axios from 'axios';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      searchTerm: '',
      searchResults: [],
      alphaSort: false
    }
  }

  componentDidMount() {
    axios
      .get(`https://nameless-harbor-91626.herokuapp.com/users/${localStorage.getItem('userID')}/notes`)
      .then(response => {
        console.log('NL HERE NL', response.data);
        this.setState({notes: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

/*CLick function that enables the user to logout of the page*/
  handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload();
  }

/*Generic change handler that updates component state from an input field*/
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

/*Function allows for note searching functionality*/
  handleSearch = event => {
    event.preventDefault();
    let searchResults = this.state.notes.slice();
    if (this.state.searchTerm.length === 0) {
      searchResults = this.state.notes.slice();
      return searchResults;
    } else {
    searchResults = searchResults.filter(note => {
      if (note.textBody.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || note.title.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())) {
        return note;
      }

    });
  }
    this.setState({searchResults: searchResults})
  }

/*Toggles the sorting of notes Alphabetically by title*/
  toggleAlphaSort = () => {
    this.setState({alphaSort: !this.state.alphaSort})
  }

/*Working on this function, will enable export to a CSV file*/
  exportCSV = dataArray => {
    let str = 'data:text/csv;charset=utf-8,';

    for (let i = 0; i<dataArray.length; i++) {
      var line = '';
      for (let index in dataArray[i]) {
        if (line !== '') line += ',';

        line += dataArray[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  }
  render() {
    console.log('NoteList location', this.props.location);
    let returnedNotes;
    console.log('PROP NOTES', this.state.notes)
    returnedNotes = (this.state.searchResults.length > 0 && this.state.searchTerm.length > 0) ? this.state.searchResults: this.state.notes;
    let sortedNotes = returnedNotes.slice();
    let encodeUri = encodeURI(this.exportCSV(returnedNotes));
    if (this.state.alphaSort) {
    returnedNotes = sortedNotes.sort((a,b) => {
      let firstName = a.title.toUpperCase();
      let secondName = b.title.toUpperCase();
      if (firstName < secondName) {
        return -1;
      }
      if (firstName > secondName) {
        return 1;
      }

      return 0
    })
  }
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
        <form className="sortCheck" onChange={this.handleSearch}>
          <input type="search" name="searchTerm" placeholder="Search" onChange={this.handleChange} id="searchBar"/>
        </form>
        <form className="sortCheck"><input type="checkbox" className="mx-1" name="Sort Alphabetically" onClick={this.toggleAlphaSort} />Sort Alphabetically <br/></form>
        <NotesContainer notes={returnedNotes} />
        <a href={encodeUri} download="my_data.csv">Download Notes to CSV</a>
      </div>
    </div>
  )
  }
}

export default Authenticate(NotesList);
