import React from 'react';
import axios from 'axios';

class NoteView extends Component {
    constructor(props){
        super(props)
        this.state = {
            note: []
        }
    }

    getNote = id => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            this.setState({note: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div classname="note-view">
                <h3>{this.state.note.title}</h3>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

export default NoteView