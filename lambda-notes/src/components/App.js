import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from './Notes';
import NoteForm from './NoteForm';
import SideBar from './SideBar';
import { getNotes } from '../actions';
import {withRouter, Route} from 'react-router-dom';

class App extends Component {
    componentDidMount() {
      this.props.getNotes();
      console.log('app-props', this.props.notes);
    }
  
    render() {
      return (
        <div className="App">
  
          <SideBar />

           <Notes notes={this.props.notes}/>

          {/* <Route
            exact path = "/"
            render = {props => (
            <Notes 
            {...props}
            notes={this.props.notes} 
            />
            )}/> */}
  
           <Route
            path = "/newnote"
            render = {props => (
            <NoteForm {...props}
            notes={this.props.notes} />
            )}/>
  
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    const { noteReducer } = state;
    return {
      notes: noteReducer.notes,
      gettingNotes: noteReducer.gettingNotes,
      error: noteReducer.error
    };
  };
  
  export default withRouter(connect(mapStateToProps, { getNotes })(App));