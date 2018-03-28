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
    margin-left: 5%;
    margin-bottom: 10px;
    padding: 5px;
  }

  .text {
    width: 90%;
    height: 300px;
    margin-left: 5%;
    padding: 5px;
  }

  button {
    background: #2bc1c4;
    margin-left: 5%;
    width: 150px;
  }
`;


class NewNoteForm extends React.Component {
    state = {
      title: '',
      text: '',
      id: this.props.notes.length + 1,
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log('addNote FIRED')
      this.props.addNote({
        ...this.state,
      })
      this.setState({
        title: '',
        text: '',
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
        console.log('NNF this.props', this.props)
          return (
            <StyledNewNoteForm>
              <form>
                <input 
                  required
                  className="title" 
                  type="text" 
                  name="title" 
                  placeholder="Title" 
                  onChange={this.handleChange} 
                  value={this.state.title}
                  maxLength='30'
                  />
                <textarea 
                  required
                  className="text" 
                  type="text" 
                  name="text" 
                  placeholder="Text" 
                  onChange={this.handleChange} 
                  value={this.state.text}
                  maxLength='250'
                  />
                <button onClick={this.handleSubmit}>Save</button>
                {this.state.redirect ? <Redirect to='/' /> : null}
              </form>
            </StyledNewNoteForm>
          )
      }
    }

    const mapStateToProp = (state) => {
      return {
        notes: state.notes
      }
    }
    
    export default connect(mapStateToProp, { addNote })(NewNoteForm);