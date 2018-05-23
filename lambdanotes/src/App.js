import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';
import ContentArea from './components/contentarea.js';
import SideMenu from './components/sidemenu.js';
import { connect } from 'react-redux';
import { fetcher, startCreate, goToList, viewNote, startDelete, saveNew, reallyDelete, cancelDelete } from './actions';

class App extends Component {










  tempCancelDelete() {
    this.setState({appState: "view"});
  }

  tempEdit() {
    this.setState({appState: "edit"});
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
              <SideMenu listMethod={this.props.goToList} createMethod={this.props.startCreate} />
            </Col>
            <Col className="content" xs="9">
              <ContentArea
                viewMethod={this.props.viewNote}
                appState={this.props.appState}
                notes={this.props.notes}
                viewId={this.props.viewId}
                deleteMethod={this.props.startDelete}
                reallyDeleteMethod={this.props.reallyDelete}
                cancelDeleteMethod={this.props.cancelDelete}
                editMethod={this.tempEdit.bind(this)}
                saveEditMethod={this.tempSaveEdit.bind(this)}
                saveNewMethod={this.props.saveNew}
                fetcher={this.props.fetcher} />
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

export default connect(mapStateToProps, { fetcher, startCreate, goToList, viewNote, startDelete, saveNew, reallyDelete, cancelDelete })(App);
