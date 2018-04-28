import React,{Component} from "react";
import {connect} from 'react-redux';
import { addNoteActionCreator, filterNotesActionCreator } from "./allActions";
import { Route, Link } from 'react-router-dom';
import NoteView from './notView';







class NotesList extends Component{
    constructor(props){
         super(props)

        this.state={
            title:'',
            text:'',
            search:'',
            divStyle:true
         }
        }
searchHandler = (event)=>{
    this.setState({[event.target.name]:event.target.value})
}
 render(){
    //  let divStyle={
    //      display:!'none'
    //  }
   
// let filteredNotes = this.props.notes.filter((note)=>{
// return note.title.toLowerCase().indexOf(this.state.search) !== -1;
// })

let filterNotesAction =()=>{

    
    return this.state.search;
}
  return ( 
     <div className="AllNotes">
        <input  className='FilterInput'
                type="text"
                placeholder='Search for a note'
                name='search'
                value={this.state.search}
                onChange={this.searchHandler}
        />
          <button className="SearchButton !important" onClick={ () =>{filterNotesAction(); this.setState({ search:''})}} >Back</button>             
       <p>Your Notes:</p>     
           {/* {this.props.notes.map((note, index) => {
               console.log('index',index)
               console.log('note',note)
              {
                  if ( filterNotesAction() === note.title) {
                      divStyle.display = !divStyle.display;
                      return (
                         
                          <div className="Notes"  >
                              <div className="NoteTitle" key={note.title} >{note.title}</div>
                              <div className=" NoteText" key={"index"} >{note.text}</div>
                          </div>
                      )
                   }
                else {
                      
                }
              } 
         
 })}                             */}
          {/* <div className="NotesSection" style={divStyle}>      
                {this.props.notes.map((note,index) =>{ 
                 return(                   
                          <div className="Notes"key={index }> 
                          <Link to={`/${note.title}`} className="edit">
                          <div className="NoteTitle" key={note.title} >{note.title}</div>
                          </Link>
                          <div  className=" NoteText" key={"note.text"} >{note.text}</div>
                          </div>                  
            )})} 
           </div> */}


          <div className="NotesSection" > 
          {
             this.state.search === "" &&
              this.props.notes.map((note, index) => {
                if (note  === null || note === undefined){
                      return 
                }
                  return (
                    <div className="Notes"key={index }> 
                          <Link to={`/${note.title}`} className="edit">
                          <div className="NoteTitle" key={note.title} >{note.title}</div>
                          </Link>
                          <div  className=" NoteText" key={"note.text"} >{note.text}</div>
                    </div>   
                  );
              }
            ) 
          }
        {
            this.state.search !== "" &&
            this.props.notes
                      .filter((item, index) => {
                           
                              if (item === undefined || item  === null) {
                                  return false
                              } else {
                              return item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                              }
                          })
                          
            .map((note, index) => {
                return (
                    <div className="Notes" key={index}>
                        <Link to={`/${note.title}`} className="edit">
                            <div className="NoteTitle" key={note.title} >{note.title}</div>
                        </Link>
                        <div className=" NoteText" key={"note.text"} >{note.text}</div>
                    </div>
                );
            })
        }

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
export default connect(mapStateToProps, { addNoteActionCreator, filterNotesActionCreator})(NotesList)