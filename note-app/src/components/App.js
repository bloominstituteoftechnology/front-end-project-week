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
      currentIndex: null,
      currentKey: null,
      currentTags: null,
      currentVersion: null,
      currentId: null, 
      nextId:null,
      select: null, 
    }
  }

  componentDidMount () {
    this.fetchNotes()
  }

  idGenerator = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  fetchNotes = () => {
    const promise = axios.get('http://localhost:8080/notes')
    promise
    .then(response => {
      this.setState({notes:response.data, nextId:response.data.length})
    })
    .catch(error => {
      console.log(error)
    })
  }

  postNote = (noteobj) => {
    const promise = axios.post('http://localhost:8080/notes', noteobj)
    promise
    .then(response => {
      console.log(response.data)
      this.setState({notes:[...this.state.notes, response.data], nextId: response.data.length})
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleNoteSelect = (index) => {
    const select = this.state.notes[index];
    console.log(select)
    this.setState({select: {title: select.title, textBody: select.textBody, index: index, _id: select._id,
    tags: select.tags, __v: select.__v, id: select.id}})
  }
  updateNote = (index, noteObj) => {
    const promise = axios.put(`http://localhost:8080/notes/${index}`, noteObj)
    promise
    .then(response => {
      console.log(response)
      this.fetchNotes()
    })
    .catch(error => {
      console.log(error) 
    })
  }

  deleteNote  = (index) => {
    const promise = axios.delete(`http://localhost:8080/notes/${index}`)
    promise
    .then(response => {
      console.log(response)
      this.fetchNotes()
    })
    .catch(error => {
      console.log(error, index) 
    })

  }


  render() {
    console.log(this.state)
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
                <Route path = '/create-note'  render = {props => <CreateNote {...props} create = {this.postNote} idGenerator = {this.idGenerator} nextId = {this.state.nextId}/>} />
                <Route path = '/:id/edit-note' render = {props => <EditNote {...props} update = {this.updateNote}/> } />
                <Route path = '/:id/delete-note' render = {props => <DeleteModal {...props} select = {this.handleNoteSelect} delete = {this.deleteNote}/>} />
                <Route path = '/:id' render = {props => <FullNote  {...props} select = {this.state.select} /> } />
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
