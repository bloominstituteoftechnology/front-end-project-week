import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Notes from './components/Notes';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    console.log('app props', this.props);
    return (
      <div className="App">
        <h1 style={{display: 'inline'}}>Lambda Notes</h1>
        <Route path="/" component={NavBar} />
        {/*create Routes here*/}
        <Route
          path="/notes"
          render={props => <Notes {...props} notes={this.props.notes} />}
        />
        <Route path="/note/:id" component={Note} />
        <Route path="/form" component={NoteForm} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(App);
