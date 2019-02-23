import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../actions'
import { Button, Input } from 'reactstrap'
import { CreateViewContainer, CreateViewStyle, CreateText} from './styled-components/CreateViewStyledComponents'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

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
    title: this.state.title, 
    body: this.state.body})
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
        <TextField
        name="title" 
        type="text"
        onChange={this.inputHandler}
        value={this.state.title}
        />
       <TextField
        name="body"
        body
        rowsMax="80"
        rows="10"
        type="text"
        value={this.state.body}
        onChange={this.inputHandler}
        margin="normal"
        helperText="Start typing in the box above..."
        variant="outlined"
       />
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