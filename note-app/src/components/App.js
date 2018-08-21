import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'; 
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import axios from 'axios'

import '../styles/App.css';
import CreateNote from './create-note';
import EditNote from './edit-note';
import ViewAllNotes from './notes';
import FullNote from './FullNote';
import DeleteModal from './delete-note';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      currentTitle: null,
      currentContent : null,
      currentIndex: null
    }
  }

  componentDidMount () {
    this.fetchNotes()
  }

  fetchNotes = () => {
    const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all')
    promise
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  createNote = (noteObj) => {

    const notes = this.state.notes.slice()
    notes.push(noteObj)
    this.setState({ notes })
  }

  handleNoteSelect = (index) => {
    const select = this.state.notes[index];
    this.setState({currentTitle: select.title, currentContent: select.content, currentIndex: index})
  }
  updateNote = (index, noteObj) => {
    const notes = this.state.notes.slice()
    notes[index] = noteObj
    this.setState({ notes })
  }

  deleteNote  = (index) => {
    let notes = this.state.notes.slice()
    const deleting = notes[index]
    notes = notes.filter(note => note.title !== deleting.title)
    this.setState({ notes })

  }


  render() {
    
    return (
      <div className="App">
        <div className="heading">
          <h3 className= "app-header"><br/></h3>
          <hr/>
        </div>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition timeout = {500} classNames = 'fade' key = {location.key}>
              <Switch location = {location}>
                <Route exact path ='/' render = {props => <ViewAllNotes {...props} notes = {this.state.notes} click = {this.handleNoteSelect}/>} /> 
                <Route path = '/create-note'  render = {props => <CreateNote {...props} create = {this.createNote}/>} />
                <Route path = '/:id/edit-note' render = {props => <EditNote {...props} update = {this.updateNote} /> } />
                <Route path = '/:id/delete-note' render = {props => <DeleteModal {...props} select = {this.handleNoteSelect} delete = {this.deleteNote}/>} />
                <Route path = '/:id' render = {props => <FullNote  {...props} ct = {this.state.currentTitle} cc = {this.state.currentContent} index = {this.state.currentIndex} /> } />
                <Route render ={() => <div>Not Found</div> } /> 
              </Switch>
            </CSSTransition>
         </TransitionGroup>
        )} />
          
        </div>
    );
  }
}

export default App;
