import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Switch, Route, withRouter} from 'react-router-dom';
import Authenticate from './components/Authenticate';
import Register from './components/Register.js';
import Login from './components/Login.js';
import SearchBar from './components/SearchBar';
import ListView from './components/ListView';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import EditNote from './components/EditNote';
import FilteredNotes from './components/FilteredNotes';
import {fetchNotes, addNote, updateNote} from './actions/actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      textBody: '',
      searchTitle: [],
      searchTextBody: [],
      filteredResults: [],
    }
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleChangeEdit = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  reset = () => {
    this.setState({filteredResults: []});
  }
  filterByTitle = e => {
      e.preventDefault();
      let result = this.state.searchTitle;
      if (result.length === 0){
        return alert("Note(s) not found");
      };
      let filtered = this.props.notes.filter(note => 
                    note.title.toLowerCase().includes(result));
      this.setState({
        searchTitle: [],
        filteredResults: filtered
      });
      if(this.state.filteredResults.length === 0){
        return null;
      }
      window.location.reload();
  }
  filterByTextBody = e => {
    e.preventDefault();
    let result = this.state.searchTextBody;
    if (result.length === 0){
      return alert("Note(s) not found");
    };
    let filtered = this.props.notes.filter(note => 
                  note.textBody.toLowerCase().includes(result));
    this.setState({
      searchTextBody: [],
      filteredResults: filtered
    });
    if(this.state.filteredResults.length === 0){
      return null;
    }
    window.location.reload();
  }
  addNote = e => {
    e.preventDefault();
    this.props.addNote(this.state.title, this.state.textBody);
    this.setState({title:'', textBody:'',});
    window.location.reload();
    window.location.href="/note/all";
  }
  updateNote = e => {
    e.preventDefault();
    this.props.updateNote(this.state.title,this.state.textBody, e.target.id);
    this.setState({title:'', textBody:'',});
    window.location.reload();
    window.location.href="/note/all";
  }
  componentDidMount(){
    this.props.fetchNotes();
  }
  render(){
    return (
        <div className='App'>
          {/* ROUTES */}
          <Route path='/note' render={(props) => <SideBar {...props}
                                              reset={this.reset}/> }/>
          <Route exact path="/" component={ Authenticate } />
          <Route exact path='/auth/register' component={ Register } />
          <Route exact path='/auth/login' component={ Login } />
          <Switch>
            <Route exact path="/note/all" render={(props) => {
              if(this.state.filteredResults.length===0){
                return(
                  <div>
                    <SearchBar {...props}
                            searchTitle={this.state.searchTitle}
                            searchTextBody={this.state.searchTextBody}
                            handleChange={this.handleChange}
                            filterByTitle={this.filterByTitle} 
                            filterByTextBody={this.filterByTextBody} />  
                    <ListView {...props}
                            notes={this.props.notes} />
                  </div>
                )
              }
              else {
                  return <FilteredNotes {...props} 
                          filtered={this.state.filteredResults} />
              }      
            }} />
            <Route exact path="/note/create" render={(props) => 
                <CreateNote {...props} 
                            title={this.state.title}
                            textBody={this.state.textBody}
                            handleChange={this.handleChange}
                            addNote={this.addNote} />}
            />
            <Route path="/note/:id/editnote" render={(props) =>
                <EditNote {...props} 
                            title={this.state.title}
                            textBody={this.state.textBody}
                            handleChangeEdit={this.handleChangeEdit}
                            updateNote={this.updateNote}
                            oldTitle={this.props.note.title}
                            oldTextBody={this.props.note.textBody} />}
            />
            <Route path="/note/:id" component={Note} />
          </Switch>
        </div>
    );
  }
}

export const mapStateToProps = state => ({
  notes: state.notes,
  note: state.note,
});

export default withRouter(connect(mapStateToProps,
  {fetchNotes,
    addNote,
    updateNote})(App));
