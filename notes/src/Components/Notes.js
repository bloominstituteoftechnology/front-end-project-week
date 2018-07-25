import React, {Component} from 'react';
import Note from './Note';

class Notes extends Component  {
constructor(props){
    super(props);
}




    render(){
    return ( <div className = 'notes-wrapper'>
            {this.props.notes.map(notes => 
            <Note 
           
            key={notes.id} 
            notes={notes} 
            deleteNote={this.props.deleteNote}
                      
            /> )}
                
        </div>
        )
}
}
export default Notes;