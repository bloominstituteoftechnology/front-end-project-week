import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'; 

import '../styles/App.css';
import SideBar from './side-bar';
import CreateNote from './create-note';
import EditNote from './edit-note';
import ViewAllNotes from './notes';
import FullNote from './FullNote';
import DeleteModal from './delete-note';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [{title: "Test 0", content: "Lorem ipsum dolor sit amet, consecteture adipiscising elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultrices arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipusum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit acpurus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc Fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl. "},
      {title: "Test 1", content: "Lorem ipsum dolor sit amet, consecteture adipiscising elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultrices arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipusum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit acpurus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc Fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl. "},
      {title: "Test 2", content: "Lorem ipsum dolor sit amet, consecteture adipiscising elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultrices arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipusum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit acpurus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc Fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl. "},
      {title: "Test 3", content: "Lorem ipsum dolor sit amet, consecteture adipiscising elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultrices arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipusum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit acpurus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc Fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl. "},
      ],
      currentTitle: null,
      currentContent : null,
      currentIndex: null
    }
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
          <h3 className= "app-header">List View</h3>
          <hr/>
        </div>
        {/* <div className = "main-container"> */}
          {/* <SideBar /> */}
          <Switch>
            <Route exact path ='/' render = {props => <ViewAllNotes {...props} notes = {this.state.notes} click = {this.handleNoteSelect}/>} /> 
            <Route path = '/create-note'  render = {props => <CreateNote {...props} create = {this.createNote}/>} />
            <Route path = '/:id/edit-note' render = {props => <EditNote {...props} update = {this.updateNote} /> } />
            <Route path = '/:id/delete-note' render = {props => <DeleteModal {...props} select = {this.handleNoteSelect} delete = {this.deleteNote}/>} />
            <Route path = '/:id' render = {props => <FullNote  {...props} ct = {this.state.currentTitle} cc = {this.state.currentContent} index = {this.state.currentIndex} /> } />
          </Switch>
          
        </div>
        
      // </div>
    );
  }
}

export default App;
