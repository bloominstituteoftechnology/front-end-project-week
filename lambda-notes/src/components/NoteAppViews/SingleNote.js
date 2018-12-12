import React from 'react'
import { connect } from 'react-redux'
// import { fetchNote, getNote } from '../../actions'
import { fetchNote, deleteNote } from '../../actions/index'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const SingleNoteTitle = styled.div `
font-family: 'Archivo Black';
font-size: 1.6rem ;
`

class SingleNote extends React.Component {

 state = {
  modal: false
 }

 componentDidMount = () => {
  this.props.fetchNote(this.props.match.params.id)
 }

 toggle = () => {
  this.setState({
   modal: !this.state.modal
  })
 }

 deleteHandler = () => {
  this.props.deleteNote(this.props.match.params.id)
 }

   render(){
   return (
    <div>
     <div>
     <SingleNoteTitle>
      {this.props.title}
     </SingleNoteTitle>
      {this.props.textBody}
     </div>
     <Button color="danger" onClick={this.toggle}>Delete</Button>
     <Link to={`/edit/${this.props._id}/`}><Button>Edit</Button></Link>
     <Modal isOpen={this.state.modal} toggle={this.toggle} color="info" onClick={this.toggle}>
      <ModalHeader toggle={this.toggle}> Are you sure you want to delete this?
       <ModalBody>
       </ModalBody>
       <ModalFooter>
         <Button onClick={this.deleteHandler}>Delete Note</Button>
         <Button>Cancel</Button>
       </ModalFooter>
      </ModalHeader>
     </Modal>
     {this.props.deleted ? this.props.history.push('/') : null }
    </div>
  )}
}

const mapStateToProps = state => {
 const { note, deleted } = state 
 console.log(note)
 return {
  title: note.title,
  textBody: note.textBody,
  _id: note._id, 
  deleted: deleted
 }
}
export default withRouter(connect(mapStateToProps, { fetchNote, deleteNote })(SingleNote))