import React, {Component} from 'react';

class NewNote extends Component {
    state={
        title:'',
        content:'',
    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            id: Date.now(),
        }
        const emptyNote ={
            title:'',
            content:'',
        }
        this.props.createNote(newNote)
        this.setState(emptyNote)
    }

    render(){
        return(
            <form>
                <h2>Create New Note:</h2>
                <input
                    type='text'
                    placeholder='Note Title...'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input 
                     type='text'
                     placeholder='Note Content...'
                     name='content'
                     value={this.state.content}  
                     onChange={this.handleChange}             
                />
                <button onClick={this.handleSubmit}>Save</button>
            </form>
        )
    }
}

export default NewNote;