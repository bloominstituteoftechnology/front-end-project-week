import React, { Component } from 'react'
import axios from 'axios'

class CreateNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        data = this.state.location.state

        this.setState({
            note: data.note,
            title: this.data.note.title,
            body: data.note.textBody
        })
    }

    handleInputChange = event => {
        event.preventDefault() 
        this.setState({ [event.target.name]: event.target.value })
    }

    // ================ CONTINUE FROM HERE ================

    render() {
        return (
            <div>
                CREATE NEW PAGE
                <Form 
                    handleInputChange={this.handleInputChange}
                    textBody={this.state.body}
                />
            </div>
        )
    }
}

export default CreateNew