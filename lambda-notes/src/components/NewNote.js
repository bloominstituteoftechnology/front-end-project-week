import React , { Component } from 'react';

import axios from 'axios';
import styled from 'styled-components';

const NewContent = styled.textarea`
    margin: 0px 0px 0px 10px;
`

const SaveButton = styled.button`
    width: 170px;
    height: 40px;
    color: white;
    margin: 20px 0px 0px 10px;
    background-color:#00ccbe;
    border: 1px solid #004c47;
`

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
        e.preventDefault();
        if(this.state.title === "" || this.state.textBody === "") {
            alert("Cannot be blank")
        }
        else {
            axios
                .post("https://fe-notes.herokuapp.com/note/create", this.state )
                .then(response => {
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
                <div>
                    <h2>Create new note</h2>

                    <form onSubmit={this.addNote}>
                    <div>
                        <NewContent cols="80" rows="2"
                            onChange ={this.handleInputChange}
                            type="text"
                            placeholder= "Note Title"
                            value={this.state.title}
                            name="title"
                        />
                    </div>
                    <div>
                        <NewContent cols="80" rows="25"
                            onChange ={this.handleInputChange}
                            type="text"
                            placeholder= "New Content"
                            value={this.state.textBody}
                            name="textBody"
                        />
                    </div>
                        <SaveButton type="submit">Save</SaveButton>   
                    </form>
                </div>
            </div>
        )
    }
}