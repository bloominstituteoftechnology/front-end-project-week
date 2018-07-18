import React, { Component } from 'react'
import DeleteModal from './DeleteModal'
import Button from './Button'
import Flex from './Flex'
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
        <Flex>
          <Button
            onClick={this.toggleModal}
            variant='warning'
            width={60}
            mx={2}
          >
            delete
          </Button>
          <Link to={`/note/${id}/edit`}>
            <Button 
              variant='primary'
              width={60}
              mx={2}
            >
              edit
            </Button>
          </Link>
        </Flex>
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

