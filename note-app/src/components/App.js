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
import Rhyme from './Rhyme';
import {fetchingNotes, addingNote, updatingNote, deletingNote, selectingNote,searchingNotes} from '../actions'; 
import one from '../images/createNote.png';
import two from '../images/trash.jpg';
import three from '../images/notepad.png';
import four from '../images/search.jpg';
import five from '../images/rhyme.jpg';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      select: null,
      images: 
      [
        {alt: "trash of notes img", src: two, className: "carousel-img"},
        {alt:"search icon", src: four,className: "carousel-img"},
        {alt:"rhyme", src: five,className: "carousel-img"},
        {alt: "Create Note image", src: one, className: "carousel-img"},
        {alt:"Note Pad image", src: three,className: "carousel-img"}
      ]
    }
  }

  componentDidMount () {
    this.props.fetchingNotes()
    const images = this.state.images.slice()
    const imageLength = images.length -1; 
    images.map((image,i) => i === imageLength ? image.className = "carousel-img active-img" : image.className = "carousel-img nonactive-img")
    this.setState({images})
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
    const images = this.state.images.slice()
    const last = images.pop()
    images.unshift(last)
    console.log(images[images.length-1])
    console.log(images)
    const imageLength = images.length -1; 
    images.map((image,i) => i === imageLength ? image.className = "carousel-img active-img" : image.className = "carousel-img nonactive-img")
    this.setState({images})
  }
  previousClick = () => {
    let images = this.state.images.slice()
    const first = images.shift()
    images.push(first)
    console.log(images)
    console.log(images[images.length-1])
    const imageLength = images.length -1; 
    images.map((image,i) => i === imageLength ? image.className = "carousel-img active-img" : image.className = "carousel-img nonactive-img")
    this.setState({images})
  }

  render() {
    return (
    <Router>
      <div className="App">
        <div className="heading">
          <h3 className= "app-header"> {/* <input onChange = {this.handleChange} value = {this.state.search} type="text" placeholder ="&#x1F50D;Search" name = "search" value = {this.state.value}/> <button className ="btn-side-bar">Search</button> */}</h3>
          <div className = "scene">
            {this.state.images.map(image => <div key = {image.alt} className ="carousel-cell">
              <img /*onMouseOver ={this.imgHover}*/ onClick = {this.imgClick} className = {image.className} src={image.src} alt={image.alt}/>
            </div>)}
          </div>
          <div className ="btns"><button onClick = {this.previousClick} className = "btn-side-bar menu-options"><i className="fas fa-backward"></i></button><button onClick = {this.nextClick} className = "btn-side-bar menu-options"><i className="fas fa-forward"></i></button></div>
          <br/>
          <br/>
          <hr/>
        </div>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition timeout = {500} classNames = 'fade' key = {location.key}>
              <Switch location = {location}>
                <Route exact path ='/' render = {props => <ViewAllNotes {...props} notes = {this.props.notes} click = {this.handleNoteSelect}/>} /> 
                <Route path = '/rhyme-book' render = {props => <Rhyme /> } />
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
