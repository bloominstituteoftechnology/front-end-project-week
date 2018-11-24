import React, { Component } from 'react'
import axios from 'axios'

import { MainDiv, Links, StyledLink, Edit, Content, H1Header, PTag } from './styled' 

export default class Note extends Component {

  state = {
    movie:''
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchNote(id)
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then( response => {
        console.log(response.data)
        this.setState({movie: response.data})
      })
      .catch(err => console.log(err))
  }

  deleteNote = () => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.movie._id}`)
      .then( () => {
        this.props.getNotes()
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <MainDiv>
        <Links>
          <Edit to={`/note/${this.state.movie._id}/edit`}><h3>Edit</h3></Edit>
          <StyledLink to={'/'}><h3 onClick={this.deleteNote}>Delete</h3></StyledLink>
        </Links>
        <Content>
          <H1Header>{this.state.movie.title}</H1Header>
          <PTag>{this.state.movie.textBody}</PTag>
        </Content>
      </MainDiv>
    )
  }
}