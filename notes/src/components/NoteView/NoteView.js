import React from 'react'
import SideBar from '../SideBar/SideBar'
import styled from 'styled-components'
import NoteNav from './NoteNav'
import NoteContent from './NoteContent'

const ContentDiv = styled.div`
    Width: 100%;
    display: flex;
    background-color: #F3F3F3;
    font-family: 'Open Sans', sans-serif;
    position: relative;
`
const NoteDiv = styled.div`
    width: 80%;
    height: 100%;
    background-color: #F3F3F3;
    margin-left:50px;
`

class NoteView extends React.Component{

componentDidMount(){
   this.props.getNote(this.props.match.params.id)
}

    render(){
        return (
            <ContentDiv>
                <SideBar handleLogout={this.props.handleLogout}/>
                <NoteDiv>
                    <NoteNav id ={this.props.match.params.id}/>
                    <NoteContent title = {this.props.note.title} text = {this.props.note.textBody}/>
                </NoteDiv>
            </ContentDiv>
        )
    }

}

export default NoteView