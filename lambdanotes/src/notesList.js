import React,{Component} from "react";
import {connect} from 'react-redux';
import { addNoteActionCreator} from "./allActions";
import { Route, Link } from 'react-router-dom';
import NoteView from './notView';

class NotesList extends Component{
    constructor(props){
         super(props)

        this.state={
            title:'',
            text:'',
         }
        }

 render(){

  return ( 
     <div className="AllNotes">
       <p>Your Notes:</p>
       <div className="NotesSection">      
                {this.props.notes.map((note,index) =>{ return(                   
                          <div className="Notes"key={index }> 
                          <Link to={`/${note.title}`} className="edit">
                          <div className="NoteTitle" >{note.title}</div>
                          </Link>
                          <div  className=" NoteText" >{note.text}</div>
                          </div>                  
            )})} 
       </div>             
      </div>
  )
 }
}
const mapStateToProps = (state)=>{
 console.log('state',state.notesReducer)
      return {
       notes: state.notesReducer,
    }
}
export default connect(mapStateToProps, {addNoteActionCreator})(NotesList)