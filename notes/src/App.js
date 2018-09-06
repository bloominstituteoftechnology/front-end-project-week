import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';

import ListNotes from './Components/listnotes';
import './App.css';
import { Row, Col, Button, ButtonToolbar} from 'reactstrap';
import Note from './Components/note'
import EditNote from './Components/editnote';
import CreateNote from './Components/createnote';
import {Link} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    notes: [{ id: 0, title: 'Note1' , content: "This is an example note1"}, 
            { id: 1, title: 'Note2' , content: "This is an example note2"}, 
            { id: 2, title: 'Note3' , content: "This is an example note3"},  
            { id: 3, title: 'Note4' , content: "This is an example note4"},
            { id: 4, title: 'Note5' , content: "This is an example note5"}, 
            { id: 5, title: 'Note6' , content: "This is an example note6"}, 
            { id: 6, title: 'Note7' , content: "This is an example note7"},  
            { id: 7, title: 'Note8' , content: "This is an example note8"},   
            { id: 8, title: 'Note9' , content: "This is an example note9"}, 
            { id: 9, title: 'Note10' , content: "This is an example note10"},
            { id: 10, title: 'Note11' , content: "This is an example note11"},  
            { id: 11, title: 'Note12' , content: "This is an example note12"}
    ],
      delete: false,

    }
  }

  createNewNote = (newtitle, newcontent) => {
    const newArray = [...this.state.notes, {id: this.state.notes.length + 1, title: newtitle, content: newcontent}]
    this.setState({notes: newArray});
  }
  editNote = (id, newtitle, newcontent) => {
    let noteindex = this.state.notes.findIndex(i => i.id === id)
    let replaced = this.state.notes.splice(noteindex, 1,{id, title: newtitle, content: newcontent});
    this.setState({replaced});
  }
  deleteNote = (noteid) => {
    let noteindex = this.state.notes.findIndex(i => i.id === noteid)
    this.state.notes.splice(noteindex, 1);
    this.setState(this.state.notes);
  }
  componentDidMount(){
  }
  render() {
    return (
      <div className="App">
        <div className = 'app-container'>
          <Row>
        <div className = "testing">
        <Col sm='4' >
        
        <h1> Lambda Notes</h1>
          <Row>
            <Link to ={
                       {
                         pathname: '/'
                       }
                      }>    
              <Button color="info" size="lg" >View Your Notes</Button>
            </Link>
          </Row>
          <Row>
               <Link to= {
                           {
                             pathname: '/notes/true',
                             
                           }
                         }>
                        
               <Button  color="info" size="lg" >+ Create New Note</Button>{' '}
               </Link>
          </Row>
        </Col>
        </div>
        <Col sm ='8'>
        <h3>
        Your Notes:
        </h3>
        
        <Switch>
         <Route exact path='/' render={() => <ListNotes notes={this.state.notes} deletenote={this.deleteNote} editnote={this.editNote}/>}/>
         <Route exact path = '/notes/true' component = {() => <CreateNote createNote={this.createNewNote}/>}/>
         <Route exact path = '/notes/edit' component = {EditNote}/>
         <Route path={`/notes/:id`} component = {Note} />
         </Switch>
         </Col>
         </Row>
        </div>
      </div>
    );
  }
}

export default App;
