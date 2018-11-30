import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../actions'
import styled from 'styled-components'

const CreateViewStyle = styled.div `
 display: flex;
 flex-direction: column;
 justify-content: center ;

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
 }
  render() {
    return (
      <div>
      <span>Create new note:</span>
       <form onSubmit={this.submitNote} >
       <CreateViewStyle>
         <input 
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
        <button 
         color="success">Save Note
        </button>
        </CreateViewStyle>
       </form>
       
       
      </div>
    )
  }
}

const mapStateToProps = state => {
 const { notes } = state
 return {
  notes: notes
 }
}

export default connect(mapStateToProps, { addNote })(CreateNote)