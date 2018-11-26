import React from 'react';
import { connect } from 'react-redux';
import 'react-quill/dist/quill.snow.css';

import { addNote } from './actions/index';
import { H2Header, NoteContainer } from './StyledComponents';




const SpeechRecognition = window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;

class SpeechNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            textBody: '',
            listening: false
        }
    }

    handleChange = (value) => {
        this.setState({
            textBody: value
        })
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            textBody: ''
        })
        this.props.history.push('/notes');
    }

    toggleListen = (e) => {
        e.preventDefault();
        this.setState({
            listening: !this.state.listening
        }, this.handleListen)
    }

    handleListen() {

        console.log('listening?', this.state.listening)
    
        if (this.state.listening) {
          recognition.start()
          recognition.onend = () => {
            console.log("...continue listening...")
            recognition.start()
          }
    
        } else {
          recognition.stop()
          recognition.onend = () => {
            console.log("Stopped listening per click")
          }
        }
    
        recognition.onstart = () => {
          console.log("Listening!")
        }

        recognition.onresult = (event) => {
            console.log('logging result');
            const speechToText = event.results[0][0].transcript;
            console.log(speechToText);
            this.setState({
                textBody: speechToText
            })
        }
    
    }


    render(){
        return(
            <NoteContainer>
                <H2Header>Create New Note:</H2Header>


                <div>
                    <button id='microphone-btn' onClick={this.toggleListen}>START/STOP</button>
                    <div id='final'>{this.state.textBody}</div>
                </div>

                {/* <NoteForm onSubmit={this.submitHandler} >
                    <FormTitle onChange={this.inputHandler} type="text" value={this.state.title} name="title" placeholder="Note Title" />
                    <textarea className="quillEditor" value={this.state.textBody} onChange={this.handleChange} />
                    <SubmitButton onClick={this.toggleListen}>Listen</SubmitButton>
                    <SubmitButton type="submit">Save</SubmitButton>
                </NoteForm> */}
            </NoteContainer>
        )
    }
}


export default connect( ()=>({}), { addNote })(SpeechNote); 