import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { notes } from '../notes'

class NewNote extends Component{
    constructor(props){
        super();
        this.state = {
            
            id: notes.length,
            title: '',
            text: ''
        }
        console.log(this.state.id);
    }

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
    })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let id = this.state.id
        
        notes.push(this.state)
            this.setState({
            id: ++id,
            title: event.target.value,
            text: event.target.value
        })
        console.log('submit')
        console.log('new', notes)
        console.log(this.state)
    }

    // handleNewTitleChange(event) {
    //     this.setState({ title: event.target.value });
    // }
    // handleNewTextChange(event) {
    //     this.setState({ text: event.target.value });
    // }


    render(){
        return(
        <div className='page-container'>
        <div className='page-title'>New Note:</div>
        <form>
        <input name='title' type='text' placeholder='-Note Title Here-' value={this.state.title} onChange={(event) => this.handleChange(event)} />
        <input name='text'type='text' placeholder='-Note Here-' value={this.state.text} onChange={(event) => this.handleChange(event)} />
        <button onClick={(event) => this.handleSubmit(event)}><Link to='/'>Submit</Link></button>
            
        </form>
        </div>
        )
    }
}

export default NewNote;