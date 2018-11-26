import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './SideBar';
import CreateNote from './CreateNote';
import FullNote from './FullNote';
import Notes from './Notes';
import UpdateNote from './UpdateNote';
import SpeechNote from './SpeechNote';

class App extends Component {

  exportCsv = () => {
    let CSVData = [['Note', 'id', 'Title', 'Content']];
    this.props.notes.forEach((note, index) => CSVData.push([index+1, note._id, note.title, note.textBody]));
    CSVData = CSVData.map(item => item.join(','));
    CSVData = CSVData.join('%0A')
    let a = document.createElement('a');
    a.href = 'data:atachment/csv' + CSVData;
    a.target = "_Blank";
    a.download = 'Notes.csv';
    document.body.appendChild(a);
    a.click();
  }

  render() {
    return (
      <div className="App">
      <SideBar export={this.exportCsv} />
      <Route exact path="/" component={Notes} />
      <Route path="/create" component={CreateNote} />
      <Route exact path="/notes" component={Notes} />
      <Route path="/notes/:id" render={ props => <FullNote {...props} /> } />
      <Route path="/edit/:id" render={ props => <UpdateNote {...props} /> } />
      <Route path="/speech" component={SpeechNote} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default withRouter(connect(mapStateToProps)(App));
