
/*Edit Note Form
  Takes in user input and edits the note they previously clicked on
*/
import React from "react";
import axios from "axios"
import {InputHeader, InputBody, Button} from "../Styles/Styles"

class EditNote extends React.Component {
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
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, this.state)
    .then(() => this.props.history.push('/'))
      .catch(err => {console.log(err)})
  }


  render(){
     console.log(this.props)
    return (
        <>
          <h2>Edit Note:</h2>
          <form onSubmit={this.submitHandler}>
              <InputHeader 
                name="title"
                placeholder="Note Title"
               value={this.state.title}
                onChange= {this.inputHandler}
              />
              <InputBody
                name="textBody"
                placeholder="Note Content"
                value={this.state.textBody}
                onChange= {this.inputHandler}
              />
              <Button type="submit">Update</Button>
          </form>
        </>
    )
  }
}

export default EditNote