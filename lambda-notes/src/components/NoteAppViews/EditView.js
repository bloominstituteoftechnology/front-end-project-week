import React, { Component } from 'react'
import { Button, Input} from 'reactstrap'
import styled from 'styled-components'
import { fetchNote, editNote } from '../../actions/'
import { connect } from 'react-redux'
import { debug } from 'util';

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
  this.props.fetchNote(this.props.match.params.id)
  // console.log(this.props.match.params.id)
 }


 inputHandler = event => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }
 
 submitEdit = (id, event) => {
  event.preventDefault()
  id = this.props.match.params.id
  console.log(id)
  this.props.editNote(id, {title: this.state.title, textBody: this.state.body})
  this.setState({
   title: '',
   body: ''
  })
 }

  render() {
   console.log()
    return (
     <form onSubmit={this.submitEdit}>
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
      <Button color="info">Save Changes</Button>
     </InputStyles>
     </form>
    )
  }
}

const mapStateToProps = state => {
 const { notes } = state
 return {
  notes: notes
 }
}
connect(mapStateToProps, { fetchNote, editNote })(EditView)