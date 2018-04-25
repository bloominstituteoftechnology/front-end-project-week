import React, { Component } from 'react'
import { ActionButton } from '.'
import styled from 'styled-components'

const Mat = styled.div`
  display: ${(props) => props.hidden
    ? 'hidden'
    : 'flex' 
  }
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: rgba(0,0,0,0.7)
`

const Dialog = styled.div`
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 500px
  height: 200px
  background-color: white
  border: 1px solid #AEAEAE
`

const Controls = styled.div`
  margin-top: 20px
  width: 100%
  display: flex
  justify-content: space-evenly
`

const DeleteModal = ({ hidden, deleteNote, hideSelf }) => (
  <Mat hidden={hidden}>
    <Dialog>
      <h5>Are you sure you want to delete this?</h5>
      <Controls>
        <ActionButton 
          type='delete'
          text='Delete'
          onClick={deleteNote} />
        <ActionButton
          text='No'
          onClick={hideSelf} />
      </Controls>
    </Dialog>
  </Mat>
)

export default DeleteModal