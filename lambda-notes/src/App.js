// Libraries
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import firebase from '../src/components/firebase';
import styled from 'styled-components'

// Components
import Sidebar from '../src/components/Sidebar'
import Content from '../src/components/Content'
import DeleteOverlay from './components/DeleteOverlay';
import {initialDataArr} from '../src/initialData';

// CSS
import './App.css';
import {bgColorPrimary, bgColorSecondary, borderColor} from '../src/components/css/Globals'

const MainContainer = styled.div`
  background-color: ${bgColorPrimary};
  border: 1px solid ${borderColor};
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  position:relative;
`

const SidebarStyled = styled(Col)`
  /* height:100vh; */
`
const ContentStyled = styled(Col)`
  background-color: ${bgColorSecondary};
  height:100%;
  border-left: 1px solid ${borderColor};
`

//Initialize a global reference to the RT DB on Firebase
const notesRef = firebase.database().ref('notes')

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes : [],
      deleteNote: {
        deleting:false,
        id:0,
      }
    }
  }
  
  componentDidMount(){
    // Run this to initialize the database only runs once ever!!
    // this.initializeFireBaseData()

    //Listen for changes to any value in the FB RT DB reference
    notesRef.on('value', (snapshot) => {

      if (snapshot.val){
        // Since firebase stores object, we need to convert it to an array of object to work with our architecture
        let notes = Object.entries(snapshot.val()).map( entry => entry[1])

        //Set state shorthand, when the key name is the same as the name of the value variable
        this.setState({notes})  
      }

    });
  }

  initializeFireBaseData = () => {
    initialDataArr.forEach(obj => {
      let noteKey = notesRef.push() // Blank slot waitin to be filled
      console.log(noteKey)
      noteKey.set({ // set the blank slot 
        id: noteKey.key, // access the key of the slot
        title:obj.title,
        tags:obj.tags,
        textBody:obj.textBody
      })
    })
  }

  saveNewNote = (noteTitle, noteTextBody) => {    
    let newNoteInFB = notesRef.push()

    let newNote = {
      "id": newNoteInFB.key,
      "tags": ["tag", "doctor4"],
      "title": noteTitle,
      "textBody":noteTextBody
    }
    
    newNoteInFB.set(newNote)

  }

  editNote = (id, title, textBody) => {
    //Reference the id and then call update on the field, via shorthand
    notesRef.child(id).update({title})
    notesRef.child(id).update({textBody})
  }

  onDeleteLinkClick = (id) => {
    this.setState({
      deleteNote: {
        deleting:true,
        id:id,
      }
    })
  }

  deleteNoteClick = () => {

    notesRef.child(this.state.deleteNote.id).remove()
    this.deletingCompleted()
  }

  deletingCompleted = () =>{
    this.setState({
      deleteNote: {
        deleting:false,
        id:0,
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        {(this.state.deleteNote.deleting) ? <DeleteOverlay deletingCompleted={this.deletingCompleted} deleteNoteClick={this.deleteNoteClick}/> : null}
      <MainContainer>
        <Container>
          <Row>
            <SidebarStyled md="3"><Sidebar/></SidebarStyled>
            <ContentStyled md="9">
              <Container>
                <Content notes={this.state.notes} saveNewNote={this.saveNewNote} editNote={this.editNote} onDeleteLinkClick={this.onDeleteLinkClick} />
              </Container>
            </ContentStyled>
          </Row>
        </Container>
      </MainContainer>
      </React.Fragment>
    );
  }
}

export default App;
