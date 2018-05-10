import React, { Component } from 'react'
import { connect } from 'react-redux'
import FA from 'react-fontawesome'

const Mic = ({
  startListening,
  stopListening,
  isListening,
}) => (
    <span className="Mic">
      {isListening
        ? (
          <button onClick={stopListening}><FA
            name="microphone-slash"
          /></button>
        ) : (
          <button onClick={startListening}><FA
            name="microphone"
          /></button>
        )
      }
    </span>
  )

const mapStateToProps = ({ speech }) => ({ isListening: speech.isListening })

export default connect(mapStateToProps)(Mic)