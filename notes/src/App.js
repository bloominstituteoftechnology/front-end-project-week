import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {Route, Link} from 'react-router-dom';
import ListView from './components/ListView';
import CreateNew from './components/CreateNew';
import Note from './components/Note';
import EditNote from './components/EditNote';
import {fetchNotes, addNote, updateNote, deleteNote} from './actions/actions';
import {connect} from 'react-redux';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      textBody: '',
    }
  }
  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value});
  }
  addNote = e => {
    e.preventDefault();
    this.props.addNote(this.state.title, this.state.textBody);
    this.setState({title:'', textBody:'',});
  }
  updateNote = e => {
    e.preventDefault();
    this.props.updateNote(this.state.title, this.state.textBody, e.target.id);
    this.setState({title:'', textBody:'',});
  }
  deleteNote = e => {
    e.preventDefault();
    this.props.deleteNote(e.target.id);
  }
  componentDidMount(){
    this.props.fetchNotes();
  }
  render(){
    return (
        <div className='App'>
          <Route path='/' component={SideBar} />
          <Link to="/"></Link>
          <Route exact path="/get/all" render={(props) => 
            <ListView {...props} notes={this.props.notes} />} />
          <Route exact path="/note/create" render={(props) => 
            <CreateNew {...props} title={this.state.title}
                                  textBody={this.state.textBody}
                                  handleChange={this.handleChange}
                                  addNote={this.addNote}                   
            />}
          />
          <Route exact path={`/note/:id`} render={(props) => <Note {...props} 
                    deleteNote={this.deleteNote} />} />
          <Route exact path={`/note/:id/editnote`}
                 render={(props) => <EditNote {...props} 
                                    title={this.state.title}
                                    textBody={this.state.textBody}
                                    handleChange={this.handleChange}
                                    updateNote={this.updateNote}
                                    />}
          />
        </div>
    );
  }
}

export const mapStateToProps = state => ({
  notes: state.notes,
});

export default connect(mapStateToProps,
  {fetchNotes,
    addNote,
    updateNote,
    deleteNote})(App);
