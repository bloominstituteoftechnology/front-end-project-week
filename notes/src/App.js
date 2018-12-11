import React, { Component } from 'react';
import {connect} from "react-redux";
import './index.css';
import {getNotes} from "./Actions";
import Form from "./Form";
import NoteList from "./NoteList";
import SideBar from "./SideBar";
import {Route} from "react-router";

class App extends Component {


  componentDidMount(){
    this.props.getNotes()
  }

  render() {
    return (
      <div className="App">
      <SideBar />
          <Route exact path="/" render={props => (
            
              <div className="main" >
                <header className="header">Your Notes:</header>
                <NoteList notes={this.props.notes} {...props}/>
              </div>
          
          )}/>

          <Route exact path="/addnote" render={props => (
              <Form {...props}/>
            )}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {notes:state.notes}
}

export default connect(mapStateToProps,{getNotes})(App);
