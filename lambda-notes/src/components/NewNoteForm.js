import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addNote } from '../actions';
import {Button, Input} from 'reactstrap';

const StyledNewNoteForm = styled.div`

`;


class NewNoteForm extends React.Component {
    state = {
      newTitle: '',
      newText: ''
    }
  
    addNote = (event) => {
      event.preventDefault();
      console.log('addNote FIRED')
      this.props.addNote({
        ...this.state,
        title: this.state.newTitle,
        text: this.state.newText,
      })
      this.setState({
        newTitle: '',
        newText: '',
        redirect: true,
      })
    }

    handleChange = (e) => {
        console.log(`setState to --> [${e.target.name}]: ${e.target.value}`)
          console.log('handleChange: e.target.value', e.target.value)
          this.setState({
            [e.target.name]: e.target.value
          });
      }

      render () {
          return (
              <StyledNewNoteForm>
            <input className="title" type="text" name="newTitle" placeholder="Title" onChange={this.handleChange} value={this.state.newTitle}/>
            <input className="text" type="text" name="newText" placeholder="Text" onChange={this.handleChange} value={this.state.newText}/>
            <Button color="primary" onClick={this.addNote}>Add</Button>
            {this.state.redirect ? <Redirect to='/' /> : null}
            </StyledNewNoteForm>
          )
      }
    }

    const mapStateToProp = (state) => {
      return {
        notes: state.notes,
      }
    }
    
    export default connect(mapStateToProp, { addNote })(NewNoteForm);