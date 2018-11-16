import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

 import styles from '../css/ExpandedNote.css';

class ExpandedNote extends React.Component{
    constructor(){
        super()
        this.state = {
           note : []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
        
    }

    fetchNote = id => {
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            this.setState(() => ({ 
                note : response.data,
             }))
        })
        .catch(err => {
            console.error('Trouble fetching data',err)
        })
    }
    
    
   
    render(){
        
        
        return(
            <div className = 'expanded-note-container'>
                <div className = 'edit-container'>
                    <Link to = {`note/edit/${this.state.note._id}`}>
                        <p>edit</p>
                    </Link>
                    
                        <p>delete</p>
                </div>
                <div className = 'expanded-note-body'>
                    <h1 className = 'expanded-note-header'>{this.state.note.title}</h1>
                    <p className = 'expanded-note-text'>{this.state.note.textBody}</p>
                </div>
            </div>
        )
    }    
}
export default ExpandedNote;