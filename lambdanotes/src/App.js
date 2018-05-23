import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';
import ContentArea from './components/contentarea.js';
import SideMenu from './components/sidemenu.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [{
        title: "Note Title",
        content: "Placeholder note content",
        id: 0
      },
      {
        title: "Note Title2",
        content: "Placeholder note content2",
        id: 1
      },
      {
        title: "Note Title3",
        content: "Placeholder note content3 ssdf sdf sdf sdf sdf fhgd asdwer g rth fdbvgsd fgtreg srasdv fghetrg weragf asdf erg a sdf af awerf asf fgserg sdcv sdgfsea egr asdfg saertg aZDf aer gsdfg aergf adfg a ffg arg asdfg aerg asdfg aefaf asdf asdf adf asdfawefasdf sdf ",
        id: 2
      },
      {
        title: "Note Title4",
        content: "Placeholder note content4",
        id: 3
      },
    ],
      appState: "list",
      viewId: null,
      newId: 4
    };
  }

  tempCreate() {
    this.setState({appState: "create", viewId: null});
  }

  tempList() {
    this.setState({appState: "list", viewId: null});
  }

  tempView(id) {
    this.setState({appState: "view", viewId: id});
  }

  tempDelete() {
    this.setState({appState: "deleting"});
  }

  tempReallyDelete() {
    this.setState({appState: "list", notes: this.state.notes.filter((note) => note.id !== this.state.viewId), viewId: null})
  }

  tempCancelDelete() {
    this.setState({appState: "view"});
  }

  tempEdit() {
    this.setState({appState: "edit"});
  }

  tempSaveNew(newNote) {
    let processedNote = Object.assign({}, newNote, {id: this.state.newId});
    let newNotes = this.state.notes.slice(0);
    newNotes.push(processedNote);
    this.setState({appState: "list", notes: newNotes, newId: this.state.newId + 1});
  }

  tempSaveEdit(newNote) {
    let processedNote = Object.assign({}, newNote, {id: this.state.viewId});
    let newNotes = this.state.notes.filter((note) => note.id !== processedNote.id);
    newNotes.push(processedNote);
    this.setState({appState: "view", notes: newNotes});
  }

  render() {
    return (
      <div className="App">
          <Row>
            <Col className="left-side" xs="3">
              <SideMenu listMethod={this.tempList.bind(this)} createMethod={this.tempCreate.bind(this)} />
            </Col>
            <Col className="content" xs="9">
              <ContentArea
                viewMethod={this.tempView.bind(this)}
                appState={this.state.appState}
                notes={this.state.notes}
                viewId={this.state.viewId}
                deleteMethod={this.tempDelete.bind(this)}
                reallyDeleteMethod={this.tempReallyDelete.bind(this)}
                cancelDeleteMethod={this.tempCancelDelete.bind(this)}
                editMethod={this.tempEdit.bind(this)}
                saveEditMethod={this.tempSaveEdit.bind(this)}
                saveNewMethod={this.tempSaveNew.bind(this)} />
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;
