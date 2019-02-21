import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../actions'
import { Button, Input } from 'reactstrap'
import { CreateViewContainer, CreateViewStyle, CreateText} from './styled-components/CreateViewStyledComponents'

class CreateNote extends Component {
 constructor(){
  super()
  this.state = {
   title: '',
   body: ''
  }
 }

 inputHandler = (event) => {
  this.setState({
   [event.target.name]: event.target.value 
  })
 }

 submitNote = (event) => {
  console.log('In submitNote')
  event.preventDefault()
   this.props.addNote({
    tags: [],
    title: this.state.title, 
    textBody: this.state.body})
    this.setState({
     title: '',
     body: ''
    })
 }
  render() {
    return (
      <CreateViewContainer>
      <CreateText>Create new note:</CreateText>
      <form onSubmit={this.submitNote} >
       <CreateViewStyle>
        <Input 
        name="title" 
        type="text"
        onChange={this.inputHandler}
        value={this.state.title}
        />
       <textarea 
        name="body"
        rows="10"
        type="text"
        cols="40"
        value={this.state.body}
        onChange={this.inputHandler}
       >
       </textarea>
       <Button 
         color="info">Save Note
        </Button>
       </CreateViewStyle>
      </form>
      {this.props.added ? this.props.history.push('/') : null}
</CreateViewContainer>
    )
  }
}

const mapStateToProps = state => {
 const { added } = state
 return {
  added: added
 }
}

export default connect(mapStateToProps, { addNote })(CreateNote)