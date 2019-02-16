import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Form, Title, Content, StyledLink, MainDiv } from './styled';

export default class Edit extends Component {
  state = {
    title: '',
    content: '',
    completed: false,
    time_updated: moment().format('YYYY-MM-DD hh:mm:ss a'),
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchNote(id)
  }

  fetchNote = id => {
    axios
      .get(`https://alf-lambda-notes.herokuapp.com/note/${id}`)
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
    axios
      .put(`https://alf-lambda-notes.herokuapp.com/note/${id}/edit`, this.state)
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
