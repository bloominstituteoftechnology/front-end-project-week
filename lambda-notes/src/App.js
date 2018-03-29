import React, { Component, Fragment } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom'
import NoteContainer from './components/NoteContainer';
import allNotes from './dummyData';
import EditNote from './components/EditNote';

class App extends Component {
  state = {
    neededData: [],
    isHidden: false
  }

  componentDidMount() {
    this.setState( {neededData: allNotes} );
  }

  handleViewNoteClick() {
    this.setState( {isHidden: !this.state.isHidden} )
  }

  noteView = (props) => {
    const note = this.state.neededData.filter(note => note.id === +props.match.params.id)
    return <NoteContainer {...props} note={note[0]} />
  }

  editView = (props) => {
    const note = this.state.neededData.filter(note => note.id === +props.match.params.id)
    return <EditNote {...props} note={note[0]} />
  }

  render() {
    const {isHidden} = this.state;
    if (isHidden) {
      return (
      
      <Fragment>

        

      <div className="Lambda Notes App">

          
        
          <Route path="/" render={(props) => <NavBar {...props} onClick={this.handleViewNoteClick.bind(this)} />}/>  
          <Route path="/viewnotes" render={(props) => <NotesList {...props} needed={this.state.neededData} />}/>
          <Route path="/CreateNote" render={(props) => <CreateNote {...props} />}/> 
          <Route path="/notes/:id" render={this.noteView} />
          <Route path="/EditNote/:id" render={this.editView} />
          <Route path="/DeleteNote/:id" render={this.noteView} /> 

          
      </div>

      
    </Fragment>
      )
    }
    return (

      
      
      <Fragment>

        

        <div className="Lambda Notes App">

            
          
            <Route path="/" render={(props) => <NavBar {...props} onClick={this.handleViewNoteClick.bind(this)} />}/>  
            <Route path="/viewnotes" render={(props) => <NotesList {...props} needed={this.state.neededData} />}/>
            <Route path="/CreateNote" render={(props) => <CreateNote {...props} />}/> 
            <Route path="/notes/:id" render={this.noteView} />
            <Route path="/EditNote/:id" render={this.editView} />
            <Route path="/DeleteNote/:id" render={this.noteView} /> 

            <div className="Greeting">Welcome To Lamda Notes!</div>
            
        </div>

        
      </Fragment>
    );
  }
}
export default App;
