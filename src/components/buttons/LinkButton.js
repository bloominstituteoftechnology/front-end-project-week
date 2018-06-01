import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ to, text }) => (
  <Link className="link-button" to={to}>{text}</Link>
)

export default LinkButton