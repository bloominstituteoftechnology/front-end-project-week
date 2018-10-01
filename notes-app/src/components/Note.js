import React, { Component } from 'react';
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Note = props => {
    render() {
    return (
        <Div1 className="Note">
          {
            this.state.modal ? (
            <Div2>
              <Div3>
                <P2>//addfunctions</P2>
                
              </Div3>
            </Div2>
            ) : null
          }
  
          <H2>{note.title}</H2>
          <P1>{note.text}</P1>
        </Div1>
      )
    }
  }

  export default Note