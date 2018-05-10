import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startListening, stopListening, addToRegister, clearRegister } from '../actions/speech'
import Mic from './Mic'

const head = arr => arr[0]

class Speak extends Component {
  componentDidMount = () => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    this.recognition = new window.SpeechRecognition()
    this.recognition.interimResults = true
  }

  componentWillUnmount = () => {
    this.recognition.removeEventListener('result', this.accumulateTranscript)
  }

  startListening = () => {
    this.props.startListening()
    this.recognition.addEventListener('result', this.accumulateTranscript)
    this.recognition.start()
  }

  stopListening = () => {
    this.props.stopListening()
    this.recognition.stop()
  }

  accumulateTranscript = e => {
    const transcript = Array.from(e.results)
      .map(head)
      .map(({ transcript }) => transcript)
      .join('')

    if ((head(e.results).isFinal))
      this.props.addToRegister(transcript)
  }

  render() {
    const { onSave } = this.props
    return (
      <div className="Speak">
        <Mic
          startListening={this.startListening}
          stopListening={this.stopListening}
        />
        <button onClick={() => onSave(this.props.register)}>Looks good?</button>
        <div className="transcript">
          {this.props.register.map(t => <p key={t}>{t}</p>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({
  speech: { isListening, register }
}) => ({ isListening, register })

const mapDispatchToProps = {
  startListening,
  stopListening,
  addToRegister,
  clearRegister,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Speak)
