import React from 'react'

import { Link } from 'react-router-dom'

import styled from "styled-components"

import { connect } from 'react-redux'
import { createNote } from '../actions/noteAction'


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

class CreateNewNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            textBody: '',
            tags: '',
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        //this.props.handleAddNewNote(this.state)
        //this.props.createNote({...this.state, tags: [this.state.tags]})
        this.props.createNote({...this.state})
        console.log(this.state)
    }

    render(){
        return (
            <div className="note-container">
            <h2> Create New Notes: </h2>
                <form>
                    <input 
                        className="input-title"
                        placeholder="Note Title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <textarea 
                        className="input-content"
                        placeholder="Note Content"
                        type="text"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.handleChange}
                    />
                     <input 
                        className="input-title"
                        placeholder="Note Tags"
                        type="text"
                        name="tags"
                        value={this.state.tags}
                        onChange={this.handleChange}
                    />
                </form>
                <div className="button save" onClick={this.handleSubmit}><StyledLink to="/idsort" >Save</StyledLink></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { createNote: createNote })(CreateNewNote)

//export default CreateNewNote