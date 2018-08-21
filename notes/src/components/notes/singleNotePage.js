import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SingleNote=styled.div`
background-color: #ddd;
width: 100%;
text-align: left;
`
const Note=styled.div`
background-color:#ddd;
width: 75%;
`
const NoteHeading=styled.h2`
margin-top: 30px;
margin-left: 5%;
color: #424242;
`
const NoteInfo=styled.p`
margin-left:5%;
color: #424242;
`
const EDcontainer=styled.div`
display: flex;
height: 60px;
justify-content: flex-end;
align-items: center;
margin-right: 5%;
`
const Span=styled.span`
text-decoration: underline;
font-weight: bold;
:first-child{
    margin-right: 2%;
}
`
class SingleNotePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            textBody:''
        }
    }
    componentDidMount() {
        axios.get(`https://killer-notes.herokuapp.com/note/get/${this.props.match.params.noteId}`)
        .then(res=>this.setState({title:res.data.title,textBody:res.data.textBody}))
        .catch(err=>console.log(err));
    }
    render(){
        return(
            <SingleNote>
            <EDcontainer>
            <Span>edit</Span>
            <Span>delete</Span>
            </EDcontainer>
            <Note>
            <NoteHeading>{this.state.title}</NoteHeading>
            <NoteInfo>{this.state.textBody}</NoteInfo>
            </Note>
            </SingleNote>
        )
    }
}
export default SingleNotePage;