import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import axios from 'axios';

class NoteEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      title:"",
      body:"",
      sharedUser:"",
      id: null,
      edit: false
    } 

  }

  componentDidMount() {
    console.log("will",this.props)
    // const editNote = this.props.notes.filter((current) => {
    //   return current.id === Number(this.props.match.params.id)
    // })
    // console.log("filtered note",editNote[0].title)
    if(this.props.match.path === "/edit/:id"){
      // const editNote = this.props.notes.filter((current) => {
      //   return current._id === this.props.match.params.id
      // })
      
      // console.log(editNote)
      // this.setState({ 
      //   edit: true, 
      //   title: editNote[0].title,
      //   body: editNote[0].body,
      //   id: editNote[0]._id
      // })
      const config = {headers: { "Authorization": `Bearer ${window.localStorage.getItem("token")}`}}
      axios 
        .get(process.env.REACT_APP_BACKEND + 'note/' + this.props.match.params.id, config)
          .then(response => {
            
            this.setState({
              edit: true, 
              title: response.data.title,
              body: response.data.body,
              id: response.data._id
            })
          })
    }
  }
    
  

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const newNote = Object.assign({}, this.state);
    if(newNote.title !== "" && newNote.body !== ""){
      this.props.add(newNote);
    }
    

    this.setState({
      title: "",
      body: ""
    })

    this.props.history.push("/")

  }
  
  shareSubmit = e => {
    e.preventDefault();

    this.props.addSharedNote(this.state.id, this.state.sharedUser)
    this.props.history.push("/")
  }
  render() { 
    console.log('true? ',this.state.edit)
    return (
      <React.Fragment>
        <h3>{this.state.edit ? "Edit Note:" : "Create New Note:"}</h3>  
        <Form>
        <FormGroup>
          <Input type="text" name="title" value={this.state.title} onChange={this.handleInput} placeholder="Note Title"/>
        </FormGroup>        
        <FormGroup>
          <Input type="textarea" name="body" value={this.state.body} onChange={this.handleInput} rows="15" placeholder="Note Content"/>
        </FormGroup>
          <Button onClick={this.handleSubmit} className="side-button col-4">Save</Button>
        {!this.state.edit ? <div></div> :
        <div>  
          <FormGroup>
            <Input type="text" name="sharedUser" value={this.state.sharedUser} onChange={this.handleInput} placeholder="Enter Username to share with"/>
          </FormGroup>
          <Button onClick={this.shareSubmit} className="side-button col-4">Save</Button>
        </div>
        }
        </Form>  
      </React.Fragment>
    );
  }
}
 
export default NoteEdit;