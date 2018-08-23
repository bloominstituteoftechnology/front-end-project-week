import React from 'react';
import styled from 'styled-components';
import DeleteModal from './deleteModal.js';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleNote} from '../../actions';
import ReactMarkdown from 'react-markdown';

const SingleNote=styled.div`
background-color: #ddd;
width: 100%;
text-align: left;
`
const Note=styled.div`
width: 95%;
overflow-wrap: break-word;
word-wrap: break-word;
-ms-word-break: break-all;
word-break: break-word;
-ms-hyphens: auto;
-moz-hyphens: auto;
-webkit-hyphens: auto;
hyphens: auto;
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
    
    componentDidMount() {
        localStorage.setItem('location',this.props.location.pathname);
        this.props.getSingleNote(this.props.match.params.noteId);
    }
    render(){
        if(!this.props.fetchingNote){
        return(
            <SingleNote>
            <EDcontainer>
            <Span onClick={()=>this.props.history.push(`${this.props.match.params.noteId}/edit`)}>edit</Span>
            <DeleteModal/>
            </EDcontainer>
            <Note>
            <NoteHeading><ReactMarkdown source={this.props.note.title}/></NoteHeading>
            <NoteInfo><ReactMarkdown source={this.props.note.textBody}/></NoteInfo>
            </Note>
            </SingleNote>
        )
    } else {
    return <SingleNote/>
}
}
}
const mapStateToProps=state=>{
    return{
        note:state.note,
        fetchingNote:state.fetchingNote
    }
}
export default connect(mapStateToProps,{getSingleNote})(withRouter(SingleNotePage));