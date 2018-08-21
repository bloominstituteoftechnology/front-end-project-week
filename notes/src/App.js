import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {Route, Link, withRouter} from 'react-router-dom';
import ListView from './components/ListView';
import CreateNew from './components/CreateNew';
import Note from './components/Note';
import EditNote from './components/EditNote';
import {fetchNotes, addNote, updateNote} from './actions/actions';
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
    window.location.reload();
  }
  updateNote = e => {
    e.preventDefault();
    this.props.updateNote(this.state.title, this.state.textBody, e.target.id);
    this.setState({title:'', textBody:'',});
    window.location.reload();
  }

  componentDidMount(){
    this.props.fetchNotes();
  }
  componentDidUpdate(){
    this.props.fetchNotes();
  }
  render(){
    return (
        <div className='App'>
          <Link to="/"></Link>
          {/* ROUTES */}
          <Route path='/' component={SideBar} />
          <Route exact path="/get/all" render={(props) => 
                <ListView {...props} notes={this.props.notes} />}
          />
          <Route exact path="/note/create" render={(props) => 
                <CreateNew {...props} title={this.state.title}
                                  textBody={this.state.textBody}
                                  handleChange={this.handleChange}
                                  addNote={this.addNote} />}
          />
          <Route exact path={`/note/:id`} component={Note} />
          <Route exact path={`/note/:id/editnote`} render={(props) =>
                <EditNote {...props} 
                          title={this.state.title}
                          textBody={this.state.textBody}
                          handleChange={this.handleChange}
                          updateNote={this.updateNote} />}
          />
        </div>
    );
  }
}

export const mapStateToProps = state => ({
  notes: state.notes,
});

export default withRouter(connect(mapStateToProps,
  {fetchNotes,
    addNote,
    updateNote})(App));
