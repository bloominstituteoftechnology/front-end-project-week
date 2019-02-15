import React, { Component } from 'react'
import axios from 'axios'

import { MainDiv, Links, StyledLink, Edit, Content, H1Header, PTag, Time } from './styled' 

export default class Note extends Component {

  state = {
    note:''
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchNote(id)
  }

  fetchNote = id => {
    axios
      .get(`http://localhost:4500/note/${id}`)
      .then( response => {
        console.log(response.data)
        this.setState({note: response.data})
      })
      .catch(err => console.log(err))
  }

  deleteNote = () => {
    axios
      .delete(`http://localhost:4500/note/${this.state.note.id}/delete`)
      .then( () => {
        this.props.getNotes()
      })
      .catch( err => console.log(err))
  }

  editNote = () => {
    const id = this.props.match.params.id
    axios
    .put(`http://localhost:4500/note/${id}/edit`, this.state)
    .then( () => {
      this.props.getNotes()
    })
  }

  Posted = () => {
    return <Time>posted on: {this.state.note.time_posted}</Time>
  }

  Updated = () => {
    return <Time>updated on: {this.state.note.time_updated}</Time>
  }

  TimeOfPost = () => {
    const updatedTime = this.state.note.time_updated

    if(!updatedTime) {
      return <this.Posted />
    } else {
      return <this.Updated />
    }
  }

  render() {
    return (
      <MainDiv>
        <Links>
          <Edit to={`/note/${this.state.note.id}/edit`} ><h3>Edit</h3></Edit>
          <StyledLink to={'/'}><h3 onClick={this.deleteNote}>Delete</h3></StyledLink>
        </Links>
        <Content>
          <H1Header>{this.state.note.title}</H1Header>
          <PTag>{this.state.note.content}</PTag>
          <this.TimeOfPost />
        </Content>
      </MainDiv>
    )
  }
}