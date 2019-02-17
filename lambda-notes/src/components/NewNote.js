import React , { Component } from 'react';

import axios from 'axios';

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            textBody:""
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    returnHome = () => {
        this.props.history.push("/")
    }

    addNote = (e) => {
        // const note = {this.state}
        // console.log(this.state)
        e.preventDefault();
        if(this.state.title === "" || this.state.textBody === "") {
            alert("Cannot be blank")
        }
        else {
            axios
                .post("https://fe-notes.herokuapp.com/note/create", this.state )
                .then(response => {
                    // console.log(response.data)
                    // console.log(this.state)
                    // window.location.href="/"
                    this.returnHome();
                    
                    
                })
                .catch(error => {
                    console.log(error)
                })
        }
        // console.log(this.state)
        this.setState({
            title:"",
            textBody:""
        })
    }

    render() {


        return (
            <div>
                <h2>Create new note</h2>
                <form onSubmit={this.addNote}>
                    <input
                        onChange ={this.handleInputChange}
                        type="text"
                        placeholder= "Note Title"
                        value={this.state.title}
                        name="title"
                    />
                    <input
                        onChange ={this.handleInputChange}
                        type="text"
                        placeholder= "New Content"
                        value={this.state.textBody}
                        name="textBody"
                    />
     
                    <button type="submit">Save</button>

          
                </form>

            </div>
        )
    }
}