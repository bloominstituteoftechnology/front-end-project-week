import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'; 
import Notes from './components/Notes'; 
import {Route} from 'react-router-dom'; 
import CreateNew  from './components/CreateNew';
import NoteView   from './components/NoteView'; 
import axios from 'axios'
import Edit from './components/Edit.js'
import Search from './components/Search'
import Register from './components/Register'
import Login from './components/Login'

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      notes: []
    }  
  }

displayNotes = () => {
  const token = localStorage.getItem('jwt')
  const headers = {
    headers: {
      'Authorization': token
    }
  }
  axios
    .get("http://localhost:5566/api/home", headers)
      .then(response => {
        this.setState({
          notes: response.data
        })
      })
        .catch(err => console.log(err)); 
}

componentDidMount(){
  this.displayNotes(); 
}

signOut = () => {
  localStorage.removeItem('token');
  console.log("boom")
}

  inputChange = e => {
    e.preventDefault();
    this.setState({
      newNote: {
        ...this.state.newNote,
        [e.target.name]: e.target.value
      }
    });
  };

  searchHandler = (string) => {
   const searchFilter = this.state.notes.filter(item => {
     return item.title.includes(string)
    })
    if(!this.state.notes.length < 1){
       this.setState({
         notes: searchFilter
       })
    } else{
      this.componentDidMount(); 
    }
  }

  addNote = () => {
    axios
      .post("http://localhost:5566/api/notes", this.state.newNote)
      .then(response =>
        this.setState({
          newNote: { title: "", textBody: "" }
        })
      )
      .catch(error => {
        console.log(error);
      });
  };


  updateHandler = (title, textBody, id) => {
    this.setState({
      notes: [ ...this.state.notes,
        {title:title, textBody: textBody}
      ]
    })
    let updatedNote = {
      title: title,
      textBody: textBody,
    }
    axios
      .put(`http://localhost:5566/api/notes/${id}`, updatedNote)
      .then(response =>
        this.setState({
          updatedNote: { title: "", textBody: "" , id: null}
        })
      )
      .catch(error => {
        console.log(error);
      });
  };

    newNote = (newtitle, content, image) => {
      this.setState({
        notes:[
          ...this.state.notes, 
          {title: newtitle, textBody: content, image: image}
        ],
      })
      const newNote = {
        title: newtitle,
        textBody: content,
        image: image,
        tags: null
      }
      axios.post('http://localhost:5566/api/notes', newNote)
      .then( response => {
          this.setState({
            newNote: {
            title: '',
            textBody: '',
            image: '', 
            tags: null,
            }
          })
        })
        .catch( error => console.log( "we've encountered an error"))
    }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar signOut={this.signOut} />
        </div> 
        <div className="notes-container">
        <Search className="search-bar" searchHandler={this.searchHandler} notes={this.state.notes} />
        
          <Route 
            exact path='/' 
            render = {props => <Notes {...props} 
            notes={this.state.notes} />}  
          />
          <Route 
             path='/Register'
             render = {props => (
               <Register  
                 {...props}
            />)}
          />
           <Route 
             path='/Login'
             render = {props => (
               <Login  
                 {...props}
            />)}
          />

          <Route 
            path='/CreateNew' 
            render = { props=> (
              <CreateNew
                {...props}
                notes={this.state.notes}
                id={this.state.newId}    
                newNote={this.newNote}
              />)}
          /> 

          <Route exact path='/NoteView/:id' render={props => (
            <NoteView
              {...props}
              notes={this.state.notes}
            />)} 
          />  

          <Route exact path='/Edit/:id' render={props => (
            <Edit 
              {...props}
              notes={this.state.notes}
              inputChange={this.inputChange}
              newNote={this.newNote}
              updateHandler={this.updateHandler}
            />)}
          />
        </div> 
      </div>
    );
  }
}

export default App;
