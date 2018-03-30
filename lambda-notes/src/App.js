import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NoteList from './components/NoteList';
import {NewNote} from './components/NewNote';
import {EditNote} from './components/EditNote';
import { NoteView } from './components/NoteView';
import NoteListTest from './components/NoteListTest';
import axios from 'axios';

class App extends Component {

  state = {
    notes: [{id:666, title:'checking', text: 'hhhhhhhhhhhhhhhhhhhhhhhh'} ],
    nextId: 5,
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

  };

  handleLogin = () => {
    axios.put(`http://localhost:5000/api/users/${this.state.usernameInput}`, {username: this.state.usernameInput, password: this.state.passwordInput})
    .then(response => {
      if(response.data !== 'ERROR')
        this.setState({notes: response.data.notes, loggedInAs: response.data.username, password: response.data.password });
        document.getElementById('password_warning').style.display = 'none';
        document.getElementById('current_user').style.display = 'block';
        document.getElementById('logout_btn').disabled = false;
        document.getElementById('login_btn').disabled = true;
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
    console.log('logging out');
    document.getElementById('logout_btn').disabled = true;
    document.getElementById('login_btn').disabled = false;
    document.getElementById('current_user').style.display = 'none';
    this.updateServer();
  }
  updateServer = () => {

    const userdata = {
      username: this.state.loggedInAs,
      password: this.state.password,
      notes: this.state.notes
    }
    

    axios.delete(`http://localhost:5000/api/users/${userdata.username}`)
      .then(
        axios.post(`http://localhost:5000/api/users`, userdata)
      )

  }
  
  componentWillUnmount() {

    
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
              <button id='login_btn' data-toggle="modal" data-target="#loginModal">Log In</button>
              <div id='password_warning'>Incorrect Password</div>
              <button id='logout_btn' onClick={() => this.logout()} >Log Out</button>
              <div className='nav_head' id='current_user'>Logged in as: {this.state.loggedInAs}</div>
            </div>
            <Route exact path='/' render={(props) => <NoteList {...props} notes={this.state.notes}/> } />
            
            {/* <Route path='/noteview/:id' render={({match}) => <NoteView notes={this.state.notes} /> }/> */}
            {/* <Route path='/noteview/:id' render={({ match }) => noteView(this.state.notes, match) }/> */}
            <Route path='/noteview/:id' render={(props) => <NoteView {...props} deleteNote={this.deleteNote} notes={this.state.notes} /> }/>
            <Route path='/addNewNote' render={(props) =>  <NewNote {...props} addNewNote={this.addNewNote} />} />
            <Route path='/EditNote/:id' render={(props) => <EditNote {...props} updateNote={this.updateNote} notes={this.state.notes} />} />
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
