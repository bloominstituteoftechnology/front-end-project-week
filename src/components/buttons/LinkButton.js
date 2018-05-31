import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = (props) => (
  <Link className="link-button" to={props.to}>{props.text}</Link>
)

export default LinkButton