import React,{Component} from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import './noteView.css'


  class NoteView extends Component{
    constructor(props){
        super(props)
        console.log("hilo", this.props.match.params.noteName) 
      
    }
    

render(){
return (
    <div > 
        
        { this.props.notes.map((note,index) =>{ return(
            note.title === this.props.match.params.noteName ? 
          <div className='.NoteView'>
                    <div className="Edit">
                        <Link to={`/EditCurrentNote/${index}`} className='edit'>
                            <div key={index} >Edit</div>
                        </Link>
                        <Link to="alert" className="delete">
                            <div  key={index} >Delete</div>
                        </Link>
                    </div> 
            <div className="noteViewCard">
                < div className="noteViewCard_title">{note.title}</div>
            <div>{note.text}</div>
            </div> 
            </div> 
        : null)} )}                        
        
     </div>
)
}
}
const mapStateToProps = (state)=>{
   console.log("filo", state.notesReducer)
    return {
        notes: state.notesReducer
    }
}
export default connect (mapStateToProps,{})(NoteView)