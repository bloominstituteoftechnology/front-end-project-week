import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addNote } from '../actions';
import {Button, Input} from 'reactstrap';

const StyledNewNoteForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: lavender;
  width: 70%;

  .title {
    height: 40px;
    width: 60%;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    padding: 5px;
  }

  .text {
    width: 90%;
    height: 300px;
    margin-left: 20px;
    padding: 5px;
  }

  button {
    background: rgb(2, 171, 174);
    margin-left: 20px;
    width: 150px;
  }



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
              <form>
                <input className="title" type="text" name="newTitle" placeholder="Title" onChange={this.handleChange} value={this.state.newTitle}/>
                <textarea className="text" type="text" name="newText" placeholder="Text" onChange={this.handleChange} value={this.state.newText}/>
                <button onClick={this.addNote}>Save</button>
                {this.state.redirect ? <Redirect to='/' /> : null}
              </form>
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