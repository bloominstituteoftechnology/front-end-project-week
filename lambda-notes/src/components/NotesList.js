import React from 'react';
import NotePreview from './NotePreview';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class NotesList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentNotes: this.props.notes,
    }
  }

    handleInput = event => {
      this.searchNotes(event.target.value.toLowerCase());
    }

  searchNotes = search => {
    let newCurrent = this.props.notes.filter(function (el) {
      return (el.title.toLowerCase().includes(search) || el.textBody.toLowerCase().includes(search))
    });
    this.setState({
      currentNotes: newCurrent,
    })
  }

  render(){
    return (
      <div className='notes-list'>
      <SearchBar handleInput={this.handleInput} search={this.searchNotes} input={this.state.searchInput}/>
      <h3>Your Notes:</h3>
        {this.state.currentNotes.map(note => {
          return (
            <Link to={`/${note._id}`} key={note._id}>
              <NotePreview note={note} />
            </Link>)
        })}
      </div>
    )
  }

}

export default NotesList;
