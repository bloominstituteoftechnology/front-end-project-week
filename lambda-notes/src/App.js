import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NoteList from './components/NoteList';
import {NewNote} from './components/NewNote';
import {EditNote} from './components/EditNote';
import { NoteView } from './components/NoteView';
import { Register } from './components/Register';
import NoteListTest from './components/NoteListTest';
import axios from 'axios';
axios.defaults.withCredentials = true;

class App extends Component {

  state = {
    notes: [],
    nextId: 99,
    usernameInput:'',
    passwordInput: '',
    loggedInAs: '',
    password: ''
  }

  addNewNote = (note) => {
    note = {...note, id: this.state.nextId};
    const tempNotes = this.state.notes;
    tempNotes.push(note);
    this.setState({notes: tempNotes, nextId: (this.state.nextId + 1)});
    this.updateServer();
  };

  updateNote = (note) => {
    const tempNotes = this.state.notes;
    for (let i = 0; i < tempNotes.length; i++) {
      if (tempNotes[i].id === parseInt(note.id)){
        if (note.title !== '')
          tempNotes[i].title = note.title;
        if (note.text !== '')
          tempNotes[i].text = note.text;
        
      }
    }
    this.setState({tempNotes});
    this.updateServer();
  };

  deleteNote = (note) => {
    const tempNotes = this.state.notes;
    let index;
    for (let i = 0; i < tempNotes.length; i++) {
      if(tempNotes[i].id === note.id)
        index = i;
    }
    tempNotes.splice(index, 1);
    this.setState({tempNotes});
    this.updateServer();

  };

  loginNewUser = (newUser) => {
    document.getElementById('password_warning').style.display = 'none';
    this.setState({
      loggedInAs: newUser.username,
      password: newUser.password,
      notes: newUser.notes,
      usenameInput: '',
      passwordInput: ''
    })

    document.getElementById('current_user').style.display = 'block';
    document.getElementById('logout_btn').disabled = false;
    document.getElementById('login_btn').disabled = true;
    this.setNextId();
    

  }
  handleLogin = () => {

    axios.post(`https://frozen-inlet-93885.herokuapp.com/api/login`, {username: this.state.usernameInput, password: this.state.passwordInput})
    .then(response => {
      console.log(response);
      if(!response.data.error)
        this.setState({notes: response.data.notes, loggedInAs: response.data.username, password: response.data.password });
        document.getElementById('password_warning').style.display = 'none';
        document.getElementById('current_user').style.display = 'block';
        document.getElementById('logout_btn').disabled = false;
        document.getElementById('login_btn').disabled = true;
        this.setNextId();
    })
    .catch(error => {
      console.log('THere was error:', error);
      document.getElementById('password_warning').style.display = 'block';
    })

    this.setState({usernameInput: '', passwordInput: ''});

  }

  handleUsername = (event) => {
    this.setState({ usernameInput: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({ passwordInput: event.target.value})
  }

  logout = () => {
    axios.get('https://frozen-inlet-93885.herokuapp.com/api/logout')
    .then(response => {
      console.log('logged out');
    })
    .catch(err => console.log(err) );
    document.getElementById('logout_btn').disabled = true;
    document.getElementById('login_btn').disabled = false;
    document.getElementById('current_user').style.display = 'none';
    this.updateServer();
    this.setState({
      loggedInAs: '',
      password: '',
      notes: []
    });
  }

  updateServer = () => {

    axios.put('https://frozen-inlet-93885.herokuapp.com/api/update', { notes: this.state.notes, username: this.state.username })
    .then(response => {
      console.log('sever updated');
    })
    .catch(err => {
      console.log('There was an error:', err);
    });
  };

  setNextId = () => {
    
    let newId = 0;
    let tempNotes = this.state.notes;
    for (let i = 0; i < tempNotes.length; i++){
      if (tempNotes[i].id > newId)
        newId = (tempNotes[i].id + 1); 
    }
    this.setState({id: newId});
  }
  
  componentWillUnmount() {
    // this.updateServer();  
  }

  render() {
      
    return (
      <div className="App">
        <div className='container'>
          <div className='row h-100'>
            <div className='col-3 left_side'>
              <h2 className='nav_head'>Lambda <br/>Notes</h2>
              <Link to='/' className='nav_button'>View Your Notes</Link>
              <Link to='/addNewNote' className='nav_button'>+Create New Notes</Link>
              <Link to='/Register' className='nav_button'>Register for an Account</Link>
              <br/>
              <button id='login_btn' data-toggle="modal" data-target="#loginModal">Log In</button>
              <div id='password_warning'>Incorrect Username/Password</div>
              <br/>
              <button id='logout_btn' onClick={(event)=>{event.preventDefault(); this.logout()}}>Log Out</button>
              <div className='nav_head' id='current_user'>Logged in as: {this.state.loggedInAs}</div>
            </div>
            <Route exact path='/' render={(props) => <NoteList {...props} notes={this.state.notes}/> } />
            <Route path='/noteview/:id' render={(props) => <NoteView {...props} deleteNote={this.deleteNote} notes={this.state.notes} /> }/>
            <Route path='/addNewNote' render={(props) =>  <NewNote {...props} addNewNote={this.addNewNote} />} />
            <Route path='/EditNote/:id' render={(props) => <EditNote {...props} updateNote={this.updateNote} notes={this.state.notes} />} />
            <Route path='/Register' render={(props) => <Register {...props} login={this.loginNewUser} notes={this.state.notes} loggedInAs={this.state.loggedInAs} />} />
          </div>


          {/* Login Modal Starts Here */}
          <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="loginModalLabel">Enter Username and Password</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body" >
                Log In
                <form className='new_note_form' >
                    <input onChange={this.handleUsername} value={this.state.usernameInput} placeholder='Username' id='focused' autoFocus />
                    <br/>
                    <input onChange={this.handlePassword} value={this.state.passwordInput} type='password' placeholder='Password' />
                    <br/>               
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" onClick={(event) => {
                    event.preventDefault();
                    this.handleLogin();
                    }} className="btn btn-primary" data-toggle="modal" data-target="#loginModal">Log In</button>
                </div>
                </form>
                </div>
              </div>
            </div>
          </div>
    {/* Login Modal Ends here */}
  </div>
</div>
        

    );
  }
}

export default App;
