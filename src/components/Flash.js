import React from 'react'
import { connect } from 'react-redux'
import { clearFlashMessage } from '../state/actions'

const Flash = ({ flashMessage, clearFlashMessage }) => (
  <h3 onClick={clearFlashMessage}>
    {flashMessage}
  </h3>
)

const mapStateToProps = ({ flashMessage }) => ({ flashMessage })
const mapDispatchToProps = { clearFlashMessage }

export default connect(mapStateToProps, mapDispatchToProps)(Flash)