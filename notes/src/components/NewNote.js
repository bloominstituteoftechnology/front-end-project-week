import React from 'react';
import '../App.css';
import NewNoteForm from './NewNoteForm';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    margin: 5% 3%;
`

class NewNote extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textBody: '',
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();

        this.props.addNote(this.state)
        this.setState({
            title:'',
            textBody: '',
        }) 
        this.props.history.push('/');
    }

    render() {
        return (
            <Section>
                <div className = 'page-header'>
                    <h3>Create New Note:</h3>

                    <NewNoteForm 
                    title = {this.props.title} 
                    textBody = {this.props.textBody} 
                    submitHandler = {this.submitHandler} 
                    handleChange = {this.handleChange}/>
                </div>
            </Section>
        )
    }
}

export default NewNote;
