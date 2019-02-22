import React from 'react';
import NoteContainer from './Containers/NoteContainer';
import CreateNew from './Views/CreateNew';
import NoteView from './Views/NoteView';
import EditNote from './Views/EditView';
import { Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  height:100vh;
`
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      notes: null,
      note: {
        title: "",
        textBody: ""
      },
      isLoaded: false
    }
  }

  componentDidMount(){
    console.log(this.state.notes)
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => {
      console.log(res.data)
        this.setState({
          notes: res.data,
          isLoaded: true
        })
    })
    .catch(err => console.log(err))
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({ note: {...this.state.note, [event.target.name]: event.target.value}})
  }
  editNoteFromServer = (note,id) => {
    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(res => {
      this.setState(currentState => {
        let newArray = currentState.notes.map(item =>
          {
            if(item.id === id){
              return res.data
            }else{
              return item
            }
          });
        return {notes: newArray}
      })
      axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => {
        this.setState({
          notes: res.data,
          isLoaded: true
        })
      })
    })
    .catch(err => console.log(err))
  }

  editNote = (note, id) => {
    this.editNoteFromServer(note,id);
  }

  deleteNoteFromServer = id => {
    axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(res => {
      console.log('res.data:', res.data)
      axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => {
        this.setState({
          notes: res.data,
          isLoaded: true
        })
      })
    })
    .catch(err => console.log(err))
  }

  deleteNote = id => {
    this.deleteNoteFromServer(id)
  }


  addNewNoteToServer = (note) => {
    axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(res => {
      this.setState( prevState => ({
        notes: [ ...prevState.notes, note]
      }))
    })
    .catch(err => console.log(err))
  }

  addNewNote = (note) => {
    this.addNewNoteToServer(note)
  }
  render() {
    const { isLoaded, notes } = this.state;
    return (
      <AppContainer>
      { isLoaded ?
        [ <Route exact path="/"
          render={(props) =>
          <NoteContainer {...props}
          notes={notes}
          />}/>,
          <Route path='/note/:id'
          render={(props) =>
          <NoteView {...props} deleteNote={this.deleteNote}
          />}
        />] :
        <div>Loading</div>
      }
        <Route path='/create-new'
        render={(props) => <CreateNew {...props} newNote={this.addNewNote}/>}
        />
        <Route path='/edit/:id' render={(props) => <EditNote {...props} note={this.state.note} editNote={this.editNote} handleInput={this.handleInput}/>}/>



      </AppContainer>
    );
  }
}

export default App;
