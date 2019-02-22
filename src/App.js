import React from 'react';
import "./App.css";
import "./css/note.css"
import Login from './components/login/login';
import NoteList from './components/noteList';
import NoteView from './components/noteView';
import ListView from './components/listView';
import NoteCreate from './components/noteCreate';
import NoteEdit from './components/noteEdit';
import NoteDelete from './components/noteDelete';
import Nav from './components/nav';
import Modal from "react-modal";
import { getNotes } from './actions/notesActions';
import { viewNote } from './actions/notesActions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();

    /*****Set the initial state**** */
    this.state = {
      viewPage: "noteList",
      noteList: [],
      inputText: '',
      title: "",
      textBody: "",
      id: "",
      tags: "",
      modalIsOpen: false,
      saveList: [],
      listId: "",
      selectedNotes: [],
    };
  }


  componentDidMount() {
    Modal.setAppElement('#root');
    const pageType = "noteList";
    this.setState(() => ({ viewTrip: pageType }));
    /* if (localStorage.getItem('viewPage')) {
      let pageType = localStorage.viewPage

      this.setState(() => ({ viewPage: pageType }));
    } else {
      let pageType = 'noteList'
      this.setState(() => ({ viewPage: pageType }));
    } */
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  noteCreate = (e) => {
    e.preventDefault();
    const pageType = `noteCreate`
    this.setState({ viewPage: pageType });
  }

  login = (e) => {
    //const modalType = !false;
    let modalType = true;
    localStorage.setItem('modals', modalType)
    const pageType = 'login';
    //let _id = id;
    this.setState(() => ({ viewPage: pageType }))
  }
  noteDelete = id => {
    const modalType = !false;
    localStorage.setItem('modals', modalType)
    const pageType = 'noteDelete';
   // let _id = id;
    this.setState(() => ({ viewPage: pageType, id: id }))
  }

  noteEdit = id => {
    const pageType = "noteEdit"
    this.setState(() => ({ viewPage: pageType, id: id }));
  }

  noteList = (e) => {
    e.preventDefault();
    const pageType = "noteList"
    this.setState(() => ({ viewPage: pageType }));
  }

  noteList2 = () => {
    //e.preventDefault();
    const pageType = "noteList"
    this.setState(() => ({ viewPage: pageType }));
  }

  noteView = id => {
    const pageType = "noteView"
    //let _id = id;
    this.setState(() => ({ viewPage: pageType, id: id }));
  }

  listView = (selectedNote) => {
    selectedNote = JSON.stringify(selectedNote);
    localStorage.setItem("selectedNotes", selectedNote);
    //e.preventDefault();
    const pageType = "listView"
    this.setState(() => ({ viewPage: pageType, selectedNotes: selectedNote  }));
  }

  render() {
    switch (this.state.viewPage) {

      case 'login':
        return <div className="App">
          <div className="main-container">
            <div className="main-display">
              <Login noteList={this.noteList} registerUser={this.props.registerUser} />
            </div>
          </div>
        </div>;
      case 'noteCreate':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} listView={this.listView} saveListName={this.props.saveListName} noteCreate={this.noteCreate} login={this.login} />
            <div className="main-display">
              <NoteCreate changeHandler={this.changeHandler} saveNote={this.saveNote} noteList={this.noteList} />
            </div>
          </div>
        </div>;
      case 'noteDelete':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} listView={this.listView} saveListName={this.props.saveListName} noteCreate={this.noteCreate} noteView={this.noteView} login={this.login} />
            <div className="main-display">
              <NoteDelete id={this.state.id} noteList={this.noteList} />
            </div>
          </div>
        </div>;
      case 'noteEdit':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} listView={this.listView} saveListName={this.props.saveListName} noteCreate={this.noteCreate} noteEdit={this.noteEdit} noteView={this.noteView} login={this.login} />
            <div className="main-display">
              <NoteEdit changeHandler={this.changeHandler} tags={this.tags} id={this.state.id} noteList={this.noteList} />
            </div>
          </div>
        </div>;
      case 'noteList':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} listView={this.listView} saveListName={this.props.saveListName} noteCreate={this.noteCreate} noteView={this.noteView} login={this.login} />
            <div className="main-display">
              <NoteList noteView={this.noteView} notes={this.state.notes} />
            </div>
          </div>
        </div>;
      case 'noteView':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} listView={this.listView} saveListName={this.props.saveListName} noteCreate={this.noteCreate} noteView={this.noteView} login={this.login} />
            <div className="main-display">
              <NoteView id={this.state.id} noteList2={this.noteList2} notes={this.notes} selected={this.props.noteSelected} noteEdit={this.noteEdit} noteDelete={this.noteDelete} />
            </div>
          </div>
        </div>;
      case 'listView':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} listView={this.listView} viewNote={this.props.viewNote} saveListName={this.props.saveListName} noteCreate={this.noteCreate} noteView={this.noteView} login={this.login} />
            <div className="main-display">
              <ListView id={this.state.listId} lists={this.lists} selectedNotes={this.state.selectedNotes}  notes={this.state.notes} />
            </div>
          </div>
        </div>;
    };
  }
}
const mapStateToProps = state => {
  const { notesReducer } = state;
  const { listsReducer } = state;
  return {
    notes: notesReducer.notes,
    lists: listsReducer.lists,
    error: notesReducer.error,
    gettingNotes: notesReducer.gettingNotes
  };
};

export default connect(mapStateToProps, { getNotes, viewNote })(App);

