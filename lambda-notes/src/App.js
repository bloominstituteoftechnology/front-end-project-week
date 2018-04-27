import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import NotesList from '../src/Components/NotesList';
import CreateNote from './Components/CreateNote';
// import CreateNote from '../src/Components/CreateNote';
import './App.css';
import Note from './Components/Note';
import NoteCard from './Components/NoteCard';
import EditNote from './Components/NoteCard';




 

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [{
        title: 'Hello',
        body: 'World'
      }]
  };
    
  }

  // componentDidMount() {
  //   this.setState({notes})
  // }

  addToNotesList = note => {
    //console.log(note);
     const notes = this.state.notes;
     //console.log(notes)
     notes.push(note);
     this.setState({notes, newNoteTitle: '', newNoteBody: ''});
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="leftbox">
              <h3 className="title">Lambda</h3>
              <h3 className="title">Notes</h3>
                <Link to='/'>
                  <button className ="Buttons">View Your Notes</button>
                </Link>
                <Link to='/CreateNote'>
                  <button className ="Buttons">+ Create New Note</button>
                </Link>
            </div>
          </div>
          <div className="col-9">
            <div className="rightbox">
                <h3>Your Notes:</h3>
              <Switch>
                <Route exact path='/'  render={(props) => <NotesList {...this.state}/>} />
                <Route path='/NotesList'  render={(props) => <NotesList {...this.state}/>} />
                <Route path='/CreateNote'  render={(props) => <CreateNote {...props} addToNotesList={this.addToNotesList}/>} />
                {/* <Route path='/' component={NotesList}/> */}
                {/* <Route path='/EditNote' component={EditNote}/>  */}
                {/* <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList}/>} /> */}
                <Route path="/NoteCard/:title" render={(props) => <NoteCard {...props} title={this.state.notes.title} body={this.state.notes.body}/>} />
                <Route path="/Note/" render={(props) => <Note {...props} title={this.state.notes.title} body={this.state.notes.body}/>} />
                <Route path="/EditNote/:title" render={(props) => <EditNote {...props} title={this.state.notes.title} body={this.state.notes.body}/>} />
                
                 {/* <Route path="/Note/" component={Note}/> */}
                {/* <Route path="/user/:title" component={User}/> */}
                {/* when none of the above match, <NoMatch> will be rendered */}
                {/* <Route component={NoMatch}/> */}
              </Switch>
            </div>
          </div>
        </div>
      </div> // container!!!
    );
  }
}

export default App;
