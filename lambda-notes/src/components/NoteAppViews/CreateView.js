import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../actions'
import { Button, Input } from 'reactstrap'
import styled from 'styled-components'

const CreateViewContainer = styled.div `
display: flex ;
flex-direction: column ;
${'' /* justify-content: center ; */}
margin: 0 auto ;
`

const CreateViewStyle = styled.div `
 display: flex;
 flex-direction: column;
`
const CreateText = styled.span `
font-family: 'Archivo Black';
font-size: 2rem ;
margin-bottom: 15% ;
`
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