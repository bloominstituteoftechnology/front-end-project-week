import React from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { addNote } from './actions/index';
import { H2Header, NoteContainer, NoteForm, FormTitle, SubmitButton, ButtonContainer, SpeechDirections } from './StyledComponents';




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
                <H2Header>Create a New Note</H2Header>
                <SpeechDirections>
                    <p>Use Speech-to-Text to create a new note! 
                        <br/>Click <strong>Listen</strong> to begin and <strong>Stop</strong> when you are done.</p>
                </SpeechDirections>
                <NoteForm onSubmit={this.submitHandler} >
                    <FormTitle onChange={this.inputHandler} type="text" value={this.state.title} name="title" placeholder="Note Title" />
                    <ReactQuill className="quillEditor" value={this.state.textBody} onChange={this.handleChange} placeholder="Hit Listen to record a note" />
                    <ButtonContainer>
                        <SubmitButton onClick={this.toggleListen}>Listen / Stop</SubmitButton>
                        <SubmitButton type="submit">Save</SubmitButton>
                    </ButtonContainer>
                </NoteForm>
            </NoteContainer>
        )
    }
}


export default connect( ()=>({}), { addNote })(SpeechNote); 