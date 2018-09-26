import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {addNote} from '../../actions';

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
margin-bottom: 20px;
`
class NewNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            tags:''
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentDidMount(){
        localStorage.setItem('location',this.props.location.pathname);
    }
    createnewNoteObj=()=>{
        let tags=this.state.tags.replace(/,/g,'').replace(/\s+/g,' ').replace(/\s/g,', ');
        if (tags[tags.length-2]===',') {
            tags=tags.substring(0,tags.length-2);
        }
        if (this.state.title.length>0 && this.state.content.length>0){
            const newNote={
                title:this.state.title,
                textBody: this.state.content,
                tags: tags.length>0?tags:null
            }
            this.props.addNote(newNote,this.props.history);
        }
    }
    render() {
        return(
            <CreateNotePage>
                <CreateNoteHeading>Create New Note:</CreateNoteHeading>
                <CreateNoteForm>
                <CreateNoteInput name='title' type='text' placeholder='Note Title' value={this.state.title} onChange={this.handleInputChange}/>
                <CreateNoteTextArea name='content' type='text' placeholder='Note Content' value={this.state.content} onChange={this.handleInputChange}/>
                <CreateNoteInput name='tags' type='text' placeholder='Note Tags' value={this.state.tags} onChange={this.handleInputChange}/>
                <CreateNoteButton onClick={this.createnewNoteObj}>Save</CreateNoteButton>
                </CreateNoteForm>
            </CreateNotePage>
        )
    }
}
const mapStateToProps=state=>{
    return {
        state
    }
}
export default connect(mapStateToProps,{addNote})(withRouter(NewNote));