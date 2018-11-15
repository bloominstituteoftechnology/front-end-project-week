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
            <div>
                <form>
                    <input 
                        placeholder="Note Title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="Note Content"
                        type="text"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.handleChange}
                    />
                </form>
                <div onClick={this.handleSubmit}><Link to="/notes" >Create</Link></div>
            </div>
        )
    }
}

export default CreateNewNote