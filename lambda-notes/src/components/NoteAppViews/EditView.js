import React, { Component } from 'react'
import { Button, Input} from 'reactstrap'
import styled from 'styled-components'
import { fetchNote, editNote } from '../../actions/index'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
  }
 }

 componentDidMount = () => {
  console.log(this.props.match.params.id)
  return () => this.props.fetchNote(this.props.match.params.id)
 }


 inputHandler = event => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }
 
 submitEdit = (id, event) => {
  event.preventDefault()
  console.log(id)
  this.props.editNote(this.props.match.params.id, 
   {title: this.state.title, textBody: this.state.body})
  this.setState({
   title: '',
   body: ''
  })
 }

  render() {
   console.log()
    return (
     <form>
     <InputStyles>
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
     </form>
    )
  }
}

const mapStateToProps = state => {
 const { notes } = state
 return {
  notes: notes,
 }
}
 withRouter(connect(mapStateToProps, { fetchNote, editNote })(EditView))