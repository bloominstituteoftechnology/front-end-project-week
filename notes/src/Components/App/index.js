import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import { YourNotes, Sidebar, Forms } from '../Container/';
import { Header } from '../Presentational/';
import { collectNotes, assembleNote, expungeNote } from '../../Store/Actions';

class App extends Component {


  render() {

    console.log(this.props);

    return (
      <div className="App">
        <Header />
        <Sidebar />

        <main className="notes-main">
          <Route exact path="/forms/:form" render={ props => (
            <Forms {...props} 
            assembleNote={this.props.assembleNote}
            />
          )}/>

          <Route path="/notes" render={ props => (
            <YourNotes 
            {...props} 
            notes={this.props.notes} 
            collectNotes={this.props.collectNotes} 
            expungeNote={this.props.expungeNote}
            />
          )}/>
        </main>

      </div>
    );
  }
}

const connectStateToProps = state => ({
  notes: state.notes
})

export default withRouter(connect(connectStateToProps, { collectNotes, assembleNote, expungeNote })(App));
