import React from 'react';
import '../App.css';

// import { Link } from 'react-router-dom'
import '../App.css';
import styled from 'styled-components'
import NewNoteForm from './NewNoteForm'


const Page = styled.div`
  
  width: 100%;
  margin: 6% 3%;

`

class NewNote extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textBody: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

   
    submitHandler = event => {
        event.preventDefault();
        this.props.addNote(this.state)
        this.setState({
            title:'',
            textBody: ''
        })
        this.props.history.push('/');
       
    }
 

    

    render() {
        return (

            <Page>
                <div className="page-header">
                {/* This should also change when the page changes */}
                    <h3>Create New Note:</h3>
                    <NewNoteForm title={this.props.title} textBody={this.props.textBody} submitHandler={this.submitHandler} handleChange={this.handleChange}/>
                </div>
            </Page>
            
        )


    }
    
}

export default NewNote;



