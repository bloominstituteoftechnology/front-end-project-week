import React from 'react'
import NoteView from '../NoteView/NoteView'
import styled from 'styled-components'
import DeleteView from './DeleteView'
const ContentDiv = styled.div`
    Width: 100%;
    display: flex;
    background-color: #F3F3F3;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
`;


class DeleteNote extends React.Component{
 
   delete = ()=>{
        this.props.deleteNote(this.props.match.params.id)
        this.props.getNote()
    }
    render(){
        return (
            <ContentDiv>
                <DeleteView deleteNote={this.delete} id={this.props.match.params.id}/>
                <NoteView {...this.props}/>
            </ContentDiv>
        )
    }
 
}

export default DeleteNote