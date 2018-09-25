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
                <input></input>
                <textarea rows='30' cols = '100'></textarea>
                <Link to = "/"><button>Save</button></Link>                
            </div>
        )
    }
} 
 export default AddNote 