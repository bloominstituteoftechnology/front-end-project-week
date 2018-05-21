import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { addTranscript, speechToggle } from '../actions'

class Speech extends Component {
  componentDidMount() {
    this.recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)()
  }

  start = () => {
    this.props.speechToggle()
    this.recognition.onresult = event => {
      this.props.addTranscript(event.results[0][0].transcript)
    }
    this.recognition.start()
  }

  stop = () => {
    this.props.speechToggle()
    this.recognition.stop()
  }

  render() {
    return <div className='Speech'>
      {this.props.isListening
        ? <button className='button' onClick={this.stop}>Stop</button>
        : <Fragment>
            <button className='button' onClick={this.start}>Start</button>
            <button className='button' onClick={() => this.props.onSave(this.props.transcript)}>
              Send
            </button>
          </Fragment>}
    </div>
  }
}

export default connect(
  ({ notes: { isListening, transcript }}) => ({ isListening, transcript }),
  { addTranscript, speechToggle }
)(Speech)