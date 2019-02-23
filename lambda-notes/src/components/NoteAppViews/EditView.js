import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { fetchNote, editNote } from '../../actions/'
import { connect } from 'react-redux'
import { EditViewStyle, InputStyles } from './styled-components/EditViewStyledComponents'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { styles } from './styled-components/EditViewStyledComponents'

const FormStyle = styled.form `
 display: flex ;
 flex-direction: column ;
 justify-content: center;
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
  const { classes } = this.props
    return (
     <FormStyle onSubmit={this.submitEdit} className={classes.container}>
     <InputStyles>
      <TextField
       name="title"
       className={classes.textField}
       onChange={this.inputHandler}
       helperText="Title..."
      />
      <EditViewStyle>
      <TextField
       id="note"
       name="body"
       label="Multiline"
       multiline
       className={classes.textField}
       rowsMax="80"
       rows="10"
       onChange={this.inputHandler}
       variant="outlined"
       margin="normal"
       helperText="Start typing in the box above..."
      />
      </EditViewStyle>
      <Button style={{marginTop: 25, height: 50, marginLeft: 50}} color="grey">Save Changes</Button>
     </InputStyles>
      {this.props.edited ? this.props.history.push(`/note/${this.state.id}`) : null}
     </FormStyle>
    )
  }
}

const mapStateToProps = state => {
 const { notes, edited } = state
 return {
  notes: notes,
  edited: edited
 }
}
 
export default connect(mapStateToProps, { fetchNote, editNote})(withStyles(styles)(EditView))