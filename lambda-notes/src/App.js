import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import Notes from './Notes';
import AddNote from './AddNote';
import Note from './Note';
import EditNote from './EditNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      text: '',
      id: 4
    }
  }

  componentDidMount() {
    const notes = [
      {
        title: 'test 1',
        text: 'test content 1',
        id: 0
      },
      {
        title: 'test 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed lectus quis sapien luctus suscipit. Integer sollicitudin non orci maximus pharetra. Suspendisse lacus orci, blandit et mollis nec, interdum eu lectus. Aliquam ut vulputate ipsum, vitae lacinia magna. Ut tempor quam vitae sodales porta. Suspendisse nec lorem erat. In viverra et augue sit amet bibendum. Phasellus in enim gravida, molestie turpis at, eleifend nisl. Suspendisse non congue elit, finibus ultricies diam. Curabitur lectus eros, dapibus maximus venenatis lobortis, elementum a neque. Nulla facilisi. Sed porta ante ac ante feugiat, vel suscipit justo tincidunt. Cras condimentum ex a erat tincidunt, non lobortis risus vehicula. Etiam efficitur euismod lectus, gravida consequat nunc semper non. Phasellus dapibus sem scelerisque mi efficitur, ac egestas arcu fringilla. Morbi sed ligula mi. Duis laoreet sodales felis, ut dictum tellus tristique sed. Proin et arcu porta libero fermentum malesuada. Duis finibus ante vitae nisi consectetur, eu pharetra magna iaculis. Donec rutrum neque tempus tristique tristique. Integer feugiat tempus nisi sed condimentum. In tristique dui nec dictum fringilla. Proin in aliquet nibh. Vestibulum pharetra vulputate lacinia. Vestibulum cursus pharetra dictum. Proin quis pharetra est. Quisque sit amet luctus ipsum. Aliquam id felis libero. Donec sed libero justo. Suspendisse iaculis, velit in efficitur viverra, nulla eros ultrices sapien, et condimentum mi massa ac neque. Suspendisse euismod cursus eleifend. Praesent sed nulla ut odio porttitor aliquet sed nec ligula. Sed rhoncus risus eu varius accumsan. Ut tempus, tortor nec rutrum semper, dui urna sagittis purus, sed elementum lacus risus at dolor. Curabitur eleifend vulputate nunc eget scelerisque. Suspendisse elementum risus nisl, eget tempor ante vestibulum sit amet. Maecenas sit amet dui eu leo luctus malesuada sed ac ex. Mauris sed condimentum nunc, sit amet bibendum lectus. Suspendisse at velit magna. In lacinia placerat turpis in mollis. Ut aliquet odio purus, vel commodo eros dictum ornare. Fusce id nibh dolor. Pellentesque aliquam, leo eget condimentum maximus, ante nisl pharetra ante, eget posuere leo velit ac risus. Donec non mi vel leo venenatis pulvinar. Mauris ac orci tempus, accumsan velit ut, sodales elit. Nullam sodales purus a urna venenatis, sit amet congue ante euismod. Mauris hendrerit, leo vitae tincidunt placerat, eros mauris rutrum sem, nec eleifend turpis ante eget magna. Praesent gravida urna nibh, a vestibulum justo condimentum in. Donec ac purus vel enim consequat feugiat sed et urna. Sed libero metus, volutpat vel odio sed, fringilla suscipit orci. Duis nec enim vel nunc rutrum mattis. Morbi nulla leo, rhoncus quis molestie a, venenatis vel lorem. Donec sit amet tincidunt diam, imperdiet volutpat est. Donec accumsan arcu ac sapien volutpat, ac scelerisque sem tincidunt. Proin dapibus tempor felis sed aliquam. Nullam eget finibus tellus. Phasellus elementum cursus dolor, ac consequat mi imperdiet at. In sagittis egestas ante sit amet molestie. Sed in velit mauris. Nunc in metus accumsan, mollis nibh in, tristique eros. Mauris nec augue rhoncus, euismod libero quis, fringilla orci. Donec vel elit id dui dignissim condimentum vel viverra arcu. Mauris a dictum elit, id malesuada risus.',
        id: 1
      },
      {
        title: 'test 3',
        text: 'test content 3',
        id: 2
      },
      {
        title: 'test 4',
        text: 'test content 4',
        id: 3
      }
    ];

    this.setState({ notes: notes });
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      text: this.state.text,
      id: this.state.id
    };
    const notes = this.state.notes.slice();
    notes.push(newNote);
    let id = newNote.id + 1;
    this.setState({
      notes: notes,
      title: '',
      text: '',
      id: id
    });
  }

  editHandler = (event) => {
    event.preventDefault();
    const id = parseInt(event.target.id,10);
    let notes = this.state.notes.slice();
    const editedNote = {
      title: this.state.title,
      text: this.state.text,
      id: id
    };
    notes[id] = editedNote;
    this.setState({
      notes: notes,
      title: '',
      text: ''
    });
  }

  deleteHandler = (e, id) => {
    e.preventDefault();
    id = parseInt(id,10);
    const index = this.state.notes.findIndex((note) => {
      return note.id === id;
    })
    let notes = this.state.notes.slice();
    notes.splice(index,1);
    console.log('deleting id ', id);
    console.log('notes ', notes);
    this.setState({
      notes: notes
    });
  }

  render() {
    return (
      <div className="App">
        <div className='body'>
          <Route path='/' component={ Menu } />
          <Route exact path='/' render={props => <Notes {...props} notes={this.state.notes} />} />
          <Route path='/add' render={props => <AddNote {...props} state={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler} />} />
          <Route path='/view/:id' render={props => <Note {...props} notes={this.state.notes} deleteHandler={this.deleteHandler} />} />
          <Route path='/edit/:id' render={props => <EditNote {...props} state={this.state} changeHandler={this.changeHandler} editHandler={this.editHandler} />} />
        </div>
      </div>
    );
  }
}

export default App;
