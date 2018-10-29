import React, { Component } from "react"
import { connect } from "react-redux"
import { editNote } from "../actions"

class NoteForm extends Component {
    constructor(props) {
        super(props) 
         console.log(props)
        const { title, content} = props.note
        this.state = {
            title,
            content,
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.editNote({...this.state, id: this.props.note.id})
        this.props.history.push(`/${this.props.note.id}`)
    }

    render() {
        if (this.props.note) {
  return (
            <>
            <form onSubmit={this.onSubmit}>
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
        <button type="submit">Save</button>
        </form>
        </>
        )
        } else {
return <h4>BAHHHHHH</h4>
        }
      
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params
    return {
        note: state.notes.find(note => note.id === id)
    }
}

export default connect(mapStateToProps, { editNote })(NoteForm)