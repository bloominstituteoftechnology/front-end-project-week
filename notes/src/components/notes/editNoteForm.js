import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateNote} from '../../actions';

const EditNotePage=styled.div`
background-color:#ddd;
width: 75%;
`
const EditNoteHeading=styled.h2`
text-align: left;
color:#424242
margin-left: 5%;
margin-top: 70px;
`
const EditnoteForm=styled.div`
width: 92.5%;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 5%;
`
const EditNoteButton=styled.div`
width: 30%;
margin-top: 20px;
height: 40px;
background-color: #0db5ba;
color:#FFF;
display: flex;
align-items: center;
justify-content: center;
`
const EditNoteInput=styled.input`
width: 55%;
height: 30px;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
`
const EditNoteTextArea=styled.textarea`
height: 400px;
width: 96%;
margin-top: 20px;
border-radius: 3px;
margin-bottom: 20px;
`
class EditNoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            id:'',
            tags:''
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentDidMount() {
        localStorage.setItem('location',this.props.location.pathname);
        if (this.props.note.title && this.props.note.textBody) {
            this.setState({title:this.props.note.title,
                content:this.props.note.textBody,
                id:this.props.note.id,
                tags:this.props.note.tags?this.props.note.tags.replace(/,/g,''):''}
            ,()=>localStorage.setItem('note',JSON.stringify(this.props.note)));
        } else {
            const note=JSON.parse(localStorage.getItem('note'));
            this.setState({title:note.title,
                content:note.textBody,
                id:note.id,
                tags:note.tags});
        }
    }
    editNoteObj=()=>{
        const editedNote={
            title:this.state.title,
            textBody: this.state.content,
            tags:this.state.tags.replace(/ /g,', ')
        }
        this.props.updateNote(this.state.id,editedNote,this.props.history);
    }
    render() {
        return(
            <EditNotePage>
                <EditNoteHeading>Create New Note:</EditNoteHeading>
                <EditnoteForm>
                <EditNoteInput name='title' type='text' placeholder='Note Title' value={this.state.title} onChange={this.handleInputChange}/>
                <EditNoteTextArea name='content' type='text' placeholder='Note Content' value={this.state.content} onChange={this.handleInputChange}/>
                <EditNoteInput name='tags' type='text' placeholder='Note Tags' value={this.state.tags} onChange={this.handleInputChange}/>
                <EditNoteButton onClick={this.editNoteObj}>Save</EditNoteButton>
                </EditnoteForm>
            </EditNotePage>
        )
    }
}
const mapStateToProps=state=>{
    return {
        note:state.note
    }
}
export default connect(mapStateToProps,{updateNote})(withRouter(EditNoteForm));