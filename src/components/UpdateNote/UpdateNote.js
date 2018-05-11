import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Badge } from 'reactstrap'
import './UpdateNote.css'

class UpdateNote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tags: [],
      tag: ''
    }
  }

  handleUpdate (event) {
    event.preventDefault()
    this.props.updateNote(this.props.note, this.state.tags)
    this.props.history.push('/')
  }

  handleTag = e => {
    e.preventDefault()
    const value = this.state.tag
    console.log(value)
    this.setState({
      tags: [value, ...this.state.tags],
      tag: ''
    })
  }

  handleChange = event => {
    this.setState({
      tag: event.target.value
    })
  }
  componentDidMount () {
    this.setState({ tags: this.props.note.tags })
  }
  render () {
    return (
      <div className='UpdateNote'>
        <form
          className='update-form form-group mx-3'
          onSubmit={this.handleUpdate.bind(this)}
        >
          <label className='input-label'>
            <h2 className='label-h2'>Edit Note:</h2>
          </label>
          <input
            required
            className='input-title form-control'
            type='text'
            placeholder='Note Title'
            value={this.props.title || this.props.note.title}
            onChange={this.props.newTitle}
          />
          <section>
            <label className='label-tag'>Add Tag:</label>
            <input
              className='input-tag'
              type='text'
              placeholder='Note Tag'
              onChange={this.handleChange}
              value={this.state.tag}
            />
            <button
              className='btn-sm btn-success ml-2'
              onClick={this.handleTag}
            >
              Add Tag
            </button>
            {this.state.tags.map((tag, index) =>
              <Badge
                pill
                className='badge-tag ml-2'
                color='primary'
                key={tag + index}
                onClick={() => {
                  this.setState({
                    tags: this.state.tags.filter(curTag => tag !== curTag)
                  })
                }}
              >
                {tag} x
              </Badge>
            )}
          </section>
          <textarea
            required
            className='input-body form-control'
            type='text'
            placeholder='Note Content'
            value={this.props.content || this.props.note.content}
            onChange={this.props.newContent}
          />
          <button className='sav-btn' type='submit'>
            Update
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(UpdateNote)
