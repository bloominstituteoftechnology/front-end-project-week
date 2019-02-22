import React, { Component } from 'react'
import { Button, Input} from 'reactstrap'
import { fetchNote, editNote } from '../../actions/'
import { connect } from 'react-redux'
import { EditViewStyle, InputStyles } from './styled-components/EditViewStyledComponents'
import styled from 'styled-components'

const FormStyle = styled.form `
 ${'' /* margin-top: 30% ; */}
 border: 1px solid black ;
 display: flex ;
 justify-content: center ;
 align-items: center ;
 ${'' /* margin: 0 auto ; */}
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
   {title: this.state.title, body: this.state.body})
  this.setState({
   title: '',
   body: ''
  })
 }

  render() {
    return (
     <FormStyle onSubmit={this.submitEdit}>
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
     </FormStyle>
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