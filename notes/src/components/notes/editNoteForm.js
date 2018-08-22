import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateNote} from '../../actions';

const CreateNotePage=styled.div`
background-color:#ddd;
width: 75%;
`
const CreateNoteHeading=styled.h2`
text-align: left;
color:#424242
margin-left: 5%;
margin-top: 70px;
`
const CreateNoteForm=styled.div`
width: 92.5%;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 5%;
`
const CreateNoteButton=styled.div`
width: 30%;
margin-top: 20px;
height: 40px;
background-color: #0db5ba;
color:#FFF;
display: flex;
align-items: center;
justify-content: center;
`
const CreateNoteInput=styled.input`
width: 55%;
height: 30px;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
`
const CreateNoteTextArea=styled.textarea`
height: 400px;
width: 96%;
margin-top: 20px;
border-radius: 3px;
`
class EditNoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentDidMount() {
        localStorage.setItem('location',this.props.location.pathname);
        if (this.props.note.title!==undefined && this.props.note.textBody!==undefined) {
            this.setState({title:this.props.note.title,content:this.props.note.textBody},()=>localStorage.setItem('note',JSON.stringify(this.props.note)));
        } else {
            const note=JSON.parse(localStorage.getItem('note'));
            this.setState({title:note.title,content:note.textBody});
        }
    }
    editNoteObj=()=>{
        const editedNote={
            title:this.state.title,
            textBody: this.state.content
        }
        this.props.updateNote(this.props.note._id,editedNote,this.props.history);
    }
    render() {
        return(
            <CreateNotePage>
                <CreateNoteHeading>Create New Note:</CreateNoteHeading>
                <CreateNoteForm>
                <CreateNoteInput name='title' type='text' placeholder='Note Title' value={this.state.title} onChange={this.handleInputChange}/>
                <CreateNoteTextArea name='content' type='text' placeholder='Note Content' value={this.state.content} onChange={this.handleInputChange}/>
                <CreateNoteButton onClick={this.editNoteObj}>Save</CreateNoteButton>
                </CreateNoteForm>
            </CreateNotePage>
        )
    }
}
const mapStateToProps=state=>{
    return {
        note:state.note
    }
}
export default connect(mapStateToProps,{updateNote})(withRouter(EditNoteForm));