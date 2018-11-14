import React from 'react'

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
                <button onClick={this.handleSubmit}>Create</button>
            </div>
        )
    }
}

export default CreateNewNote