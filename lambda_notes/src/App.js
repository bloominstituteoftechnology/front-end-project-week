import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from './actions';

import NoteList from './components/NoteList';
import SideBar from './components/SideBar';
import SingleNote from './components/SingleNote';

const APP = styled.div`
  display: flex;
  width: 888px;
  margin: auto;
  border: 1px solid #a6a6a6;
  font-size: 1.6rem;
`

class App extends Component {

  componentDidMount () {
    this.props.fetchNotes()
  }

  render() {
    return (
      <Router>
        <APP className="App">
          <SideBar />
          <Route exact path='/' render={props => <NoteList {...props} notes={this.props.notes} />} />
          <Route path='/notes/:id' component={SingleNote}/>
        </APP>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, {fetchNotes})(App);
