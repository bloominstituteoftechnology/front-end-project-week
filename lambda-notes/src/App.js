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
    notes: [{id:0, title: 'test', text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},{id:1, title: 'test1', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:2, title: 'test2', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:3, title: 'test3', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'}, {id:4, title: 'test4', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'} ],
    nextId: 5,
    axiosReq:''
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

  handleLogin = (username, password) => {

  }

  componentDidMount() {
    const newguy = {
      username:'theotherguy',
      password:'password',
      notes:[
        {id:0, title: 'test', text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},{id:1, title: 'test1', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:2, title: 'test2', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:3, title: 'test3', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'}, {id:4, title: 'test4', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'}
      ]
    }
    axios.put(`http://localhost:5000/api/users/${newguy.username}`, newguy)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log('THere was error:', error);
    })

    // axios.put(`http://localhost:5000/api/users/${newguy.username}`, newguy.password)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log('THere was error:', error);
    //   })
  }

  render() {
    let usernameInput, passwordInput;

    return (
      <div className="App">
        <div className='container'>
          <div className='row h-100'>
            <div className='col-3 left_side'>
              <h2 className='nav_head'>Lambda <br/>Notes</h2>
              <Link to='/' className='nav_button'>View Your Notes</Link>
              <Link to='/addNewNote' className='nav_button'>+Create New Notes</Link>
              <button data-toggle="modal" data-target="#exampleModal">Log In</button>
            </div>
            <Route exact path='/' render={(props) => <NoteList {...props} notes={this.state.notes}/> } />
            
            {/* <Route path='/noteview/:id' render={({match}) => <NoteView notes={this.state.notes} /> }/> */}
            {/* <Route path='/noteview/:id' render={({ match }) => noteView(this.state.notes, match) }/> */}
            <Route path='/noteview/:id' render={(props) => <NoteView {...props} deleteNote={this.deleteNote} notes={this.state.notes} /> }/>
            <Route path='/addNewNote' render={(props) =>  <NewNote {...props} addNewNote={this.addNewNote} />} />
            <Route path='/EditNote/:id' render={(props) => <EditNote {...props} updateNote={this.updateNote} notes={this.state.notes} />} />
          </div>


          {/* Login Modal Starts Here */}
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Enter Username and Password</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                Log In
                <form className='new_note_form' onSubmit={this.handleLogin(usernameInput, passwordInput)}>
                    <input className='' ref={username => usernameInput = username} placeholder='Username' autoFocus />
                    
                    
                    <input className='' ref={password => passwordInput = password} placeholder='Password' />
            
                    <br/>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Log In</button>
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
