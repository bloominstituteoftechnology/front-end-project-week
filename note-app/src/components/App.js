import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import {Route, Switch} from 'react-router-dom'; 
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux'; 
import axios from 'axios';

import '../styles/App.css';
import CreateNote from './create-note';
import EditNote from './edit-note';
import ViewAllNotes from './notes';
import FullNote from './FullNote';
import DeleteModal from './delete-note';
import {fetchingNotes, addingNote, updatingNote, deletingNote, selectingNote,searchingNotes} from '../actions'; 
import one from '../images/createNote.png';
import two from '../images/trash.jpg';
import three from '../images/notepad.png';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      select: null,
      images: 
      [
        {alt: "trash of notes img", src: two},
        {alt: "Create Note image", src: three},
        {alt:"Note Pad image", src: one}
      ]
    }
  }

  componentDidMount () {
    this.props.fetchingNotes()
  }

  idGenerator = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  postNote = (noteobj) => {
    this.props.addingNote(noteobj)
  }

  handleNoteSelect = (index) => {
    const select = this.props.notes[index];
    console.log(select)
    this.setState({select: {title: select.title, textBody: select.textBody, index: index, _id: select._id,
    tags: select.tags, __v: select.__v, id: select.id}})
  }

  updateNote = (index, noteObj) => {
    console.log(noteObj)
    this.props.updatingNote(index, noteObj)
  }

  deleteNote  = (index) => {
    this.props.deletingNote(index) 
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  imgClick = event => {
    console.log(event.target)
  }
  imgHover = event => {
    this.state.images.forEach((img, i) => img.src === event.target.src ? console.log(event.target.src, i): false)

  }
  nextClick = () => {
    console.log("clicked")
    const images = this.state.images.slice()
    const last = images.pop()
    images.unshift(last)
    this.setState({images})
  }
  previousClick = () => {
    console.log("previous")
    const images = this.state.images.slice()
    const first = images.shift()
    images.push(first)
    this.setState({images})
  }

  render() {
    console.log(this.props)
    return (
    <Router>
      <div className="App">
        <div className="heading">
          <h3 className= "app-header"><input onChange = {this.handleChange} value = {this.state.search} type="text" placeholder ="&#x1F50D;Search" name = "search" value = {this.state.value}/> <button className ="btn-side-bar">Search</button> </h3>
          <div className = "scene">
            {this.state.images.map(image => <div key = {image.alt} className ="carousel-cell">
              <img /*onMouseOver ={this.imgHover}*/ onClick = {this.imgClick} className = "carousel-img" src={image.src} alt={image.alt}/>
            </div>)}
          </div>
          <button onClick = {this.previousClick} className = "btn-side-bar">Previous</button><button onClick = {this.nextClick} className = "btn-side-bar">Next</button>
          <hr/>
        </div>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition timeout = {500} classNames = 'fade' key = {location.key}>
              <Switch location = {location}>
                <Route exact path ='/' render = {props => <ViewAllNotes {...props} notes = {this.props.notes} click = {this.handleNoteSelect}/>} /> 
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
    </Router>
    );
  }
}

const mapStateToProps = state => {
 return { 
    notes: state.notes,
    addingNote: state.addingNote,
    updatingNote: state.updatingNote,
    deletingNote: state.deletingNote,
    gettingNotes: state.gettingNotes, 
    selecting: state.selecting, 
    error: state.error,
    select: state.select,
    nextId: state.nextId,
 }
}

export default connect(mapStateToProps, {fetchingNotes, addingNote, updatingNote, deletingNote, selectingNote})(App);
