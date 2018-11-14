import React from 'react'; 
import {Note} from '../components/Note.js'; 

export default class Notes extends React.Component {
    constructor(props){
        super(props); 
    }
    render(){
        let notes = this.props.notes.map((note, index) => {
            return <Note key={index} note={note}></Note> 
        })
        return(
            <div>
                <h2>Your Notes:</h2> 
                {notes}
            </div> 
        )
    }
}