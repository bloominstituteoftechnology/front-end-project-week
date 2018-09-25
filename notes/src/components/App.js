import React, { Component } from 'react';
import './App.css';

import { Route, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'

import NotesList from './NotesList'
import NewNote from './NewNote'
import EditNote from './EditNote'
// import Header from './Header';



class App extends Component {

  componentDidMount() {
    this.props.fetchNotes()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
          <Link to='/'> Home </Link>
          <Link to='/note-list'> Note List</Link>
          <Link to='/new-note'> New Note </Link>
          <Link to='/smurf-update'> Smurf Update </Link>
          <Link to='/edit/:id'> Edit </Link>
          {/* <Link to='/note-list/5ba903d1d7042d0014318b47'> Two Guys </Link>
          <Link to='/note-list/5ba9313ed7042d0014318b4d'> Three Guys </Link> */}
        </header>
        <section className='main-section'>
          <Route exact path='/note-list' render={props =>
            <React.Fragment>
              <h2> Your Notes: </h2>
              <NotesList
                {...props}
                noteList={this.props.notes}
               />
             </React.Fragment>
           } />
           <Route path='/note-list/:id' render={props =>
             <React.Fragment>
               <p>edit</p>
               <p>delete</p>
             <NotesList
               {...props}
               noteList={this.props.notes}
              />
              </React.Fragment>
            } />
           {/* <Route path='/note-list/:id' component={Note} /> */}
           <Route path='/new-note' render={props =>
             <NewNote
               {...props}
             />
           } />
           <Route path='/edit-note/:id' render={props =>
             <EditNote
               {...props}
               noteList={this.props.notes}
             />
           } />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    notes: state.notes,
  }
}

export default withRouter(connect(mapStateToProps, { fetchNotes })(App))
