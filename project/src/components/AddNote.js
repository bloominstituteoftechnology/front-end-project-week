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
                <input onChange = {this.props.handleChange} name = "title" value = {this.props.title} placeholder = "Note Title"></input>
                <textarea onChange = {this.props.handleChange} name = "content" value = {this.props.content} placeholder = "Note Content" rows='30' cols = '100'></textarea>
                <Link to = "/" onClick = {this.props.handleAddNote}><button >Save</button></Link>                
            </div>
        )
    }
} 
 export default AddNote 