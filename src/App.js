import React from 'react';
import "./App.css";
import "./css/note.css"
import NoteList from './components/noteList';
import NoteView from './components/noteView';
import NoteCreate from './components/noteCreate';
import NoteEdit from './components/noteEdit';
import NoteDelete from './components/noteDelete';
import Nav from './components/nav';
import Modal from "react-modal";
import { getNotes } from './actions';
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
    localStorage.setItem('viewPage', "noteCreate");
    let pageType = `noteCreate`
    this.setState({ viewPage: pageType });
  }

  noteDelete = id => {
    // console.log("in the note delete, app.js")
    const modalType = !false;
    //let modalType = true;
    localStorage.setItem('modals', modalType)
    localStorage.setItem('viewPage', "noteDelete");

    let pageType = 'noteDelete';
    let _id = id;
    this.setState(() => ({ viewPage: pageType, id: id }))
  }

  noteEdit = id => {
    localStorage.setItem('viewPage', "noteEdit");
    let pageType = "noteEdit"
    this.setState(() => ({ viewPage: pageType, id: id }));
  }

  noteList = (e) => {
    e.preventDefault();
    localStorage.setItem('viewPage', "noteList");
    let pageType = "noteList"
    this.setState(() => ({ viewPage: pageType }));
  }

  noteView = id => {
    localStorage.setItem('viewPage', "noteView");
    let pageType = "noteView"
    let _id = id;
    //console.log("in noteView app.js")
    this.setState(() => ({ viewPage: pageType, id: id }));
  }


  render() {

    /* let pageType = localStorage.getItem('viewPage'); */
    switch (this.state.viewPage) {
      case 'noteCreate':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} noteCreate={this.noteCreate} />
            <div className="main-display">
              <NoteCreate changeHandler={this.changeHandler} saveNote={this.saveNote} />
            </div>
          </div>
        </div>;

      case 'noteDelete':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} noteCreate={this.noteCreate} noteView={this.noteView} />
            <div className="main-display">
              <NoteDelete id={this.state.id} noteList={this.noteList} />
            </div>
          </div>
        </div>;

      case 'noteEdit':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} noteCreate={this.noteCreate} noteEdit={this.noteEdit} noteView={this.noteView} />
            <div className="main-display">
              <NoteEdit changeHandler={this.changeHandler} tags={this.tags} id={this.state.id} />
            </div>
          </div>
        </div>;

      case 'noteList':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} noteCreate={this.noteCreate} noteView={this.noteView} />
            <div className="main-display">
              <NoteList noteView={this.noteView} notes={this.state.notes} />
            </div>
          </div>
        </div>;

      case 'noteView':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} noteCreate={this.noteCreate} noteView={this.noteView} />
            <div className="main-display">
              <NoteView id={this.state.id} notes={this.notes} selected={this.props.noteSelected} noteEdit={this.noteEdit} noteDelete={this.noteDelete} />
            </div>
          </div>
        </div>;
    };
  }
}
const mapStateToProps = state => {
  const { notesReducer } = state;
  return {
    notes: notesReducer.notes,
    error: notesReducer.error,
    gettingNotes: notesReducer.gettingNotes
  };
};

export default connect(mapStateToProps, { getNotes })(App);

