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

  componentDidMount() {
    if (this.props.titleAsc) {
      this.sortByTitleAsc();
    }
    if (this.props.titleDes) {
      this.sortByTitleDes();
    }
    if (this.props.lengthAsc) {
      this.sortByLengthAsc();
    }
    if (this.props.lengthDes) {
      this.sortByLengthDes();
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

  sortByTitleAsc = () => {
    let sortedTitle = this.props.notes.slice().sort(function (a, b) {
      return a.title.localeCompare(b.title, 'en', {'numeric': true, 'sensitivity': 'base'});
    });
    this.setState({
      currentNotes: sortedTitle,
    });
    this.props.sortHelper('title', 'asc')
  }

  sortByTitleDes = () => {
    let sortedTitleDes = this.props.notes.slice().sort(function(a, b) {
    return b.title.localeCompare(a.title, 'en', {'numeric': true, 'sensitivity': 'base'});
  });
    this.setState({
      currentNotes: sortedTitleDes,
    });
    this.props.sortHelper('title', 'des');
  }

  sortByLengthAsc = () => {
    let sortedLength = this.props.notes.slice().sort(function(a, b) {
      return a.textBody.length - b.textBody.length;
    });
    this.setState({
      currentNotes: sortedLength,
    });
    this.props.sortHelper('length', 'asc');
  }

  sortByLengthDes = () => {
    let sortedLengthDes = this.props.notes.slice().sort(function(a, b) {
      return b.textBody.length - a.textBody.length;
    });
    this.setState({
      currentNotes: sortedLengthDes,
    });
    this.props.sortHelper('length', 'des');
  }

  render(){


    return (
      <div className='notes-list'>
      <TopBar handleInput={this.handleInput} search={this.searchNotes} sortByTitleAsc={this.sortByTitleAsc} sortByTitleDes={this.sortByTitleDes}
      sortByLengthAsc={this.sortByLengthAsc}
      sortByLengthDes={this.sortByLengthDes}/>
      <h3>Your Notes:</h3>
        {this.state.currentNotes.map(note => {
          return (
            <Link to={`/${note.id}`} key={note.id}>
              <NotePreview note={note} />
            </Link>)
        })}

      </div>
    )
  }

}

export default NotesList;
