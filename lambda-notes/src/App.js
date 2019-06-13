import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NotesList from './Components/NotesList';
import CreateNoteForm from './Components/CreateNoteForm';
import Note from './Components/Note';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import EditNote from './Components/EditNote';
import host from './host';
import Register from './Components/Register';
import Login from './Components/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      noteEntries: [
        // {
        //   title: 'bleep',
        //   textBody: `Lorem ipsum dolor sit amet,liquam odio ac lorem bibendum, in fermentum elit hendrerit. Inte.`,
        //   tags: ['one', 'two', 'three'],
        //   id: 1
        // }, 
        // {
        //   title: 'bleep',
        //   textBody: `Lorem ipsum dolor sit amet,liquam odio ac lorem bibendum, in fermentum elit hendrerit. Inte.`,
        //   tags: ['one', 'two', 'three'],
        //   id: 2
        // }

      ],

      noteEntry: {
        title: '',
        textBody: '',
        tags: [],
        id: ''
      }
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    const userId = localStorage.getItem('lambdaNotesUserId');
    const userEndpoint = `${host}/api/users/${userId}`;

    axios.get(`${userEndpoint}/noteEntries`)
      .then(res => {
        console.log('res: ', res);
        const noteEntries = res.data;
        this.setState({noteEntries:noteEntries})
      })
      .catch(err => {
        console.log('err: ', err)
      })
    }


  // addNoteEntry = (e) => {
  //   e.preventDefault();
  //   const noteEntries = this.state.noteEntries.slice();
  //   const noteEntry = {
  //     title: this.state.noteEntry.title[0],  // zero here because this is registering as an array without it when I add. don't know why!
  //     textBody: this.state.noteEntry.textBody[0], // zero here because this is registering as an array without it when I add. don't know why!
  //     tags: [],
  //     id: this.state.noteEntries.length+1
  //   }

  //   const noteEntryBlank = {
  //     title: '',
  //     textBody: '',
  //     tags: [],
  //     id: ''
  //   }

  //   noteEntries.push(noteEntry);
  //   this.setState({ noteEntries: noteEntries, noteEntry: noteEntryBlank })
  // }

  addNoteEntry = (e) => {
    // e.preventDefault();
    const userId = localStorage.getItem('lambdaNotesUserId');
    const userEndpoint = `${host}/api/users/${userId}`;

    const noteEntry = {
      userId: localStorage.getItem('lambdaNotesUserId'),
      title: this.state.noteEntry.title[0],  // zero here because this is registering as an array without it when I add. don't know why!
      textBody: this.state.noteEntry.textBody[0], // zero here because this is registering as an array without it when I add. don't know why!
    };
    console.log(localStorage.getItem('lambdaNotesUserId'))
    const noteEntryBlank = {
      title: '',
      textBody: ''
    };

    axios
      .post(`${host}/api/noteEntries`, noteEntry)
      .then(res => {
        console.log('res: ', res)
        axios.get(`${userEndpoint}/noteEntries`)
        .then(res => {
          console.log('res: ', res);
          const noteEntries = res.data;
          this.setState({noteEntries:noteEntries})
        })
        .catch(err => {
          console.log('err: ', err)
        })
      })
      .catch(err => {
        console.log(err)
      })
    
    this.setState({noteEntry: noteEntryBlank })
  }

  // editNoteEntry = (e, ID) => {
  //   // e.preventDefault();
  //   const noteEntries = this.state.noteEntries.slice();
  //   const noteEntry = {
  //     title: this.state.noteEntry.title[0],  // zero here because this is registering as an array without it when I add. don't know why!
  //     textBody: this.state.noteEntry.textBody[0], // zero here because this is registering as an array without it when I add. don't know why!
  //     tags: [],
  //     id: ID
  //   }

  //   const noteEntryBlank = {
  //     title: '',
  //     textBody: '',
  //     tags: [],
  //     id: ''
  //   }

  //   noteEntries[`${ID}`-1] = noteEntry;

  //   this.setState(()=>({ noteEntries: noteEntries, noteEntry: noteEntryBlank }))
  // }
  
  editNoteEntry = (e, ID) => {
    // e.preventDefault();
    const userId = localStorage.getItem('lambdaNotesUserId');
    const userEndpoint = `${host}/api/users/${userId}`;

    const noteEntry = {
      id: ID,
      userId: localStorage.getItem('lambdaNotesUserId'),
      title: this.state.noteEntry.title[0],  // zero here because this is registering as an array without it when I add. don't know why!
      textBody: this.state.noteEntry.textBody[0], // zero here because this is registering as an array without it when I add. don't know why!
    }

    const noteEntryBlank = {
      title: '',
      textBody: ''
    }

    axios
      .put(`${host}/api/noteEntries/${ID}`, noteEntry)
      .then(res => {
        console.log('res: ', res)
        axios.get(`${userEndpoint}/noteEntries`)
          .then(res => {
            console.log('res: ', res);
            const noteEntries = res.data;
            this.setState({noteEntries:noteEntries})
          })
          .catch(err => {
            console.log('err: ', err)
          })
      })
      .catch(err => {
        console.log(err)
      })

    this.setState(()=>({noteEntry: noteEntryBlank }))
  }

  // deleteNoteEntry = (e,ID) => {
  //   const noteEntries = this.state.noteEntries.slice();
  //   noteEntries.splice(ID-1,1);

  //   for (let i = 0; i< noteEntries.length; i++) {
  //     noteEntries[i].id=i+1
  //   }

  //   const noteEntryBlank = {
  //     title: '',
  //     textBody: '',
  //     tags: [],
  //     id: ''
  //   }

  //   this.setState(()=>({ noteEntries: noteEntries, noteEntry: noteEntryBlank }))
  // }

  deleteNoteEntry = (e,ID) => {
    const userId = localStorage.getItem('lambdaNotesUserId');
    const userEndpoint = `${host}/api/users/${userId}`;

    axios
      .delete(`${host}/api/noteEntries/${ID}`)
      .then(res => {
        console.log('res: ', res);
        axios.get(`${userEndpoint}/noteEntries`)
          .then(res => {
            console.log('res: ', res);
            const noteEntries = res.data;
            this.setState({noteEntries:noteEntries})
          })
          .catch(err => {
            console.log('err: ', err)
          })
      })
      .catch(err => {
        console.log('err: ', err);
      })

    const noteEntryBlank = {
      title: '',
      textBody: '',
    }

    this.setState(()=>({noteEntry: noteEntryBlank }))
  }

  createNoteTitleHandler = e => {
    console.log(e.target.value);

    this.setState({
      noteEntry: {
        title: [e.target.value],
        textBody: this.state.noteEntry.textBody,
        tags: this.state.noteEntry.tags
      }
    })
  }

  createNoteTextBodyHandler = e => {
    console.log(e.target.value);

    this.setState({
      noteEntry: {
        title: this.state.noteEntry.title,
        textBody: [e.target.value],
        tags: this.state.noteEntry.tags
      }
    })
  }


  render() {
    return (
      <AppContainerStyledDiv>

        {/* <Register /> */}
        {/* <Login /> */}

        {/* SIDEBAR COMPONENT */}
        <Route path="/" component={SideBar} />


        {/* NOTES LIST COMPONENT */}
        <Route exact path="/" render={() =>
          <RightHandSideContainerStyledDiv>
            <NotesList
              noteEntries={this.state.noteEntries} />
          </RightHandSideContainerStyledDiv>
        } />

        {/* CREATE NOTE COMPONENT */}
        <Route path="/createNote" render={() =>
          <RightHandSideContainerStyledDiv>
            <CreateNoteForm
              createNoteTitleHandler={this.createNoteTitleHandler}
              createNoteTextBodyHandler={this.createNoteTextBodyHandler}
              addNoteEntry={this.addNoteEntry}
              noteEntry={this.state.noteEntry}
            />
          </RightHandSideContainerStyledDiv>
        }
        />

        {/* EDIT NOTE COMPONENT */}
        <Route path = "/editNote/:id" render ={(match) =>
          <RightHandSideContainerStyledDiv>
            <EditNote
              noteEntries = {this.state.noteEntries}
              createNoteTitleHandler={this.createNoteTitleHandler}
              createNoteTextBodyHandler={this.createNoteTextBodyHandler}
              editNoteEntry={this.editNoteEntry}
              noteEntry={this.state.noteEntry}
              match = {match} {...this.props}
            />
          </RightHandSideContainerStyledDiv>
        } />

        {/* VIEW NOTE COMPONENT */}
          <Route path="/note/:id" render={(match) =>
            <RightHandSideContainerStyledDiv>
              <Note
                noteEntries={this.state.noteEntries}
                match = {match} {...this.props}
                deleteNoteEntry = {this.deleteNoteEntry}
              />
            </RightHandSideContainerStyledDiv>
          } />
      </AppContainerStyledDiv>
    );
  }
}

export default App;



const AppContainerStyledDiv = styled.div`
  display:flex;
  width: 900px;
  border: 1px solid #979797;
  margin-left:6px;
  margin-right:6px;
`

const RightHandSideContainerStyledDiv = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 680px;
  background-color: #F3F3F3;
  padding-left:15px;
  padding-right:15px;
  padding-bottom:15px
`