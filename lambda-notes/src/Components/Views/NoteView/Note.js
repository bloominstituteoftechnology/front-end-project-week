import React, { Component } from 'react'
import axios from 'axios'
import './Note.css'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: []
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params
        fetch = id => {
            axios
                .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
                .then(response => this.setState({ note: response.data }))
                .catch(error => console.log(error))
        }
        fetch(id)
    }
    
    render() {
        return (
            <div className="note-container">
                <div>NOTE PAGE</div>
                <div className="edit-note">
                    <p> <span>edit</span> <span>delete</span> </p>
                </div>   
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}
    

export default Note