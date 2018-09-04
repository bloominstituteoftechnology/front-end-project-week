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
      notes: [{ id: 0, title: 'Note1' , content: "This is an example note"}, { id: 1, title: 'Note2' , content: "This is an example note2"}, {id: 2, title: 'Note3' , content: "This is an example note3"},  {id: 3, title: 'Note4' , content: "This is an example note4"}],
      delete: false,

    }
  }

  createNewNote(newtitle, newcontent) {
    //console.log('Creating a new note!' + this.state.create)
    // this.state.create = true;
    //this.setState({create:true})
    // console.log('Creating a new note! from inside' + this.state.notes.length)
    // let newNote = {id: 9, title: newtitle, content: newcontent}
    const newArray = [...this.state.notes, {id: 99, title: 'drrgdrrg ', content: 'xdfgdf '}]
    this.setState({notes: newArray});
  }
  componentDidMount(){
    // this.notes.push('this is us')
  }
  render() {
    // console.log(this.state.notes);
    return (
      <div className="App">
        <div>
          <Row>
        <div className = "testing">
        <Col sm='4' >
        
        <h1> Lambda Notes</h1>
        <ButtonToolbar>
          <Row>
                <Link to= {
                                 {
                                   pathname: '/',
                                   
                                 }
                               }>    
               <Button  onClick={() => this.createNewNote()} color="primary" size="lg" >View Your Notes</Button>{' '}
               </Link>
          </Row>
          <Row>
               <Link to= {
                           {
                             pathname: '/notes/true',
                             
                           }
                         }>
                        
               <Button onClick={() => this.createNewNote()}  color="primary" size="lg" >+ Create New Note</Button>{' '}
               </Link>
          </Row>
        </ButtonToolbar>
        </Col>
        </div>
        <Col sm ='8'>
        <Switch>
         <Route exact path='/' render={() => <ListNotes notes={this.state.notes}/>}/>
         {/* <Route exact path='/' render={() => <DeleteNote notes={this.state.notes}/>}/> */}
         {/* <Route exact path = '/notes/true' component = {CreateNote}/> */}
         <Route exact path = '/notes/true' component = {() => <CreateNote createNote={this.createNewNote}/>}/>
         {/* <Route component={() => <ChildComponent methodToPass={this.state.method}/> */}
         <Route exact path = '/notes/edit' component = {EditNote}/>
         {/* <Switch><Route path={`notes/${Note.id}`} render={(note) => <Note {...note}/>}/> */}
         {/* <Route exact path='/' render={() => <ListNotes notes={this.state.notes}/>}/> */}
         <Route path={`/notes/:id`} component = {Note} />
         </Switch>
         {/* <ListNotes notes={this.state.notes}></ListNotes> */}
         {/* <Route exact path ={`/notes/${note.id}`} render={(note) => <Note {...note}/>}/> */}
         {/* </Switch> */}
         </Col>
         </Row>
        </div>
      </div>
    );
  }
}

export default App;
