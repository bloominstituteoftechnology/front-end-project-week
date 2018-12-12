import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

 import styles from '../css/ExpandedNote.css';

class ExpandedNote extends React.Component{
    constructor(){
        super()
        this.state = {
           note : [],
           openDeleteProp : false
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
    
    openDelete = () =>{
        if(!this.state.openDeleteProp){
            this.setState({
                openDeleteProp : true,
        })}
    }
    closeDelete = () =>{
        if(this.state.openDeleteProp){
            this.setState({
                openDeleteProp:false,
            })
        }
    }
   
    render(){
        
        
        return(
            <div className = 'expanded-note-container'>
                <div className = {(this.state.openDeleteProp) ? 'expanded-delete' : 'closed-delete'}>
                    <div className = 'delete-container'>
                        <p className = 'delete-question'>Are you sure you want to delete this?</p><br></br>
                        <div className = 'button-container'>
                            <Link className = 'link' exact to = '/'>
                                <button className = 'delete-button' onClick = {()=>this.props.deleteNote(this.state.note._id)}>Delete</button>
                            </Link>    
                            <button className = 'no-button' onClick = {this.closeDelete}>No</button>
                        </div>
                    </div>    
                </div>
                <div className = 'edit-container'>
                    <Link exact to = {`/edit/${this.state.note._id}`}>
                        <p className = 'edit-prompt'>edit</p>
                    </Link>
                    
                        <p onClick = {this.openDelete} className = 'delete-prompt'>delete</p>

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