import React, { Component } from 'react'
import axios from 'axios'
import { Form, Title, TextBody, StyledLink, MainDiv } from './styled';

export default class Edit extends Component {
  state = {
    title: '',
    textBody: ''
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
        this.setState({title: response.data.title, textBody: response.data.textBody})
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
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state)
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
          <TextBody name='textBody' value={this.state.textBody} onChange={this.changeHandler} />
          <StyledLink to={'/'}><div onClick={this.submitHandler}>Update</div></StyledLink>
        </Form>
      </MainDiv>
    )
  }
}
