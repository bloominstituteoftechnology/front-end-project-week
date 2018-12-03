import React, { Component } from 'react'
import { Button, Input} from 'reactstrap'
import styled from 'styled-components'
import { getNote, editNote } from '../../actions/'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
const EditViewStyle = styled.div `
 display: flex;
 flex-direction: row;
 width: 75% ;
`
export default class EditView extends Component {
 constructor(){
  super()
  this.state = {
    title: '',
    body: ''
  }
 }
 singleNote = this.props.notes.find(note => `${note.id}` === `${this.id}`)
 componentDidMount(){
  const id = this.props.match.params.noteId
    // this.props.getNote(id)
  console.log('Here')
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
      <div>
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
       <Button onSubmit={this.submitEdit} color="info">Save Changes</Button>
      </EditViewStyle>
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
withRouter(connect(mapStateToProps, { getNote })(EditView))