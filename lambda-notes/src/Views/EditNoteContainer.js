import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { editNote,deleteNote } from '../Actions';
import Modal from "../Components/Modal";


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
    min-height:400px;
    min-width:400px;
    border-radius:5px;
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

const NavSection = styled.div`
    background-color:#D3D2D3;
    width:25%;
    border:1px solid #CECECE;

`
const NoteSection = styled.div`
    width:75%;
    background-color: #F2F1F2;
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

`

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

const TitleInput = styled.input`
    width:300px;
    height:25px;
`
const TextArea = styled.textarea`
    margin-top:25px;
    width:300px;
    height:500px;
`
const SaveButton = styled.button`
    width:150px;
    height:25px;
    margin-top:25px;
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
        })
    }
    handleModalDelete = (event,id) =>{
        event.preventDefault();
        this.props.deleteNote(id);
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
            this.setState({
                body:'',
                title:'',
                id:'',
                isEditting:false
            },()=>{this.props.history.push('/')});
        }
    }

    render(){
        console.log(this.props, this.state)
        if (this.state.showModal) {
            return (
            <div>
                <div id='modalRoot'></div>
                <Modal>
                <ModalDiv>
                    <ModalContainer>
                        <button onClick={this.handleCancel}>Cancel</button>
                        <button onClick={(event)=>{this.handleModalDelete(event,this.props.id)}}>Delete</button>
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
                    <NavSection>
                        <p>Lambda Notes</p>
                        <Link to="/AddNote"><NavButton>
                            <p>+ Create New Note</p>
                        </NavButton></Link>
                    </NavSection>
                    <NoteSection>
                        <FormSection>
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
    
                    <NavSection>
                        <p>Lambda Notes</p>
                        <Link to="/AddNote"><NavButton>
                            <p>+ Create New Note</p>
                        </NavButton></Link>
                    </NavSection>
                    <NoteSection>
                        <ActionsDiv>
                            <p onClick={this.handleEditClick}>Edit</p>
                            <p onClick={this.handleDelete}>Delete</p>
                        </ActionsDiv>
                        <p>
                            {this.props.data.title}
                        </p>
                        <p>{this.props.data.textBody}</p>
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
