import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import { connect } from 'react-redux';
import { addNote } from '../actions';

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

  // noteView(id) {
  //   this.props.history.push(`/note-view/${id}`)
  // }

render() {
     return (
        <div className="container-fluid main">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
        <div className="indColHolder">
          <div className="titleContainer">
            <div > <h1 className="mainTitleTop"> Lambda </h1> </div>
            <div className="botTitleDiv" > <h1 className="mainTitleBot"> Notes </h1> </div>
          </div>
        
          <div className="row buttCont">
           <div className="col-xs-12 col-sm-6 col-md-12 butDiv"> <button className="button"> View Your Notes </button> </div>
      
          
           <div className="col-xs-12 col-sm-6 col-md-12 butDiv"> <button className="button" onClick={()=> {this.createNoteRoute()}}>Create New Notes</button> </div>
         </div>

        </div>
        </div>

        <div className="col-md-9 col-sm-12 noteCardCol">
       
         
         <div className="listContainer">  
         <div className="listTitle"> <h4> Your Notes: </h4> </div> 
        <div className="row listRow">
          {this.props.notesList.map((note, i)=> {
            return (
            
       <div key={i} className="col-sm-6 col-md-4 col-lg-4"><NoteCard id={note.id} title={note.title} note={note.note}/> </div> 
            ) 
          })}  
        </div>
         </div>     
          {console.log(this.props.notesList)}
          
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

export default connect(mapStateToProps, { addNote })(withRouter(NotesList));