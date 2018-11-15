/*Create Note Form
  Takes in user input and post the input to the notes list
*/
import React from "react";
import axios from "axios"
import {DisplayHeader, InputHeader, InputBody, Button} from "../Styles/Styles"

class CreateNote extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        title: "",
        textBody: "",
    }
  }

  inputHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    axios.post(`https://fe-notes.herokuapp.com/note/create`, this.state)
      .then(response => {console.log(response)})
      .catch(err => {console.log(err)})
  }

  render(){
    return (
        <>
          <DisplayHeader>Create New Note</DisplayHeader>
          <form onSubmit={this.submitHandler}>
              <InputHeader 
                name="title"
                placeholder="Note Title"
                onChange= {this.inputHandler}
              />
              <InputBody
                name="textBody"
                placeholder="Note Content"
                onChange= {this.inputHandler}
              />
              <Button type="submit">Save</Button>
          </form>
        </>
    )
  }
}

export default CreateNote