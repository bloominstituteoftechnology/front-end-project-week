import React from 'react'

import { Link } from 'react-router-dom'

import styled from "styled-components"


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

class CreateNewNote extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            textBody: '',
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
        this.props.handleAddNewNote(this.state)
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
                    <input 
                        className="input-content"
                        placeholder="Note Content"
                        type="text"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.handleChange}
                    />
                </form>
                <div className="button save" onClick={this.handleSubmit}><StyledLink to="/notes" >Save</StyledLink></div>
            </div>
        )
    }
}

export default CreateNewNote