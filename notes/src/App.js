import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, viewNotes } from './actions';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <Sidebar addNote={this.props.addNote}
                 viewNotes={this.props.viewNotes}
                 notes={this.props.notes} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { addNote, viewNotes })(App);
