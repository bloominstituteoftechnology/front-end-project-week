import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {Form, Title, TextBody, StyledLink, MainDiv } from '../editView/styled'

export default class CreateNote extends Component {
  state = {
    title: '',
    textBody: ''
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
          <TextBody name='textBody' value={this.state.textBody} onChange={this.changeHandler} />
          <StyledLink to={'/'}><div onClick={this.submitHandler}>Submit Note</div></StyledLink>
        </Form>
      </MainDiv>
    )
  }
}
