import React, { Component } from 'react'
import axios from 'axios';


export default class EditView extends Component {
    constructor(props) {
        super(props)
    this.state = {
        note: {
            title: "",
            textBody: "",
        }
    }
}



  
 editNote = (id , note) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then( res => {
        this.setState({ note: note})
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

submitHandler = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.editNote(id , this.state.note);
}   


    render() {
        return (
            <form onSubmit={this.submitHandler}> 
                <button type='submit'>Edit</button>
                <input  type="text" name="title" placeholder={this.props.title} onInput={this.inputHandler} ></input>
                <input  type="textBox" name="textBody" value={this.state.textBody}  onInput={this.inputHandler} />
            </form>
        )
    }
}
