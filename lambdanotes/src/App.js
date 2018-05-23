import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';
import ContentArea from './components/contentarea.js';
import SideMenu from './components/sidemenu.js';
import { connect } from 'react-redux';
import { fetcher, startCreate } from './actions';

class App extends Component {



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

  componentDidMount() {
    this.props.fetcher("https://killer-notes.herokuapp.com/note/get/all");
  }

  render() {
    return (
      <div className="App">
          <Row>
            <Col className="left-side" xs="3">
              <SideMenu listMethod={this.tempList.bind(this)} createMethod={this.props.startCreate} />
            </Col>
            <Col className="content" xs="9">
              <ContentArea
                viewMethod={this.tempView.bind(this)}
                appState={this.props.appState}
                notes={this.props.notes}
                viewId={this.props.viewId}
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

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    appState: state.appState,
    viewId: state.viewId,
    newId: state.newId
  }
}

export default connect(mapStateToProps, { fetcher, startCreate })(App);
