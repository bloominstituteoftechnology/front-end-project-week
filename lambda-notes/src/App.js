import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, H1, H2, H3 } from './components/StyledComponents';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';
import { fetchNotes, addNewNote, fetchNote, deleteNote, updateNotes, search, sort } from './actions';
import ListView from './components/ListView/ListView';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import NewNote from './components/CreateNote/NewNote';
import NoteView from './components/NoteView';
import Authenticate from './Authentication ';
import { convertArrToCSV } from './util/csvUtil';
import { testNotes } from './data';

class App extends Component {
  state = {
    listNotes: [],
  }

  searchInputChange = event => {
    const sString = event.target.value
    this.props.search(sString)
  }

  searchNotes = (notes, sString) => {
    if (sString === '') 
      return notes
    else 
      return notes.filter(note => note.title === sString)
      
  }

  componentDidMount(){
    this.props.fetchNotes()
  }

  onSortClick = sortType => {
    this.props.sort(sortType)
  }

  
  render() {
      let notes = this.props.notes
      if (this.props.searching)
        notes = this.props.searchList.slice()
      
      return (
        <div className="App">
          <div className="sideBar">
            <SideBar onSearchChange={this.searchInputChange}/>
          </div>
          {this.props.notes ? 
            <div><Route exact path="/"
              render={props => <ListView notes={notes} sort={this.onSortClick}{...props}/>}/>
            <Route path="/newNote" 
              render={props => <NewNote {...this.props} {...props}/>} />
            <Route exact path="/notes/:id" 
              render={props => <NoteView {...props} {...this.props} /> }/>
            <Route path="/notes/update/:id" 
              render={props => <NoteView {...props} {...this.props} /> }/></div>
              : <H1>Loading</H1>
          }
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
    fetchingNotes: state.fetchingNotes,
    searching: state.searching,
    searchList: state.searchList
  }
}

export default Authenticate(withRouter(connect(mapStateToProps, { fetchNotes, addNewNote, fetchNote, deleteNote, updateNotes, search, sort })(App)))
