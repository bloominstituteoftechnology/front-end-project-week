import React, { Component } from 'react'
import axios from 'axios'

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
            <div>
                NOTE PAGE
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}
    

export default Note