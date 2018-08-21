import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DeleteModal from './deleteModal.js';
import {withRouter} from 'react-router-dom';
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
margin-left: 5%;
color: #424242;
`
const NoteInfo=styled.p`
margin-left:5%;
color: #424242;
`
const EDcontainer=styled.div`
display: flex;
height: 50px;
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
            textBody:'',
            isMounted:false
        }
    }

    componentDidMount() {
        this.setState({ isMounted: true }, () => {
            if (this.state.isMounted) {
              this.setState({ isMounted: false });
              axios.get(`https://killer-notes.herokuapp.com/note/get/${this.props.match.params.noteId}`)
              .then(res=>this.setState({title:res.data.title,textBody:res.data.textBody}))
              .catch(err=>console.log(err));
              }
            }
        )
    }
    render(){
        return(
            <SingleNote>
            <EDcontainer>
            <Span onClick={()=>this.props.history.push(`${this.props.match.params.noteId}/edit`)}>edit</Span>
            <DeleteModal/>
            </EDcontainer>
            <Note>
            <NoteHeading>{this.state.title}</NoteHeading>
            <NoteInfo>{this.state.textBody}</NoteInfo>
            </Note>
            </SingleNote>
        )
    }
}
export default withRouter(SingleNotePage);