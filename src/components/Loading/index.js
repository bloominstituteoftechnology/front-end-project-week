import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'semantic-ui-react'

const Loading = ({ text }) => (
  <div className = 'loading'>
    <Loader active inline = 'centered'>{text}</Loader>
  </div>
)

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

export default Loading