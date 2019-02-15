import React, { Component } from 'react'
import axios from 'axios'
import { Form, Title, Content, StyledLink, MainDiv } from './styled';

export default class Edit extends Component {
  state = {
    title: '',
    content: '',
    completed: false
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
        this.setState({title: response.data.title, content: response.data.content, completed: response.data.completed})
      })
      .catch(err => console.log(err))
  }


  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    const id = this.props.match.params.id
    console.log(id)
    axios
      .put(`http://localhost:4500/note/${id}/edit`, this.state)
      .then( () => {
        this.props.getNotes()
      })
  }

  render() {
    return (
      <MainDiv>
        <Form>
          <h1>Edit Note:</h1>
          <Title type='text' name='title' value={this.state.title} onChange={this.changeHandler} />
          <Content name='content' value={this.state.content} onChange={this.changeHandler} />
          <StyledLink to={'/'}><div onClick={this.submitHandler}>Update</div></StyledLink>
        </Form>
      </MainDiv>
    )
  }
}
