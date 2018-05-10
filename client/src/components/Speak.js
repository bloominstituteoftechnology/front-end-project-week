import React, { Component } from 'react'
import FA from 'react-fontawesome'

class Speak extends Component {
  state = { isListening: false, transcript: [] }

  componentDidMount = () => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    this.recognition = new window.SpeechRecognition()
    this.recognition.interimResults = true
  }

  listen = () => {
    this.setState({ isListening: true })

    this.recognition.addEventListener('result', this.accumulateTranscriptOnState)
    this.recognition.addEventListener('end', () => {
      if (this.state.isListening)
        this.recognition.start()
    })

    this.recognition.start()
  }

  stopListening = () => {
    this.setState({ isListening: false })

    this.recognition.removeEventListener('result', this.accumulateTranscriptOnState)
    this.recognition.removeEventListener('end', this.accumulateTranscriptOnState)
    this.recognition.stop()
  }

  accumulateTranscriptOnState = e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

    if (e.results[0].isFinal)
      this.setState(prevState => ({ transcript: prevState.transcript.concat(transcript) }))
  }

  componentWillUnmount = () => { }

  render() {
    return (
      <div className="Speak">

        {this.state.isListening
          ? (
            <button onClick={this.stopListening}><FA
              name="microphone-slash"
              size="1x"
            /></button>
          ) : (
            <button onClick={this.listen}><FA
              name="microphone"
              size="1x"
            /></button>
          )

        }
        <div className="transcript">
          {this.state.transcript.map(t => <p key={t}>{t}</p>)}
        </div>
      </div>
    )
  }
}

export default Speak
