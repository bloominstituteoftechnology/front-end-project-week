import React from 'react'
import styled from 'styled-components'

const NotesMain = (props) => {
  return (
    <Div1 className="NotesMain">
      <H2>NotesMain Functional Component</H2>
        {
          props.notes.map(item => 
            <Div2 key={item.id}>
              <H3>{item.title}</H3>
              <P>{item.text}</P>
            </Div2>
          )
        }
    </Div1>
  )
}

const Div1 = styled.div``
const Div2 = styled.div``
const H2 = styled.h2``
const H3 = styled.h3``
const P = styled.p``

export default NotesMain