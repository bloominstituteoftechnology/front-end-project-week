import { Modal} from 'reactstrap';
import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
const Span=styled.span`
text-decoration: underline;
font-weight: bold;
:first-child{
    margin-right: 2%;
}
`
const NoButton=styled.div`
width: 40%;
height: 40px;
background-color: #0db5ba;
color:#FFF;
display: flex;
align-items: center;
justify-content: center;
margin-left: 2%;
`
const DeleteButton=styled.div`
width: 40%;
height: 40px;
background-color: #C40000;
color:#FFF;
display: flex;
align-items: center;
justify-content: center;
margin-right: 2%;
`
const ModalContent=styled.div`
position: fixed;  
padding-top: 179px; 
left: 0;
right:0; 
top: 0;
bottom: 0; 
overflow: auto; 
background-color: rgb(0,0,0); 
background-color: rgba(0,0,0,0.4); 
z-index: 9999;
`
const ModalInfo=styled.div`
max-width: 620px;
width: 100%;
height: 190px;
margin-left: 26.4%;
background-color: #FFF;
border: 1px solid #424242;
`
const ModalHeader=styled.p`
text-align: center;
margin-top: 40px;
`
const ButtonContainer=styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
padding-left: 8%;
padding-right: 8%;
margin-top: 40px;
`
class DeleteModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modal:false
        }
        this.toggle = this.toggle.bind(this);
        this.delete=this.delete.bind(this);
    }
    toggle(){
        this.setState({
          modal: !this.state.modal
        });
      }
      delete(){
        axios.delete(`https://killer-notes.herokuapp.com/note/delete/${this.props.match.params.noteId}`)
        .then(res=>this.props.history.push('/notes'))
        .catch(err=>console.log(err));
      }
      render() {
          return(
            <div>
            <Span onClick={this.toggle}>{'delete'}</Span>
            <Modal isOpen={this.state.modal}>
            <ModalContent>
            <ModalInfo>
                <ModalHeader>Are you sure you want to delete this?</ModalHeader>
                <ButtonContainer>
                <DeleteButton onClick={this.delete}>Delete</DeleteButton>
                <NoButton onClick={this.toggle}>No</NoButton>
            </ButtonContainer>
            </ModalInfo>
            </ModalContent>
            </Modal>
          </div>
          )
      }
}
export default withRouter(DeleteModal);