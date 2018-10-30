import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NotesView from './components/NotesView';
import Form from './components/Form';
import { HashRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import {withRouter} from 'react-router';
import NoteView from './components/NoteView';
import TopicMap from './components/TopicMap';


class App extends Component {
  state ={
    notes: [],
    viewNotes: true,
    createNote: false,
    editNote: false,
    notePage: false,
    chosenNote: {},
    newNote: {'title': '', 'textBody': '', 'tags': []}
  }

  inputHandler = (e) => {
    this.setState({newNote: {...this.state.newNote, [e.target.name]: e.target.value}})
  }

  saveNote = () => {
    axios.post('https://fe-notes.herokuapp.com/note/create', this.state.newNote)
        .then(res => {console.log('success',res)
        
  }).then(res => this.updateNotes())
        .catch(err => console.log(err))
    this.setState({newNote: {title: '', textBody: '', tags: []} });

    this.props.history.push('/');
    
  }

  editNote = (e) => {
    console.log(e.target);
    
  }

  updateNotes = () => {

    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => {console.log('hiUN',res);
     this.setState({notes: res.data})  
     })
    .catch(err => console.log(err));
  }

  submitNote = (id, note) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
         .then(res => {console.log('put success', res)
                       }).then(res => this.updateNotes())
         .catch(err => console.log(err))

    
}

  componentDidUpdate(){
    console.log('cDU');
    
  }


  componentDidMount(){
      this.updateNotes()
  }



  render() {
    
    return (
      
    <div className='container'>
      <div className="App">

        <div className="side-bar">
          <div className='lambda-notes'>
            <h1>Lambda Notes</h1>
          </div>
          <div className='button'><NavLink to='/' onClick={()=> this.setState({createNote: false,
                                       viewNotes: true,
                                       editNote: false,
                                      notePage: false })}>View Your Notes</NavLink></div>
          <div className='button'><NavLink to='/create-note' 
          onClick={()=> this.setState({createNote: true,
                                       viewNotes: false,
                                       editNote: false,
                                      notePage: false })}>+Create New Note</NavLink></div>
          <div className='button'><NavLink to="/topic-map">+New Topic Map</NavLink></div>
        </div>
        
        <div className='main-view'>
          <div className='title-cont'>
            <h2>{
              this.state.viewNotes ? 'Your Notes:' :
              this.state.createNote ? 'Create New Note:':
              this.state.notePage ? this.state.chosenNote.title :
              this.state.editNote ? 'Edit Note' : '' } </h2>
          </div>
          <Switch>
          <Route exact path='/' render={ props => <NotesView {...props} update={this.updateNotes} editNote={this.editNote} notes={this.state.notes}/>} />
          <Route path='/create-note' render={ props => <Form saveNote={this.saveNote} inputHandler={this.inputHandler} {...props} />} />
          <Route path="/note/:id" render={props => <NoteView {...props}  update={this.updateNotes} submitNote={this.submitNote}notes={this.state.notes} />}/>
          <Route path="/topic-map" render={props => <TopicMap {...props} notes={this.state.notes}/> } />
          </Switch>
          
          
        </div>
      </div>
    </div>
    
    );
  }
}

export default withRouter(App);
