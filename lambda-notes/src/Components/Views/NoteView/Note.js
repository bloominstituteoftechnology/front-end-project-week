import React, { Component } from 'react'
import axios from 'axios'
import './Note.css'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
            delete: false
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

    handleDelete = id => {
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => {this.setState({ delete: true })})
            .catch(error => console.log(error))
    }
    
    render() {
        return (
            <div className="full-note-container">
                <div>NOTE PAGE</div>
                <div className="edit-note">
                    <p> 
                        <span>edit</span> 
                        <span
                            onClick={() => this.handleDelete(this.state.note._id)}
                        >
                            delete
                        </span> 
                    </p>
                </div>   
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}
    

export default Note