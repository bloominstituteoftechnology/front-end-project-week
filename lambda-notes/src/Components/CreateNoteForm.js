import React from "react";
import axios from "axios";
import {InputHeader, InputBody, Button} from "../Styles/Styles"



class CreateNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            text: "",
        }
    }
    
    inputHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        axios.post(`https://fe-notes.herokuapp.com/note/create`, this.state)
         .then(response => {this.setState({title: "", textBody: ""})})
         .catch(err => {console.log(err)})
    }
    render(){
        return(
            <div>
                <h2>Create a New Note</h2>
            <form onSubmit={this.submitHandler}>
                    <InputHeader
                    name="title"
                    placeholder="Note Title"
                    value={this.state.title}
                    onChange={this.inputHandler}
                />
                    <InputBody
                     name="textBody"
                     placeholder="Note body"
                     value={this.state.textBody}
                     onChange={this.inputHandler}
                />
                <Button type="submit">Save</Button>
            </form>
            </div>
        )
    }
}

export default CreateNote;