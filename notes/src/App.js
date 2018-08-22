import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {Switch, Route, Link, withRouter} from 'react-router-dom';
import ListView from './components/ListView';
import CreateNote from './components/CreateNote';
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
    // this.props.history.push('/get/all');
    window.location.href='/get/all';
  }
  updateNote = e => {
    e.preventDefault();
    this.props.updateNote(this.state.title, this.state.textBody, e.target.id);
    this.setState({title:'', textBody:'',});
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
              <ListView {...props} notes={this.props.notes} />}
          />
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
                            handleChange={this.handleChange}
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
