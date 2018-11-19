import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



// wrap individual note component in Note, and link using route
// usually notes/$id

// props aren't being passed into noteView

class NoteView extends Component {
    constructor(props){
        super(props)
        console.log(`hello`)
        this.state = {
            title: '',
            textBody: '',
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
        .then(response => {
            this.setState({title: response.data.title, textBody: response.data.textBody})
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render(){
        return(
            <div className="note-view">
                <p>Test test</p>
                <h2>{this.state.title}</h2>
                <p>{this.state.textBody}</p>
                <Link to={`/notes/${this.props.match.params.id}/edit/`}><button className="button" >Update me</button></Link>
            </div> 
        )
        // need to call getNote somewhere in the render function
        // maybe move all CRUD elements into the main app and pass around
    }
}

export default NoteView