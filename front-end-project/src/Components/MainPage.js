import React from 'react';
import NoteList from './MainPage/NoteList';
import NoteView from './MainPage/NoteView';
import EditNote from './MainPage/EditNote';
import CreateNote from './MainPage/CreateNote';
import SearchBar from './MainPage/SearchBar';
import { arrayMove } from 'react-sortable-hoc';
import './MainPage.css';
import './DeleteBox.css';

class MainPage extends React.Component {
  state = {
    currentNote: {},
    notes: [],
    deleting: false,
    searchValue: '',

  };

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  render() {
    return (
      <div>
        <div style={this.state.deleting ? { visibility: 'visible' } : { visibility: 'hidden' } }>
          <div className="deleteBox__bigBox">
            <div className="bigBox__whiteBox">
              <div className="whiteBox__container">
                <div className="container__top">Are you sure you want to delete this?</div>
                <div className="container__bottom">
                  <button className="container__button-delete" onClick={() => this.deleteCurrentNote()}>Delete</button>
                  <button className="container__button-cancel" onClick={() => this.toggleDeleting()}>No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainPage__topRow" style={this.props.caseValue === 'noteView' ? { visibility: 'visible' } : { visibility: 'hidden' } }>
          <div className="topRow__button-box">
            <div className="topRow__button" onClick={() => this.props.changeSwitch('Edit Note:', 'editNote')}>edit</div>
            <div className="topRow__button" onClick={() => this.toggleDeleting()}>delete</div>
          </div>
        </div>
        <div className="mainPage__middleRow">
          <div className="mainPage__middleRow-title">{this.props.title}</div>
          <div style={this.props.caseValue === 'noteList' && this.state.notes.length > 1 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
          </div>
        </div>
        <div className="mainPage__bottomRow">
          {this.renderSwitch(this.props.caseValue)}
        </div>
      </div>
    );
  }

  renderSwitch = (param) => {
    switch(param) {
      case 'noteList':
        return <div className="mainPage__noteList">
          <NoteList notesArr={this.state.notes} changeSwitch={this.props.changeSwitch} viewNote={this.changeCurrentNote}
           filterValue={this.state.searchValue} onSortEnd={this.onSortEnd}
           distance={10} axis={'xy'}
          />
        </div>;
      case 'noteView':
        return <div className="mainPage__noteView">
          <NoteView currentNote={this.state.currentNote} />
        </div>;
      case 'editNote': 
        return <div className="mainPage__noteView">
          <EditNote currentNote={this.state.currentNote} submitModifiedNote={this.replaceCurrentNoteInArr} changeSwitch={this.props.changeSwitch} />
        </div>;
      case 'createNote':
        return <CreateNote addNote={this.addNote} />;
      default:
        return <div className="mainPage__welcome">Welcome to Lambda Notes</div>;
    }
  };

  addNote = (noteObj) => {
    this.setState({ ...this.state, notes: this.state.notes.concat([noteObj]) });
  };

  changeCurrentNote = (nextNote) => {
    this.setState({...this.state, currentNote: nextNote});
  };

  replaceCurrentNoteInArr = (newNote) => {
    this.setState({...this.state, currentNote: newNote, notes: this.state.notes.map(note => { if (note.id === newNote.id) {return newNote} else {return note} } )
    });
  }

  toggleDeleting = () => {
    this.setState({...this.state, deleting: !this.state.deleting});
  };

  deleteCurrentNote = () => {
    this.setState({ notes: this.state.notes.filter(note => note.id !== this.state.currentNote.id), currentNote: {}, deleting: false });
    this.props.changeSwitch('Your Notes:','noteList');
  };

  updateSearchValue = (str) => {
    this.setState({...this.state, searchValue: str})
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({ ...this.state,
      notes: arrayMove(this.state.notes, oldIndex, newIndex),
    });
  };

}

export default MainPage;