import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNote } from '../actions';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 2.7rem;
    padding-right: 3rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  letter-spacing: 0.65px;
  width: 190px;
  height: 43px;
  font-size: 1.4rem;
  font-family: 'Raleway', sans-serif;
  margin-top: 2.1rem;
  color: white;
  background: #24b8bd;
  border: 1px solid rgb(163, 170, 171);
`;

const TextArea = styled.textarea`
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 20px;
  margin-top: .25rem;
  resize: none;
`;

const Input = styled.input`
  width: 357px;
  margin-bottom: .25rem;
  height: 42px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0;
`;

const Heading = styled.h2`
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
    padding: 0;     
    font-size: 1.9rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    letter-spacing: .8px;
`;

const Warning = styled.p`
    align-text: center;
    font-size: 24px;
    font-weight: bold;
    color: #E63946;
    margin: auto;
    transition-delay: 0.5s;
    font-family: 'Lora', Serif;
`;

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      error: {}
    }
  }

  submitHandler = e => {
    e.preventDefault();
    if (!(this.titleInput.value && this.contentInput.value)) {
      this.setState({isValid: false})
    } else {
      this.props.addNote({
        title: this.titleInput.value,
        content: this.contentInput.value
      })
      this.setState({isValid: true})
      this.props.history.push('/');
    }

  }

  render() {
    const warning = this.state.isValid
      ? null
      :
      <Warning>
        ERROR: Please provide both title and content for note.
      </Warning>;

    return (
      <Content>
        <Heading>Create New Note: </Heading>
        <Form>
          <Input
            placeholder="Note Title"
            type="text"
            name="title"
            innerRef={node => this.titleInput = node}
          />
          <TextArea
            placeholder="Note Content"
            type="text"
            name="body"
            cols="30"
            rows="13"
            innerRef={node => this.contentInput = node}
          />
          <Button type='button' onClick={(e) => this.submitHandler(e)}>Save</Button>
        </Form>
        {warning}
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default withRouter(connect(mapStateToProps, { addNote })(AddForm));