import React, { Component } from 'react'
import { Button, Input} from 'reactstrap'
import styled from 'styled-components'
import { getNote } from '../../actions/'
import { connect } from 'react-redux'

const EditViewStyle = styled.div `
 display: flex;
 flex-direction: row;
 width: 75% ;
`

const InputStyles = styled.div `
 display: flex;
 flex-direction: column;
 justify-content: center ;
 width: 100% ;
 height: 200px ;
 align-items: flex-start ;
`
export default class EditView extends Component {
 constructor(props){
  super(props)
  this.state = {
    title: '',
    body: '',
    note: {}
  }
 }

 componentDidMount(){
  const id = this.props.match.params.noteId
  console.log(this.singleNote)
  console.log(id)
  console.log(this.state.note)

 const singleNote = this.props.notes.filter((note) => { 
  if (note.id === this.id){
   this.setState({
    note: note
    })
   } 
 })
 }

 inputHandler = event => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }
 
 submitEdit = event => {
  this.props.editNote({
   title: this.state.title,
   textBody: this.state.body
  })
 }

  render() {
    return (
     <InputStyles size="sm" >
     {/* {this.singleNote.title} */}
      <Input
       name="title"
       onChange={this.inputHandler}
      />
      <EditViewStyle>
      <textarea 
       id="note"
       name="body"
       rows="10"
       cols="40"
       onChange={this.inputHandler}
      >
      </textarea>
      </EditViewStyle>
      <Button onSubmit={this.submitEdit} color="info">Save Changes</Button>
     </InputStyles>
    )
  }
}

const mapStateToProps = state => {
 const { notes } = state
 return {
  notes: notes
 }
}
connect(mapStateToProps, { getNote })(EditView)