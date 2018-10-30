import React, { Component } from "react"
import { connect } from "react-redux"
import { addNote, createNote } from "../actions"
import "../App.css"

class CreateNote extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            title: '',
            textBody: ''
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.createNote({title: this.state.title, textBody: this.state.textBody, id: '03'})
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="create-view">
            <h2  className="create-note-header">Create New Note:</h2>
            <form  onSubmit={this.onSubmit} className="create-form">
            <input 
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            className="title-input"
            placeholder="Note Title"
            />
            <textarea  name="textBody"
            value={this.state.textBody}
            onChange={this.onChange}
            className="content-input"
            placeholder="Note Content"
            >
            </textarea>
           {/* <input 
            type="text"
            name="textBody"
            value={this.state.textBody}
            onChange={this.onChange}
            className="textBody-input"
            placeholder="Note Content"
            /> */}
            <button type="submit" className="save-button">Save</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {

    }
}

export default connect(mapStateToProps, { addNote, createNote })(CreateNote)