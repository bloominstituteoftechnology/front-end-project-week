import React from 'react'
import { connect } from 'react-redux'
import { NoteForm } from '.'
import styled from 'styled-components'


const blankNote = { title: '', content: '' }

const NoteCreate = (props) => (
  <NoteForm note={blankNote} />
)

export default NoteCreate