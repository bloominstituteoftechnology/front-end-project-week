import React, { Component } from 'react'
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { editNote } from '../actions'

class EditNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.notes[this.props.match.params.id]._id,
      title: this.props.notes[this.props.match.params.id].title,
      content: this.props.notes[this.props.match.params.id].content
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.editNote({
      title: this.state.title,
      content: this.state.content
    }, this.state.id, this.props.match.params.id)
    this.setState({ title: '', content: '' })
    this.props.history.push(`/view/${this.props.match.params.id}`)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            componentClass="textarea"
            name="content"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    )
  }
}

const mapStateToProps = ({ notes }) => ({ notes })

export default withRouter(connect(mapStateToProps, { editNote })(EditNote))
