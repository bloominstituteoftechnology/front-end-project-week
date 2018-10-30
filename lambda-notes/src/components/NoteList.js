import React from 'react';
import axios from 'axios';
import Note from "./Note";

class NoteList extends React.Component {
    constructor(){
        super();
        this.state={
            notes:[]
        }
    }

    componentDidMount() {
      axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response=>this.setState({notes:response.data}))
      .catch(err=>{console.log(err)})
    }
    
render(){
    if (!this.state.notes) {
        return (<h1>Loading notes...</h1>)
    } else {
    return(
        
        <div className="note-list-wrapper">
        <h2>Your Notes:</h2>
        <div className="note-list">
        {this.state.notes.map(note => {
            return (
                <Note key={note._id} note={note}/>
            )
        })}       
        </div>
        </div>
    )
}
}
}

export default NoteList;