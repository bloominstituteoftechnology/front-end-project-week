import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class EditNote extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }
    render(){
        return(
            <div className = "form-wrap">
                <h1 className = "form-title">Edit Note:</h1>
                <input></input>
                <textarea rows='20' cols = '100'></textarea>
                <Link to = "/"><button>Update</button></Link>                
            </div>
        )
    }
} 

export default EditNote