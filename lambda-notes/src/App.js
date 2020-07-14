import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';


import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteView from './components/NoteView';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote'


class App extends Component {
  state={
    notes: [],
    title: '',
    content: ''
  }

  componentDidMount(){ 
    axios
      .get('http://localhost:9000/api/notes')
      .then(response => {
          this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
          console.error('SERVER ERROR', error)
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addNote = event => {
    event.preventDefault();
    axios.post('http://localhost:9000/api/notes', {"title": this.state.title, "content": this.state.content})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('SERVER ERROR', error)
    });
    this.setState({title: '', content: ''});
  }

  

  render(){
    console.log(this.state.notes);
    return(
      <div className='App'>
          <Nav/>
          <Route path='/notes' render={props => <NoteList {...props}  state={this.state} notes={this.state.notes} />} />
          <Route path='/create' render={props => <CreateNote {...props} title={this.state.title} content={this.state.content}  handleChange={this.handleChange} addNote={this.addNote}  />} />
          <Route path='/notes/:id' render={(props) => (<NoteView {...props} />)} />
          <Route path='/notes/:id/edit' render= {(props) => (<EditNote {...props} />)}/>
      </div> 
    ) 
  }
}


export default App;