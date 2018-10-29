import React, { Component } from "react"
import { connect } from "react-redux"
import { addNote } from "../actions"

class CreateNote extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            title: '',
            content: ''
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.addNote({title: this.state.title, content: this.state.content, id: '03'})
        this.props.history.push('/')
    }
    render() {
        return (
            <form  onSubmit={this.onSubmit}>
            <input 
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            />
            <input 
            name="content"
            value={this.state.content}
            onChange={this.onChange}
            />
            <button type="submit">Add</button>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {

    }
}

export default connect(mapStateToProps, { addNote })(CreateNote)