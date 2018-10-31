import React from 'react';
import NotePreview from './NotePreview';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';

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

  sortByTitle = () => {
    let sortedTitle = this.props.notes.slice().sort(function (a, b) {
      let titleA = a.title.toLowerCase(),
          titleB = b.title.toLowerCase()
        if (titleA < titleB)
        return -1
        if (titleA > titleB)
        return 1
      return 0;
    });
    this.setState({
      currentNotes: sortedTitle, 
    })
  }

  render(){
    return (
      <div className='notes-list'>
      <TopBar handleInput={this.handleInput} search={this.searchNotes} sortByTitle={this.sortByTitle}/>
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
