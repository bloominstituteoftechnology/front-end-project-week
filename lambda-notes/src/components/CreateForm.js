import React, { Component } from 'react';
import axios from 'axios';

class CreateForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "",
            textBody: "",
        }
    }

    inputHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e=>{
        e.preventDefault()
        axios
            .post(`http://localhost:9999/api/notes/`, {
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
            textBody: ""
        });
    }

    render() {
        return(
            <div>
                <form className="form" onSubmit={this.submitHandler}>
                    <h2 className="formHeading">Create New Note:</h2>
                    <input className="formTitle" type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.inputHandler} />
                    <input className="formContent" type="text" name="textBody" value={this.state.textBody} placeholder="Notes" onChange={this.inputHandler}/>
                    <input className="formSubmit" type="submit" value="Add Note" />
                </form>
            </div>
        )
    }
}

export default CreateForm