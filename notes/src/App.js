import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route, Link , Switch} from 'react-router-dom';
import * as actions from './actions'
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import SingleNote from './components/SingleNote';
 import TopNav from './components/TopNav';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import lambdanotes  from './lambdanotes.png';



class App extends Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  }

  
  render() {
    return (
      <div className="App">
      <Navbar>
      <NavbarBrand>
            {/* Lambda<br/>Notes */}
            <img src={lambdanotes} alt={"logo"}/> 
            </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/"><i className="fas fa-book-open"></i> &nbsp;View Notes </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/note/add"><i className="fas fa-plus"></i> &nbsp;New Note </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      <Nav className='nav-bar'/>
      <Route exact path="/" render={props => (
        <Notes {...props} notes={this.props.notes} fetch={this.props.fetch} fetching={this.props.fetching} />
      )} />
      <Switch>
      <Route path="/note/add" render={props => (
        <NoteForm {...props} addNote={this.props.addNote} />
      )} />
      <Route path="/notes/:id" render={props => (
          <SingleNote {...props} note={this.props.note} />
        )}  />
        </Switch>

      </div>
    );
  }
}

// i think correcting the typo fixed my error!!!!!
const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    notes: state.notes,
    error: state.error,
    fetchingNote: state.fetchingNote,
    noteFetched: state.noteFetched,
    note: state.note,
    updating: state.updating,
    updated: state.updated,
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));