import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, H1, H2, H3 } from './components/StyledComponents';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';
import { fetchNotes } from './actions';
import ListView from './components/ListView/ListView';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewNote from './components/CreateNote/NewNote';

class App extends Component {
  
  componentDidMount(){
    this.props.fetchNotes()
  }
  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <SideBar />
        </div>
        <Route exact path="/"
          render={props => <ListView {...this.props}/>}/>
        <Route path="/newNote" render={NewNote} />
      </div>
    );
  }
}

function Home (){
  return (
    <div>
      <H1>Hello</H1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  }
}

export default connect(mapStateToProps, { fetchNotes })(App);
