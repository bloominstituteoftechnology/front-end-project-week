import React from 'react'
import Button from './Button'
import Box from './Box'
import Flex from './Flex'
import styled from 'styled-components'

const FixedCenter = styled(Box)`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default ({ 
  toggleModal, 
  deleteNote, 
  id,
  history
}) =>
  <FixedCenter 
    width={600}
    height={220}
    borderColor='black'
    border={1}
    bg='white'
  >
    <Flex
      width='100%'
      justifyContent='center'
    >
      <h3>Are you sure you want to delete this?</h3>
    </Flex>
    <Flex
      alignItems='center'
      justifyContent='center'
      height='50%'
      width='100%'
    >
      <Button 
        onClick={() => {
          deleteNote(id)
          history.push('/')
        }}
        variant='warning'
        mx={1}
        width={200}
      >
        Delete
      </Button>
      <Button 
        onClick={toggleModal}
        variant='primary'
        mx={1}
        width={200}
      >
        No
      </Button>
    </Flex>
  </FixedCenter>
    
  
    
