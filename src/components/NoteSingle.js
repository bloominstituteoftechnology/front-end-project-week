import React, { Component, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdEdit, MdContentCopy, MdDelete } from 'react-icons/md'

class NoteSingle extends Component {
  state = {
    modal: false
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  deleteNoteFromAPI = (noteId) => {
    console.log(noteId)
    axios.delete(`http://localhost:3333/notes/${noteId}`)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
    this.props.history.push("/")
  }

  cloneNoteToAPI = (note) => {
    const clonedNote = {
      title: note.title,
      text: note.text,
      tags: note.tags,
    }
    axios.post('http://localhost:3333/notes', clonedNote)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
    this.props.history.push("/")
  }

  render() {
    const note = this.props.notes.filter(note => note.id === Number(this.props.match.params.id))[0]
    return (
      <Div1 className="NoteSingle">
        {
          this.state.modal ? (
            <Div2>
              <Div3>
                <P2>Are you sure you want to delete this?</P2>
                <Fragment>
                  <Button delete onClick={() => this.deleteNoteFromAPI(Number(note.id))}>Delete</Button>
                  <Button onClick={this.closeModal}>No</Button>
                </Fragment>
              </Div3>
            </Div2>
          ) : null
        }

        <Div4>
          <H2>{note.title}</H2>
          <Div5>
            <Link1 to={`/notes/${note.id}/edit`} onClick={() => this.props.editNote(Number(note.id))}>
              <MdEdit1 />
            </Link1>
            <A1 onClick={() => this.cloneNoteToAPI(note)}><MdContentCopy1 /></A1>
            <A1 onClick={this.openModal}><MdDelete1 /></A1>
          </Div5>
        </Div4>
        <P>{note.text}</P>
        <P1>Note Tags:&nbsp;
          {
            JSON.parse(note.tags).map((item, index) => {
              return <span key={`tag${index}`}>{(index ? ', ' : '') + item}</span>;
            })
          }
        </P1>
      </Div1>
    )
  }
}

const Div1 = styled.div`
  padding: 1% 3%;
  border: 2px solid #DADCE0;
  border-radius: 10px;
`
const Div2 = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
const Div3 = styled.div`
  background-color: white;
  width: 38%;
  height: 160px;
  margin: 0 auto;
  margin-top: 6%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 3%;
`
const Div4 = styled.div`
  display: flex;
  justify-content: space-between;
`
const Div5 = styled.div`
  width: 20%;
  /* margin: 0; */
  /* padding: 0; */
  display: flex;
  justify-content: space-between;
`
const H2 = styled.h2`
  margin: 0;
`
const P = styled.p`
`
const P1 = styled.p`
  font-size: 1.4rem;
`
const P2 = styled.p`
  font-size: 1.8rem;
  vertical-align: middle;
  width: 100%;
  flex: 1 1 100%;
  text-align: center;
  line-height: 3;
`
const Button = styled.button`
  margin: 0 2%;
  padding: 2%;
  background: ${props => props.delete ? "red" : "#24B8BD"};
`
const Link1 = styled(Link)`
  font-size: 1.6rem;
  color: black;
  margin-right: 0.5rem;
`
const A1 = styled.a`
  font-size: 1.6rem;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`
const MdEdit1 = styled(MdEdit)`
  color: black;
  font-size: 3rem;
  &:hover {
    background: black;
    color: white;
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 20px lightgray;
  }
`
const MdContentCopy1 = styled(MdContentCopy)`
  color: black;
  font-size: 3rem;
  &:hover {
    background: black;
    color: white;
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 20px lightgray;
  }
`
const MdDelete1 = styled(MdDelete)`
  color: black;
  font-size: 3rem;
  &:hover {
    background: black;
    color: white;
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 20px lightgray;
  }
`

export default NoteSingle
