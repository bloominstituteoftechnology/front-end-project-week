import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AddNote extends Component {
    constructor(props){
        super(props)
        this.state = {
         }
     }
    render(){
        return(
            <div className = "form-wrap">
                <h1 className = "form-title">Create New Note:</h1>
                <input onChange = {this.props.handleChange} name = "newTitle" value = {this.props.title} placeholder = "Note Title"></input>
                <textarea onChange = {this.props.handleChange} name = "newNote" value = {this.props.note} placeholder = "Note Content" rows='30' cols = '100'></textarea>
                <Link to = "/"><button onClick = {this.props.handleAddNote}>Save</button></Link>                
            </div>
        )
    }
} 
 export default AddNote 