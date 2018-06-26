import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Listview from './Component/Layout/Listview';
import Editview from './Component/Layout/Editview';
import Createview from './Component/Layout/Createview';
import Noteview from './Component/Layout/Noteview';


// axios

import axios from 'axios'


import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody:''
    };
  }

  
  componentDidUpdate = () => {
    // this.read();
  }

  componentDidMount = () => {
    // base.syncState('notes', {
    //   context: this,
    //   state: 'notes',
    //   asArray: true
    // })

    this.read();
  }

  //mongo

  create = event => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'https://thawing-stream-63814.herokuapp.com/api/notes',
      data: {
        title: this.state.title,
        note: this.state.textBody
      }
    });

    this.setState({
      title: '',
      textBody: ''
    });

  }

  
  read = () => {
    axios
      .get('https://thawing-stream-63814.herokuapp.com/api/notes')
      .then(response => {
        console.log(response.data)
        this.setState({
          notes: response.data
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  update = (_id) =>{
    console.log(_id)
    axios
      .put(`https://thawing-stream-63814.herokuapp.com/api/notes/${_id}`, {
          title: this.state.title,
          note: this.state.textBody
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      });
      
  }

  delete = (_id) => {
    axios
    .delete(`https://thawing-stream-63814.herokuapp.com/api/notes/${_id}`)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }



  //mono ends

  handleTaskChange = event => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  } 


  // handleRequest = () =>{ 
  //   console.log('fire')
  //   let newNote = {
  //     title: this.state.title,
  //     textBody: this.state.textBody,
  //     id: this.state.notes.length
  //   }

  //   let newNoteArray = [...this.state.notes]
  //   newNoteArray.push(newNote)
  //   this.setState({
  //     notes: newNoteArray,
  //     title: '',
  //     textBody: ''
  //   })
  //   }

  handleDelete = (id) => {
    var newList = this.state.notes;
    newList = newList.filter(item => (item.id.toString() !==  id.toString()) )
    console.log('newlist', newList);
    this.setState({
      notes: newList
    });
  }

  handleEdit = (id) => {
    let note = this.state.notes.filter(item => (item._id.toString() ===  id) )
    console.log("not",note)
    this.setState({
      title: note[0].title,
      textBody: note[0].note,
      id: note[0].id
    })
  }

  
  handleUpdate = (id) =>{ 
    let newNotes = [...this.state.notes];
      newNotes[id].title = this.state.title;
      newNotes[id].textBody = this.state.textBody;
    console.log('nn2',newNotes)
    this.setState({
      notes: newNotes,
      title: '',
      textBody: ''
    });
      
  }
  


  render() {
    return (
      <div className="container-fluid">
           <Route exact path="/" render={ (props) =>  <Listview {...props} notes={this.state.notes}  /> } />
          <Route path="/edit/:id" render={ (props) =>  (<Editview {...props} id={props.match.params.id} handleUpdate={this.update}  handleTaskChange= {this.handleTaskChange} handleEdit={this.handleEdit} title={this.state.title} textBody={this.state.textBody} />  )  } />
          <Route path="/note/:id" render={ (props) =>  (<Noteview {...props} delete={this.delete}    note={this.state.notes.filter(item => (item._id.toString() ===  props.match.params.id) )} />  )  } />
          <Route path="/create" render={ (props) =>  <Createview {...props} title={this.state.title} textBody={this.state.textBody} handleRequest = {this.create}  handleTaskChange= {this.handleTaskChange}/> } />    
      </div>
    );
  }
}

export default App;
