import React from 'react';

import Note from './Note';
import SearchBar from './SearchBar';

import styles from '../css/NotesContainer.css';

class NotesContainer extends React.Component{
   constructor(){
       super()
       
   }
    textBodyCutOff = (string) =>{
       return (string.length > 120 ? string.slice(0,120) + '...' : string)
   }
   titleCutOff = (string) =>{
       return (string.length > 15 ? string.slice(0,15) + '...' : string)
   }
  
    render(){
        
        return(
            <div className = 'notes-container'>
                <div className = 'search-bar-container'>
                    <SearchBar searchNotes = {this.props.searchNotes}/>
                </div>
                <div className = 'notes-sub-container'>
                    <h1 className = 'notes-container-header'>Your Notes: </h1>
                    <div className ='thing'>{this.props.notes.map(note =>{
                        return(
                            <Note 
                                key = {note._id}
                                id = {note._id}
                                textBody = {this.textBodyCutOff(note.textBody)}
                                title = {this.titleCutOff(note.title)}/>
                        )
                    })}</div>
                </div>    
            </div>
        )
    }
}

export default NotesContainer;