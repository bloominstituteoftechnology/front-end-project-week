import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import moment from 'moment'; 

import SideBar from './side-bar';



class CreateNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            textBody: ''
        }
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    gatherCreation = () => {
        const id = this.props.idGenerator()
        const obj = {id, tags: [], title: this.state.title, textBody: this.state.textBody, __v: 0}
        this.setState({title: '', textBody: ''})
        this.props.create(obj);
    }

    render() {

        return (

            <div className="main-container">
              <SideBar />
              <div className ="create-note-form">
                <h3>Create New Note:</h3>
                <textarea onChange = {this.onChange} className = "input-title" type="text" placeholder = "Note Title" name ="title" value = {this.state.title}></textarea>
                <br/>
                <textarea onChange = {this.onChange} className = "input-content" type="text" placeholder = "Note Content" name ="textBody" value = {this.state.textBody}></textarea>
                <br/>
                <Link to = '/'><button onClick = {this.gatherCreation} className = "btn-side-bar">Save</button></Link>
              </div>
           </div>

        )
    }
}

export default CreateNote 