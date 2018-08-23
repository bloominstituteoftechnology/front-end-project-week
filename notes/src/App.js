import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {Switch, Route, Link, withRouter} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ListView from './components/ListView';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import EditNote from './components/EditNote';
import FilteredNotes from './components/FilteredNotes';
import {fetchNotes, addNote, updateNote} from './actions/actions';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      textBody: '',
      searchTitle: [],
      searchTextBody: [],
      searchResultByTitle: [],
    }
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleChangeEdit = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  filterByTitle = e => {
      let result = this.state.searchTitle;
      if (result.length === 0){
        return null;
      };
      let filtered = this.props.notes.filter(note => note.title.toLowerCase().includes(result));
      console.log(filtered);
      this.setState({searchResultByTitle: filtered});
      console.log(this.state.searchResultByTitle);
      if(this.state.searchResultByTitle.length === 0){
        return null;
      }
      window.location.href="/get/filteredNotes";
    }
  addNote = e => {
    e.preventDefault();
    this.props.addNote(this.state.title, this.state.textBody);
    this.setState({title:'', textBody:'',});
    window.location.reload();
    window.location.href="/get/all";
  }
  updateNote = e => {
    e.preventDefault();
    this.props.updateNote(this.state.title,this.state.textBody, e.target.id);
    this.setState({title:'', textBody:'',});
    // window.location.href='/get/all';
  }
  componentDidMount(){
    this.props.fetchNotes();
  }
  render(){
    return (
        <div className='App'>
          <Link to="/"></Link>
          {/* ROUTES */}
          <Route path='/' component={SideBar} />
          <Route exact path="/get/all" render={(props) => 
            <div>
                <SearchBar {...props}
                        searchTitle={this.state.searchTitle}
                        handleChange={this.handleChange}
                        filterByTitle={this.filterByTitle}/>  
                <ListView {...props}
                          notes={this.props.notes} />
            </div> }
          />
          <Route exact path="/get/filteredNotes" render={(props) => 
                <FilteredNotes {...props}
                          filtered={this.state.searchResultByTitle} />} />
          <Switch>
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
  filteredNotes: state.filteredNotes
});

export default withRouter(connect(mapStateToProps,
  {fetchNotes,
    addNote,
    updateNote})(App));
