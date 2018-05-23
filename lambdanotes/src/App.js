import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';
import ContentArea from './components/contentarea.js';
import SideMenu from './components/sidemenu.js';
import { connect } from 'react-redux';
import { fetcher, startCreate, goToList, viewNote, startDelete, saveNew, reallyDelete, cancelDelete, editNote, saveEdit, alphabetizeNotes } from './actions';

class App extends Component {


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
                editMethod={this.props.editNote}
                saveEditMethod={this.props.saveEdit}
                saveNewMethod={this.props.saveNew}
                fetcher={this.props.fetcher}
                alphabetizeNotes={this.props.alphabetizeNotes} />
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

export default connect(mapStateToProps, { fetcher, startCreate, goToList, viewNote, startDelete, saveNew, reallyDelete, cancelDelete, editNote, saveEdit, alphabetizeNotes })(App);
