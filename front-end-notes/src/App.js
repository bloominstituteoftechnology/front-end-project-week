import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getNotes, updateForm, addNote, deleteNote } from "./Actions";
//import styled from "styled-components";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
// import CreateNewNote from './View/CreateNewNote';
// import EditView from './View/EditView';
 import NoteView from './View/NoteView';
import ListView from "./View/ListView";
import NavBar from "./Components/NavBar";
import CreateNewView from './View/CreateNewView';

class App extends Component {


  componentDidMount() {

    this.props.getNotes();
  }

  // componentDidUpdate(previousProps) {
  //   if (this.props.notes.length !== previousProps.notes.length)

  //   this.props.getNotes();
  // }
   
 


  render() {
    // Jonathan's tip: might want to put all styled comps inside a file and import from there

    
    if (this.props.fetchingNotes) {
      return <h2>Hold your horses, we are loading.</h2>;
    }
    if (this.props.error) {
      return <h1>WHOA BIG EXPLOSION THINGY THERE BE A ERROR MATEY!</h1>;
    }

    return (
      <div className="Page-Container">
        <NavBar />
        <div className="Main-View">
          <div className="Note-Container">
            <Route
              exact path="/notes" 
              render={props => <ListView {...props} notes={this.props.notes} />}
            />
            <Route exact path="/createNote" render={props => <CreateNewView {...props}  notes={this.props.notes}  />}/>
            <Route exact path="/notes/:_id" render={props => <NoteView {...props} notes={this.props.notes} deleteNote={this.props.deleteNote} updateForm={this.props.updateForm}/>}/>
          </div>
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notes: state.notes,
  fetchingNotes: state.fetchingNotes,
  pleasePopulate: state.pleasePopulate
});

// i wonder, if we have to use withRouter. let's try.
export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, updateForm, addNote, deleteNote }
  )(App)
);
