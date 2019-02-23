import React from 'react'
import { connect } from 'react-redux'
import { fetchNote, deleteNote } from '../../actions/index'
// import Modal from '@material-ui/core/Modal'
// import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { withRouter, Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SingleNoteTitle, SingleNoteContainer, SingleNoteBody, styles, modalStyle } from './styled-components/SingleNoteStyledComponents'

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

 // onOpen = () => {
 //  this.setState({
 //   open: true
 //  })
 // }

 // onClose = () => {
 //  this.setState({
 //   open: false
 //  })
 // }
 deleteHandler = () => {
  this.props.deleteNote(this.props.match.params.id)
 }

   render(){
    const { classes } = this.props
   return (
    // <div>
    // <SingleNoteContainer>

    //  <Typography>
    //  Click
    //  </Typography>
    //  <Button onClick={this.onOpen}>Click</Button>
    //  <Modal
    //  open={this.state.open}

    //  onClose={this.onClose}
    //  >
    //   <div style={modalStyle()} className={classes.paper}>
    //    <Typography>
    //     Content
    //    </Typography>
    //    <Typography>
    //     Content
    //    </Typography>
    //   </div>
    //  </Modal>
    // </SingleNoteContainer>
    // </div>


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