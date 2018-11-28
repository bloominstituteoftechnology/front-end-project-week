import React from 'react';
import { connect } from 'react-redux';
import { deleteNote }from './actions';
import { Modal, Button, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import { SoloStyle, SoloLinks, SoloContent, ModalFooter } from './styled-components'


class SoloNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modal: false
        }
    }
  
    toggle=()=> {
      this.setState({
        modal: !this.state.modal
      });
    }

deleteHandler=(id)=>{
    this.props.deleteNote(id);
    this.props.history.push('/');
    this.toggle()
}

    
    render(){
       const note = this.props.notes.find(item =>{
                   return item._id === this.props.match.params.id
                });
        return(
            <SoloStyle>
                <div className='modal'>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalBody>
                            <p>Are you sure you want to delete this Note?</p>
                         </ModalBody>
                         <ModalFooter>
                            <Button color="primary" onClick={ ()=>this.deleteHandler(note._id) }>Delete</Button>{' '}
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <SoloLinks>
                    <Link to={`/edit-note/${note._id}`} ><p>edit</p></Link>
                    <p onClick={this.toggle}> delete </p>
                </SoloLinks>
                <SoloContent className='note-body'>
                    <h1> {note.title}</h1>
                    <p><Markup content={note.textBody}/></p>
                </SoloContent>
            </SoloStyle>
        )
    }
}
const mapStateToProps = (state) =>{
        return {
            notes: state.notes
        }
}
export default connect(mapStateToProps, { deleteNote })(SoloNote); 