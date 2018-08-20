import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {Route, Link} from 'react-router-dom';
import {notes} from './components/Notes';
import ListView from './components/ListView';
import CreateNew from './components/CreateNew';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: notes,
      title: '',
      content: '',
    }
  }
  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value});
  }
  addNote = e => {
    e.preventDefault();
    let notes = this.state.notes.slice();
    notes.push({title: this.state.title, content: this.state.content});
    this.setState({notes, title:'', content:''})
    console.log(this.state.notes);
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <div className='App'>
          <Route path='/' component={SideBar} />
          <Link to="/"></Link>
          <Route exact path="/noteslist" render={(props) => 
            <ListView {...props} notes={this.state.notes} />} />
          <Route exact path="/createnewnote" render={(props) => 
            <CreateNew {...props} title={this.state.title}
                                  content={this.state.content}
                                  handleChange={this.handleChange}
                                  addNote={this.addNote}                        
            />}
          />
        </div>

      </div>
    );
  }
}

export default App;
