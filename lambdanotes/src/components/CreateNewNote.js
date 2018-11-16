import React from 'react'

import { Link } from 'react-router-dom'

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
            <div className="createnote-container">
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
                <div className="button save" onClick={this.handleSubmit}><Link to="/notes" >Save</Link></div>
            </div>
        )
    }
}

export default CreateNewNote