import React,{Component} from "react";
import {connect} from 'react-redux';
import { addNoteActionCreator} from "./allActions";

class NotesList extends Component{
    constructor(props){
         super(props)
console.log('h',props)
        this.state={
            title:'',
            text:'',
         }
        }
componentDidMount = () => {
   
 }
 
 render(){

  return ( 
     <div className="AllNotes">
       <p>Your Notes:</p>
       <div className="NotesSection">      
                {this.props.notes.map((note,index) =>{ return(
                    <div className="Notes"key={index + note.title}> 
                    <div className="NoteTitle" >{note.title}</div>
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