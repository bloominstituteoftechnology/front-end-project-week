import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from "./notesList"
import AddNewNote from './addNewNote';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route,Link} from 'react-router-dom';
import { addNoteActionCreator } from "./allActions";
import {connect} from 'react-redux'

class App extends Component {
  constructor(props){
    super(props)
    
    this.state={

    }
  }


  render() {
    
    return (
      <Router>
          <div className="App">
              <div className="LambdaNotes"> 
                 <div className="LambdaNotes_p">
                    Lambda
                     Notes               
                  </div>
                  <Link to="/">
                 <button>View Your Notes</button>
                  </Link>
                 <Link to="/NewNote">
                 <button> + Create New Note</button>
                 </Link>
                </div>
               <div className="NotesList">              
                <Route  path="/" exact  component={NotesList}/>
              </div>
             <div>
              <Route  path="/NewNote" exact component={AddNewNote}/>  
            </div>     
          </div>
      </Router>
    );
  }
}
 const mapStateToProps =(state)=>{
  
  
   return{
     
   }
 }
export default connect(mapStateToProps, addNoteActionCreator)(App);
