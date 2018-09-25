import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { YourNotes, Sidebar, Forms, ViewNote } from '../Container/';
import { Header } from '../Presentational/';
import { collectNotes, assembleNote, reviseNote, expungeNote } from '../../Store/Actions';
import { Container, NotesMain } from '../Styles';

class App extends Component {

  componentDidMount() {
    this.props.collectNotes();
    }

  render() {

    return (
      <div className="App">
        <Container>
        <Sidebar />

       <NotesMain>
          <Route path="/forms/:form" render= { props => (
            <Forms {...props} 
            assembleNote={this.props.assembleNote} 
            reviseNote={this.props.reviseNote}
            />
          )}/>

          <Route path="/notes" render= { props => (
            <YourNotes 
            {...props} 
            notes={this.props.notes} 
            collectNotes={this.props.collectNotes} 
            />
          )}/>

          <Route path="/notes/note/:id" render= {
          props => (
            <ViewNote 
            {...props} 
            notes={this.props.notes} 
            collectNotes={this.props.collectNotes} 
            expungeNote={this.props.expungeNote} 
            />
          )}/>
        </NotesMain>
        </Container>

      </div>
    );
  }
}

const connectStateToProps = state => ({
  notes: state.notes
})

export default withRouter(connect(connectStateToProps, { collectNotes, assembleNote, reviseNote, expungeNote })(App));
