import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

import { connect } from 'react-redux';


import NoteView from '../components/NoteView';
import NoteCard from '../components/NoteCard';

import './NoteList.css';

class NotesList extends Component {
  constructor(props) {
    super(props);
    
  }  



  createNoteRoute() {
    this.props.history.push("/create-note");
  }

  viewNotesRoute() {
    this.props.history.push("/");
  }

  noteView(i) {
    this.props.history.push(`/note-view/${i}`)
  }

render() {
     return (
        <div className="container-fluid">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
          <div className="titleContainer">
            <div > <h1 className="mainTitleTop"> Lambda </h1> </div>
            <div className="botTitleDiv" > <h1 className="mainTitleBot"> Notes </h1> </div>
          </div>
        
           <div> <button className="button"> View Your Notes </button> </div>
      
          
           <div> <button className="button" onClick={()=> {this.createNoteRoute()}}>Create New Notes</button> </div>
         
        </div>
       
        <div className="col-md-9 col-sm-12 noteCardCol">
       
         
         <div className="listContainer">  
         <div className="listTitle"> <h4> Your Notes: </h4> </div> 
        <div className="row">
          {this.props.notesList.map((note, i)=> {
            return (
       <div key={i} onClick={()=>{this.noteView(i)}} className="col-sm-6 col-md-4"> <NoteCard id={i} title={note.title} note={note.note}/> </div> 
            ) 
          })}  
        </div>
         </div>     

          
        </div>
      </div> 
    </div> // end of container 


            
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    notesList: state.notesList,
  }
}

export default connect(mapStateToProps)(withRouter(NotesList));