import React, { Component } from 'react'
import axios from 'axios';


export default class EditView extends Component {
    constructor(props) {
        super(props)
    this.state = {
        note: {},
    }
}



  
 editNote = (e , id) => {
    e.preventDefault();
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`)
    .then( res => {
        this.setState({ note: res.data})
    })
    .catch( err => {
        throw new Error(err);
    })
}

inputHandler = (e) => {
    e.preventDefault();
    this.setState({
        note: {
          ...this.state.note,
          [e.target.name]: e.target.value,
        }
        
    })
}


    render() {
        return (
            <form onSubmit={this.editNote}> 
                <button type='submit'>Edit</button>
                <input  type="text" name="title" value={this.state.note.title} onInput={this.inputHandler} ></input>
                <input  type="textBox" name="texBody" value={this.state.note.textBody} onInput={this.inputHandler} />
            </form>
        )
    }
}
