import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Note extends Component {
  state = {
    modal: false
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

render() {
      const note = this.props.notes.filter(note => note.id === Number(this.props.match.params.id))[0]
    
      return (
        <Div1 className="Note">
          {
            this.state.modal ? (
            <Div2>
              <Div3>
                <P2>delete this?</P2>
                <Fragment>
                <Button delete onClick={() => this.props.deleteNote(Number(note.id))}>Delete</Button>
                <Button onClick={this.closeModal}>No</Button>
              </Fragment>   
              </Div3>
            </Div2>
            ) : null
          }
  
  <Div4>
          <Link1 to={`/notes/${note.id}/edit`} onClick={() => this.props.editNote(Number(note.id))}>
            edit&nbsp;
          </Link1>
          <A1 onClick={this.openModal}>delete</A1>
        </Div4>
          <H2>{note.title}</H2>
          <P1>{note.text}</P1>
          <P1>Note Tags:<br />
          {
            note.tags.map((item, index) => {
              return <span key={`tag${index}`}>{ (index ? ', ' : '') + item }</span>; 
            })
          }
        </P1>
        </Div1>
      )
    }
  }

  const Div1 = styled.div`
  padding: 1%;
  `


  export default Note