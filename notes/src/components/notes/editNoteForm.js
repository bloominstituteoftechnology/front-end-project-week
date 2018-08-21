import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

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
        console.log(props)
        super(props);
        this.state={
            title:'',
            content:'',
            isMounted:false
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentDidMount() {
        this.setState({ isMounted: true }, () => {
            if (this.state.isMounted) {
              this.setState({ isMounted: false });
              axios.get(`https://killer-notes.herokuapp.com/note/get/${this.props.match.params.noteId}`)
              .then(res=>this.setState({title:res.data.title,content:res.data.textBody}))
              .catch(err=>console.log(err));
              }
            }
        )
    }
    editNoteObj=()=>{
        const editedNote={
            title:this.state.title,
            textBody: this.state.content
        }
        this.setState({title:'',content:''});
        axios.put(`https://killer-notes.herokuapp.com/note/edit/${this.props.match.params.noteId}`,editedNote)
        .then(res=>this.props.history.push('/notes'))
        .catch(err=>console.log(err));
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
export default withRouter(EditNoteForm);