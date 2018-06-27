import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NoteCards from './NoteCards';
import NoteEdit from './NoteEdit';
import NoteView from './NoteView';
import LogIn from './LogIn';


class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      notes: [],
      authenticated: true,
      loading: true,
      username: '',
      userID: '5b31478b6cad790d6b69216c'

    };
    this.backend = `https://tuesday-taco.herokuapp.com/api/`;
    
  }
  

  getUserNotes = () => {
    if(this.state.authenticated){
      axios
        .get(this.backend +'user/' + this.state.userID)
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
    }
  }
  
  componentDidMount(){
    // this.removeAuthListener = fire.auth().onAuthStateChanged(user => {
    //   if(user){
    //     this.notesRef = fire.database().ref(`notes/${user.uid}`)
    //     this.notesRef.on('value', data => {
    //       this.snapshotToArray(data.val())
    //     })
    //   } else{
    //     this.setState({
    //       authenticated: false,
    //       loading: false,
    //     })
    //   }
    // })
    this.getUserNotes()
    
    
  }

  // snapshotToArray = snapshot => {
  //   if(snapshot !== null){
  //     const notes = Object.entries(snapshot).map(notes => {
  //       return Object.assign({}, { id: notes[0] }, notes[1]);
  //     });  
  //     this.setState({
  //       notes: notes,
  //       authenticated: true,
  //       loading: false,
  //     });
  //   }else{
  //     this.setState({
  //       notes: [{
  //         id: "0",
  //         title: "you have no notes!!",
  //         body: "This is a note to let you know that you have no notes. if you delete this note, it will rise again in less than 3 days"
  //       }]
  //     })
  //   }
  // };

  // componentWillUnmount(){
  //   fire.removeBinding(this.notesRef)
  // }

  // authWithFacebook=()=>{
  //   fire.auth().signInWithPopup(facebookProvider)
  //     .then((result,error) => {
  //       if(error){
  //         console.log('unable to signup with firebase')
  //       } else {
  //         this.setState({authenticated: true })
  //       }
  //     }) 
  // }

  // logOut=()=>{
  //   fire.auth().signOut().then((user)=> {
  //     this.setState({
  //       notes: [],
  //       authenticated: false,
  //     })   
  //   })
  // }
  
  // this is going to be the add for firebase
  addNote = (note) => {
    const newNote = { title: note.title, body: note.body, createdBy: this.state.userID }
    axios
      .post(this.backend + 'note', newNote)
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
      .put(this.backend + 'note/' + note.id, newNote)
        .then(response => {
          this.getUserNotes()
        })
        .catch(err => {
          console.log(err.message)
        })  
  }

  deleteNote = note => {
    axios
      .delete(this.backend + 'note/' + note)
        .then(response => {
          console.log("deleted",response)
          this.getUserNotes()
        })
        .catch(err => {
          console.log(err.message)
        });
  }



  // this was the working add for placing in local state
  // addNote = (note) => {
  //   const newNotes = this.state.notes.concat({ id: Date.now(), title: note.title, body: note.body })
  //   this.setState({ notes: newNotes, })
  //   console.log("add",newNotes)
  // }



  //this was the working delete before firebase
  // deleteNote = note => {
  //   const afterDelete = this.state.notes.filter((current) => {
  //     return current.id !== note
  //   })
  //   console.log("after filter",afterDelete)
  //   this.setState({ notes: afterDelete })
    
  // }

  // this was the working edit before firebase
  // editNote = note => { 
  //   console.log("edit",note)
  //   const newNotes = this.state.notes.filter((c) => {
  //     return c.id !== note.id
  //   })
  //   this.setState({notes: newNotes.concat({id: note.id, title: note.title, body: note.body})})
  //   console.log(newNotes)
  // }


  render() { 
    // console.log(this.state.notes)
    return (  
      <div className="col-sm-12 col-md-9">
        <Route path="/" render={() => <LogIn  auth={this.state.authenticated} logOut={this.logOut} fbAuth={this.authWithFacebook}/>}/>

        <div className="mt-5">
          {this.state.authenticated 
            ? <Route exact path="/" render={() => <NoteCards notes={this.state.notes} user={this.state.username}/>} />
            : <h1>Log-In you must</h1>
          }
          
          <Route path="/add" render={(props) => <NoteEdit {...props} add={this.addNote}/>} />
          <Route path="/edit/:id" render={(props) => <NoteEdit {...props} notes={this.state.notes} add={this.editNote}/>} />
          <Route path="/note/:id" render={(props) => <NoteView {...props} notes={this.state.notes} delete={this.deleteNote}/>} />
        </div>
      </div>
    )
  }
}
 
export default AllNotes;