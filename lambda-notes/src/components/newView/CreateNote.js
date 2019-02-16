import React, { Component } from 'react'
import moment from 'moment'

import {Form, Title, Content, StyledLink, MainDiv } from '../editView/styled'

export default class CreateNote extends Component {
  state = {
    title: '',
    content: '',
    completed: false,
    time_posted: moment().format('YYYY-MM-DD hh:mm:ss a'),
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = () => {
    this.props.createNote(this.state)
  }

  render() {
    return (
      <MainDiv>
        <Form>
          <h1>Create New Note</h1>
          <Title type='text' name='title' value={this.state.title} onChange={this.changeHandler} />
          <Content name='content' value={this.state.content} onChange={this.changeHandler} />
          <StyledLink to={'/'}><div onClick={this.submitHandler}>Submit Note</div></StyledLink>
        </Form>
      </MainDiv>
    )
  }
}
