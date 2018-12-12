import React, { Component } from 'react'
import { Button, Input} from 'reactstrap'
import styled from 'styled-components'
import { fetchNote, editNote } from '../../actions/'
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
class EditView extends Component {
 constructor(props){
  super(props)
  this.state = {
    title: '',
    body: '',
    id: ''
  }
 }

 componentDidMount = () => {
  console.log("EditView Props:", this.props)
  this.setState({
   id: this.props.match.params.id
  })
  this.props.fetchNote(this.props.match.params.id)
 }


 inputHandler = event => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 submitEdit = (event) => {
  event.preventDefault()
  this.props.editNote(this.state.id, 
   {title: this.state.title, textBody: this.state.body})
  this.setState({
   title: '',
   body: ''
  })
 }

  render() {
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
      {this.props.edited ? this.props.history.push(`/note/${this.state.id}`) : null}
     </form>
    )
  }
}

const mapStateToProps = state => {
 console.log('I am mapping state to props.')
 const { notes, edited } = state
 return {
  notes: notes,
  edited: edited
 }
}
 
export default connect(mapStateToProps, { fetchNote, editNote })(EditView)