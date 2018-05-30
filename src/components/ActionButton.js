import React from 'react'

const ActionButton = ({ type, text, onClick }) => {
  return (
    <div className={`action-button ${type}`} onClick={onClick}>{text}</Wrapper>
  )
}

export default ActionButton