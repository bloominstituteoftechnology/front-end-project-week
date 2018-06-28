import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import NoteCards from './NoteCards';
import NoteEdit from './NoteEdit';
import NoteView from './NoteView';
import LogIn from './LogIn';
import LogginIn from './LoggingIn';



class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      notes: [],
      sharedNotes: [],
      authenticated: false,
      loading: true,
      username: '',
      userID: ''

    };
    
  }
  

  getUserNotes = () => {
    console.log('getting notes')
    console.log(this.state.userID)
    const config = {headers: { "Authorization": `Bearer ${window.localStorage.getItem("token")}`}}
    if(this.state.authenticated){
      axios
        .get(process.env.REACT_APP_BACKEND +'user/' + this.state.userID, config)
          .then(response => {
            // console.log("response",response)
            const username  = response.data[0].createdBy.username;
            
            this.setState(() => ({ 
              notes: response.data,
              username: username
            }))
          })
          .catch(err => {
            console.log("error:", err.message)
          });
    } else{
      console.log('tried to get notes while auth was set to false')
    };
    this.getSharedNotes()
  }

  getSharedNotes = () => {
    console.log('getting shared notes')
    console.log(this.state.userID)
    const config = {headers: { "Authorization": `Bearer ${window.localStorage.getItem("token")}`}}
    if(this.state.authenticated){
      axios
        .get(process.env.REACT_APP_BACKEND +'sharedNotes/' + this.state.userID, config)
          .then(response => {
            // console.log("response",response)
                        
            this.setState(() => ({ 
              sharedNotes: response.data,
              
            }))
          })
          .catch(err => {
            console.log("error:", err.message)
          });
    } else{
      console.log('tried to get notes while auth was set to false')
    }
  }

  addSharedNote = (noteId, userToShare) => {
    console.log(noteId, userToShare)
    axios
      .put(process.env.REACT_APP_BACKEND + 'sharedNotes/' + noteId, {username: userToShare})
        .then(response => {
          console.log("worked")
        })
        .catch(err => {
          console.log("adding shared didn't work", err.message)
        })
  }
  
  // componentWillMount(){
  //   if(window.localStorage.getItem('token')){
  //     console.log('has a token')
  //     this.setState({authenticated: true})
  //     this.getUserNotes()
    
  //   }
    
    
    
  // }


  register = user => {
    axios.post(process.env.REACT_APP_BACKEND + 'users', user)
      .then(response => {
        this.login(user)
      })
      .catch(err => {
        console.log(err)
      })
  }

  login = user => {
    console.log('user in during login',user)
   
    axios.post(process.env.REACT_APP_BACKEND + 'login', user)
      .then(response => {
        console.log(response)
        this.setState({
          username: response.data.user.username,
          userID: response.data.user._id,
          authenticated: true,
        });
        window.localStorage.setItem('token', response.data.token)
        this.getUserNotes()
      })
      .catch(err => {
        console.log(err)
      })
      this.props.history.push('/')
      
  }

  logOut=()=>{
    window.localStorage.removeItem('token');
    this.setState({  
      notes: [],
      authenticated: false,
      loading: true,
      username: '',
      userID: ''

    });
    this.props.history.push('/')

  }
  
  // this is going to be the add for firebase
  addNote = (note) => {
    const newNote = { title: note.title, body: note.body, createdBy: this.state.userID }
    axios
      .post(process.env.REACT_APP_BACKEND + 'note', newNote)
        .then(() => {
          this.getUserNotes()
        })
        .catch(err => {
          console.log(err.message)
        })
    console.log("add",newNote)
  }

  editNote = note => { 
    const newNote = { title: note.title, body: note.body }
    console.log("edit",note.id)
    axios 
      .put(process.env.REACT_APP_BACKEND  + 'note/' + note.id, newNote)
        .then(response => {
          this.getUserNotes()
        })
        .catch(err => {
          console.log(err.message)
        })  
  }

  deleteNote = note => {
    axios
      .delete(process.env.REACT_APP_BACKEND + 'note/' + note)
        .then(response => {
          console.log("deleted",response)
          this.getUserNotes()
        })
        .catch(err => {
          console.log(err.message)
        });
  }






  render() { 
    return (  
      <div className="col-sm-12 col-md-9">
        <Route path="/" render={() => <LogIn  auth={this.state.authenticated} logOut={this.logOut} fbAuth={this.authWithFacebook}/>}/>

        <div className="mt-5">
          {this.state.authenticated 
            ? <Route exact path="/" render={() => <NoteCards notes={this.state.notes} user={this.state.username}/>} />
            : <div>You need to sign-in or register before you can see notes</div>
          }
          <Route path="/login" render={() => <LogginIn login={this.login} buttonText='Login'/> } />
          <Route path="/register" render={() => <LogginIn login={this.register} buttonText='Register'/> } />
          <Route path="/add" render={(props) => <NoteEdit {...props} add={this.addNote}/>} />
          <Route path="/edit/:id" render={(props) => <NoteEdit {...props} notes={this.state.notes} add={this.editNote} addSharedNote={this.addSharedNote}/>} />
          <Route path="/note/:id" render={(props) => <NoteView {...props} notes={this.state.notes} delete={this.deleteNote}/>} />
          <Route path="/shared" render={() => <NoteCards notes={this.state.sharedNotes} user={this.state.username}/>} />
        </div>
      </div>
    )
  }
}
 
export default withRouter(AllNotes);