import React, { Component } from 'react'
import axios from 'axios'

import { MainDiv, Links, StyledLink, Edit, Content, H1Header, PTag, Time, Completed, Complete } from './styled' 

export default class Note extends Component {

  state = {

  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchNote(id)
  }

  fetchNote = id => {
    axios
      .get(`http://localhost:4500/note/${id}`)
      .then( response => {
        this.setState({...response.data})
      })
      .catch(err => console.log(err))
  }

  deleteNote = () => {
    axios
      .delete(`http://localhost:4500/note/${this.state.id}/delete`)
      .then( () => {
        this.props.getNotes()
      })
      .catch( err => console.log(err))
  }

  completeToggle = () => {
    const status = this.state
    const id = this.props.match.params.id
    axios
    .put(`http://localhost:4500/note/${id}/edit`, {...status, completed: true})
    .then( () => {
      this.fetchNote(id)
    }).catch( err => console.log('failed'))
  }

  //the next three methods check if a note has been updated or not
  //and renders the correct time
  Posted = () => {
    return <Time>posted on: {this.state.time_posted}</Time>
  }

  Updated = () => {
    return <Time>updated on: {this.state.time_updated}</Time>
  }

  TimeOfPost = () => {
    const updatedTime = this.state.time_updated

    if(!updatedTime) {
      return <this.Posted />
    } else {
      return <this.Updated />
    }
  }

  // the next two methods allows to toggle between completed or not
  Toggle = () => {
    if (this.state.completed) {
      return <Completed>Completed</Completed>
    } else {
      return <Complete onClick={this.completeToggle}>Complete</Complete>
    }
  }

  render() {
    return (
      <MainDiv>
        <Links>
          <Edit to={`/note/${this.state.id}/edit`} ><h3>Edit</h3></Edit>
          <StyledLink to={'/'}><h3 onClick={this.deleteNote}>Delete</h3></StyledLink>
        </Links>
        <Content>
          <H1Header>{this.state.title}</H1Header>
          <PTag>{this.state.content}</PTag>
          <this.TimeOfPost />
          <this.Toggle />
        </Content>
      </MainDiv>
    )
  }
}