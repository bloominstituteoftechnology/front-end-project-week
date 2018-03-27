import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addNote } from '../actions';
import {Button, Input} from 'reactstrap';


class NewNoteForm extends React.Component {
    state = {
      newTitle: '',
      newText: ''
    }
  
    addNote = () => {
      console.log('addNote FIRED')
      this.props.addNote({
        title: this.state.newTitle,
        text: this.state.newText,
      })
      this.setState({
        modal: !this.state.modal,
        newTitle: '',
        newText: '',
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
              <div>
            <button color="primary" onClick={this.toggle}>+ Create New Note</button>
            <Input className="text-center" type="text" name="newTitle" id="title" placeholder="Title" onChange={this.handleChange}/>
            <Input className="text-center" type="textarea" name="newText" id="text" placeholder="Text" onChange={this.handleChange}/>
            <Button color="primary" onClick={this.addNote}>Add</Button>
            </div>
          )
      }
    }

      export default connect(null, { addNote })(NewNoteForm);