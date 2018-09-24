import React, { Fragment } from 'react'
import styled from 'styled-components'

const NotesMain = (props) => {
  return (
    <Div1 className="NotesMain">
      <H2>NotesMain Functional Component</H2>
      <Div2>
        {
          props.notes.map(item => 
            <Fragment>
              <H3>{item.title}</H3>
              <p>{item.text}</p>
            </Fragment>
          )
        }
      </Div2>
    </Div1>
  )
}

const Div1 = styled.div``
const Div2 = styled.div``
const H2 = styled.h2``
const H3 = styled.h3``

export default NotesMain