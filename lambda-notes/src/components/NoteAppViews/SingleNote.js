import React from 'react'
import { connect } from 'react-redux'
import { fetchNote, deleteNote } from '../../actions/index'
import { withStyles } from '@material-ui/core/styles'
import { withRouter, Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SingleNoteTitle, SingleNoteContainer, SingleNoteBody, styles, } from './styled-components/SingleNoteStyledComponents'

class SingleNote extends React.Component {

 state = {
  modal: false
 }

 componentDidMount = () => {
  this.props.fetchNote(this.props.match.params.id)
 }

 toggle = () => {
  this.setState({ modal: !this.state.modal })
 }

 deleteHandler = () => {
  this.props.deleteNote(this.props.match.params.id)
 }

   render(){
   return (
     <SingleNoteContainer>
      <div>
      <SingleNoteTitle>
       {this.props.title}
      </SingleNoteTitle>
      <SingleNoteBody>
       {this.props.body}
      </SingleNoteBody>
     </div>
     <Button size="lg" style={{marginBottom: 10}} color="#5A6268" onClick={this.toggle}>Delete</Button>
     <Link style={{color: 'white'}} to={`/edit/${this.props.id}/`}>
     <Button size="lg" >
     Edit 
     </Button>
     </Link>
     <Modal style={{marginTop: 100, background: '#90A4AE'}} isOpen={this.state.modal} toggle={this.toggle} color="#90A4AE" onClick={this.toggle}>
      <ModalHeader style={{background: '#90A4AE'}} toggle={this.toggle}> Are you sure you want to delete this?
       <ModalBody style={{background: '#90A4AE'}}>
       If you do, you may not be able to reverse the change!
       </ModalBody>
       <ModalFooter style={{background: '#90A4AE'}}>
         <Button onClick={this.deleteHandler}>Delete</Button>
         <Button>Cancel</Button>
       </ModalFooter>
      </ModalHeader>
     </Modal>
     {this.props.deleted ? this.props.history.push('/') : null }
    </SingleNoteContainer>
  )}
}

const mapStateToProps = state => {
 const { note, deleted } = state 
 console.log(note)
 return {
  title: note.title,
  body: note.body,
  id: note.id, 
  deleted: deleted
 }
}
export default withRouter(connect(mapStateToProps, { fetchNote, deleteNote })(withStyles(styles)(SingleNote)))