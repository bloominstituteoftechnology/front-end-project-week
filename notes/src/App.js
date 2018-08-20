import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {Route, Link} from 'react-router-dom';
import {notes} from './components/Notes';
import ListView from './components/ListView';
import CreateNew from './components/CreateNew';
import Note from './components/NoteView';
import EditNote from './components/EditNote';
import {fetchNotes} from './actions/actions';
import {connect} from 'react-redux';

let id = 9;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: notes,
      title: '',
      content: '',
      id: id,
    }
  }
  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value});
  }
  addNote = e => {
    e.preventDefault();
    let notes = this.state.notes.slice();
    notes.push({
        id: this.state.id,
        title: this.state.title,
        content: this.state.content,
    });
    this.setState({notes, title:'', content:'', id: ++id});
  }
  updateNote = e => {
    e.preventDefault();
    let note = this.state.notes.slice(e.target.id, ++e.target.id)
    let notes = this.state.notes.slice();
  }
  deleteNote = e => {
    // let note = this.state.notes.splice(e.target.id, 1)
    // this.setState({notes: note});
    // window.location.assign('http://localhost:3000/noteslist')
  }
  componentDidMount(){
    this.props.fetchNotes();
  }
  render() {
    console.log(this.state.notes)
    return (
        <div className='App'>
          <Route path='/' component={SideBar} />
          <Link to="/"></Link>
          <Route exact path="/noteslist" render={(props) => 
            <ListView {...props} notes={this.props.notes} />} />
          {/* <Route exact path="/createnewnote" render={(props) => 
            <CreateNew {...props} title={this.state.title}
                                  content={this.state.content}
                                  handleChange={this.handleChange}
                                  addNote={this.addNote}                   
            />}
          />
          <Route exact path={`/note/:id`} 
                      render={(props) => <Note {...props}
                                                notes={this.state.notes}
                                                deleteNote={this.deleteNote}
                                          /> }
          />
          <Route exact path={`/note/:id/editnote`}
                 render={(props) => <EditNote {...props} 
                                    title={this.state.title}
                                    content={this.state.content}
                                    handleChange={this.handleChange}
                                    updateNote={this.updateNote}
                                    />}
          /> */}
        </div>
    );
  }
}

export const mapStateToProps = state => ({
  notes: state.notes,
});

export default connect(mapStateToProps, {fetchNotes})(App);
