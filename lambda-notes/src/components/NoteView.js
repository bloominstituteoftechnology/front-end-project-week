import React, { Component } from 'react'
import DeleteModal from './DeleteModal'
import { Link, Route } from 'react-router-dom'

export default class extends Component {

  state = {
    modalOpen: false
  }

  toggleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen
    }))
  }
  
  render() {
    
    const {
      title,
      text,
      id,
    } = this.props

    const { modalOpen } = this.state

    return (
      <div>
        <h2>{title}</h2>
        <hr />
        <p>{text}</p>
        <br /><br />
        <span onClick={this.toggleModal}>
          [delete]
        </span>
        <Link to={`/note/${id}/edit`}>
          [edit]
        </Link>
        {modalOpen && 
          <DeleteModal 
            toggleModal={this.toggleModal}
            {...this.props}
          />
        }
      </div>
    )
  }
}

