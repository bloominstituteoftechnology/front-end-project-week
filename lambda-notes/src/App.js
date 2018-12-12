import React, { Component } from 'react';
import axios from 'axios';
import NotesContainer from './components/notes-container/NotesContainer';
import SidebarContainer from './components/sidebar/SideBarContainer';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';



const ContainerWrap = styled.div `
width: 100%;
height:auto;
display: flex;
flex-direction: row;
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote:'',
      newTitle:'',
      note:null,
      editedNote:'',
      editedTitle:'',
      noteId:null,
   
       };
    };
  
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/notes`)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
     
  }
  //SAVE NEW NOTE-----------------------------------
  addNewNote = event => {
    event.preventDefault();
    axios     
    .post(`http://localhost:5000/api/create`,  
    {
      content: this.state.newNote,
      title: this.state.newTitle,
    })
    .then(response => {
      this.setState((prevState) => ({ 
        notes:[...prevState.notes, {content: prevState.newNote,
          title: prevState.newTitle,}],
        newNote:'',
        newTitle:'',
      }));
      })

    .catch(error => {
      console.error('Server Error', error);
    });
    }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //EDIT NOTE---------------------------------------
  fetchNote = id => {
    axios
      .get(`http://localhost:5000/api/notes/${id}`)
      .then(response => {
        console.log(response.data)
        this.setState(() => ({ note:response.data}));
      //  this.setState((prevState) => ({ notes:[...prevState.notes, response.data]}));
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  editNote = (event,id) => {
    event.preventDefault();
    axios     
    .put(`http://localhost:5000/api/notes/${id}`,  
    {
      title: this.state.editedTitle,
      content: this.state.editedNote,
    })

    .then(response => {
      this.setState((prevState) => ({ 
        notes:[...prevState.notes, {content: prevState.editedNote,
          title: prevState.editedTitle,}],
      }));
      })


    .catch(error => {
      console.error('Server Error', error);
    });
    }

  //DELETE NOTE-------------------------------------
  
  deleteNote = (event, id) => {
    axios
      .delete(`http://localhost:5000/api/notes/${id}`)
      .then(response => {
        console.log(response)
        const updatedArray= this.state.notes.filter(note => {
          if (id === note.id) {
            return false;
          } else {
            return true;
          }
        })
        this.setState(() => ({ notes:updatedArray }));
        //window.location.reload()
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <ContainerWrap>
      <SidebarContainer/>
      <NotesContainer 
      notes={this.state.notes} 
      deleteNote={this.deleteNote}
      addNewNote={this.addNewNote}
      newTitle= {this.state.newTitle}
      newNote={this.state.newNote}
      singleNote={this.state.note}
      editedTitle={this.state.editedTitle}
      editedNote={this.state.editedNote}
      handleInputChange={this.handleInputChange}
      fetchNote={this.fetchNote}
      editNote={this.editNote}
      />
      </ContainerWrap>

    );
  }
}

export default App;


  