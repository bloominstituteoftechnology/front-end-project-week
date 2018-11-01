import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import { editNote,deleteNote } from '../Actions';
import Modal from "../Components/Modal";
import NavSection from '../Components/NavView/NavSection'


const ModalDiv = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ModalContainer = styled.div`
    background:white;
    border:1px solid #ccc;
    min-height:190px;
    min-width:530px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center
`;
const Loading = styled.h1`
    font-size:4rem;
`
const ActionsDiv = styled.div`
    display:flex;
    justify-content:flex-end;
`
const WrapperDiv = styled.div`
    margin-top:10px;
    border:1px solid #CECECE;
    display:flex;
`
const NoteSection = styled.div`
    width:75%;
    background-color: #F2F1F2;
    padding-left:25px;
    padding-right:25px;
    padding-top:25px;
`
const NavButton = styled.div`
    background-color:#2FB8BC;
    width:150px;
    height:35px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`
const FormSection = styled.div`
    padding-left:25px;
    padding-right:25px;

`

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

const TitleInput = styled.input`
    width:355px;
    height:43px;
`
const TextArea = styled.textarea`
    margin-top:25px;
    width:610px;
    height:350px;
`
const SaveButton = styled.button`
    width:190px;
    height:40px;
    margin-top:15px;
    background-color:#2FB8BC;
    color:white;
    font-size:1.7rem;
    margin-bottom:100px;
`
const DeleteButton = styled.button`
    background-color:#C3001F;
    width:190px;
    height:40px;
    color:white;
    font-size:1.7rem;
    margin-right:10px;
`
const CancelButton = styled.button`
    width:190px;
    height:40px;
    background-color:#2FB8BC;
    color:white;
    font-size:1.7rem; 
    margin-left:10px;   
`
const WarningText = styled.p`
    font-size:1.6rem;
`
const ModalActions = styled.div`
    display:flex;
    justify-content:space-around;
`
const FormTitle = styled.p`
    margin-top:50px;
    font-weight:bold;
    font-size:2.3rem;
    margin-bottom:30px;
`   
const EditLink = styled.p`
    text-decoration:underline;
    font-size:1.6rem;
    margin-right:10px;
    cursor:pointer;
`
const DeleteLink = styled.p`
    text-decoration:underline;
    font-size:1.6rem;
    margin-left:10px;
    cursor:pointer;
`
const NoteTitle = styled.p`
    margin-top:50px;
    font-weight:bold;
    font-size:2.3rem;
    margin-bottom:30px;    
`
const NoteBody = styled.p`
    font-size:1.6rem;
`
class EditNoteContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            isEditting:false,
            id:'',
            title:'',
            body:'',
            showModal:false
        }
    }
    handleEditClick =event =>{
        this.setState({
            body:this.props.data.textBody,
            title:this.props.data.title,
            id:this.props.data._id,
            isEditting:true
        })
    }
    handleTextChange = event =>{
        this.setState({[event.target.id]: event.target.value})
    }
    handleSubmit = event =>{
        event.preventDefault()
        this.props.editNote(this.state.id,{
            textBody:this.state.body,
            title:this.state.title
        },

        ()=>{
            this.setState({
                body:'',
                title:'',
                id:'',
                isEditting:false
            },()=>{this.props.history.push('/')})
            }
        )
    }
    handleModalDelete = (event,id) =>{
        event.preventDefault();
        this.props.deleteNote(id,()=>{
            this.setState({
                body:'',
                title:'',
                id:'',
                isEditting:false
            },()=>{this.props.history.push('/')});
        });
    }
    handleDelete = (event,id) =>{
        event.preventDefault();
        this.setState({showModal:true})
    }

    handleCancel = event =>{
        event.preventDefault();
        this.setState({showModal:false})
    }
    componentDidUpdate(){
        if((this.props.isEdited)||(this.props.isDeleted)){
        }
    }

    render(){
        if (this.state.showModal) {
            return (
            <div>
                <div id='modalRoot'></div>
                <Modal>
                <ModalDiv>
                    <ModalContainer>
                        <WarningText>Are you sure you want to delete this?</WarningText>
                        <ModalActions>
                            <DeleteButton onClick={(event)=>{this.handleModalDelete(event,this.props.id)}}>Delete</DeleteButton>
                            <CancelButton onClick={this.handleCancel}>No</CancelButton>
                        </ModalActions>                            
                    </ModalContainer>
                </ModalDiv>
                </Modal>          
                
            </div>
            )
        }

        if(this.props.isFetching){
            return <Loading>Loading...</Loading>
        } else 
        {

        if(this.state.isEditting){
            return(
                <WrapperDiv>
                    <NavSection></NavSection>
                    <NoteSection>
                        <FormSection>
                            <FormTitle>Edit Note:</FormTitle>
                            <Form onSubmit={this.handleSubmit}>  
                                <TitleInput onChange={this.handleTextChange} id='title' type='text' value={this.state.title}></TitleInput>
                                <TextArea onChange={this.handleTextChange} id='body' value={this.state.body}></TextArea>
                                <SaveButton>Save</SaveButton>
                           </Form>
                        </FormSection>

                    </NoteSection>
                </WrapperDiv>
            )
        } else 
        {
            return(
                <WrapperDiv>
                    <NavSection></NavSection>
                    <NoteSection>
                        <ActionsDiv>
                            <EditLink onClick={this.handleEditClick}>Edit</EditLink>
                            <DeleteLink onClick={this.handleDelete}>Delete</DeleteLink>
                        </ActionsDiv>
                        <NoteTitle>
                            {this.props.data.title}
                        </NoteTitle>
                        <NoteBody>{this.props.data.textBody}</NoteBody>
                    </NoteSection>
                </WrapperDiv>
            )
        }

        }
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        data: state.individualNote,
        id:ownProps.match.params.id,
        isFetching: state.isFetching,
        isEdited:state.isEdited,
        isEditting:state.isEditting,
        isDeleted:state.isDeleted,
        isDeleting:state.isDeleting
    };
  };


  export default connect(mapStateToProps,{editNote,deleteNote})(EditNoteContainer);
