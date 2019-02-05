import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EditNote.css';

class EditNote extends Component  {
    state = {
        title: '',
        content: '',
    }

    componentDidMount() {
        fetch(`http://localhost:9000/api/notes/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => this.setState(
            {
                title: data.title,
                content: data.content
            }
        ))
        .catch(err => console.log(err))
    }

    

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }

    handleUpdate = () => {
        fetch(`http://localhost:9000/api/notes/${this.props.match.params.id}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
            title: this.state.title,
            content: this.state.content
        }) 
    })
    window.location.reload();

    }

    render() {
        console.log('STATE', this.state)
        return(
            <div className='edit-note'>
                   <p className='edit-note-title'>Edit Note:</p>
                   <form className='edit-note-input'>
                      <input type='text' placeholder='Note Title' name='title' value={this.state.title} onChange={this.handleChange} />
                      <textarea type='text' placeholder='Note Content' name='content' value={this.state.content} onChange={this.handleChange} />
                      <button onClick={this.handleClick} onClick={this.handleUpdate}><Link to='/' className='link'>Update</Link></button>
                   </form>
                </div>
        )
    }
}

export default EditNote;