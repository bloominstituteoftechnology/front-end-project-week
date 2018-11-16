import React, { Component } from 'react';
import axios from 'axios';

class CreateForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "",
            textBody: "",
            tags: []
        }
    }

    inputHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e=>{
        e.preventDefault()
        axios
            .post("https://fe-notes.herokuapp.com/note/create", {
                title: this.state.title,
                textBody: this.state.textBody,
                tags: this.state.tags,
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })

        this.setState({
            title: "",
            textBody: "",
            tags: []
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.inputHandler} />
                    <input type="text" name="textBody" value={this.state.textBody} placeholder="Notes" onChange={this.inputHandler}/>
                    <input type="text" name="tags" value={this.state.tags} placeholder="Tags" onChange={this.inputHandler}/>
                    <input type="submit" value="Add Note" />
                </form>
            </div>
        )
    }
}

export default CreateForm