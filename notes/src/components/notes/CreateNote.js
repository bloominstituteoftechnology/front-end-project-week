import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.div`
  text-decoration: none;
  color: #4a4a4a;
  text-align: left;
  font-size: 20px;
  line-height: 12px;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: bolder;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: flex-start;
  align-content: flex-start;
  padding-left: 13px;
  padding-bottom: 13px;
  margin-top: 20px;
`;

const Button = styled.div`
  background-color: #2bc1c4;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  width: 100px;
  text-decoration: none;
  margin-bottom: 150px;
  margin-top: 6px;
  width: 140px;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: bolder;
  border-style: solid;
  border-color: #979797;
  border-width: 0.5px;
`;

const Form = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrapcd..
  -webkit-align-content: flex-start;
  align-content: flex-start;
  padding-left: 13px;
  padding-bottom: 13px;

`;

const ButtonNoStyle = {
  background: 'none',
	color: 'inherit',
	border: 'none',
	padding: 0,
	font: 'inherit',
	cursor: 'pointer',
	outline: 'inherit'
}

const Card = {

  marginBottom:' 500px',
  marginLeft:' 40px'
};




class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }
  ß;
  addNote = event => {
    event.preventDefault();
    const note = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(response => {
        this.setState(
          {
            note: response.data
          },
          () => console.log(this.state)
        );
      })
      .catch(error => {
        console.error("Server Error", error);
      });

    this.setState({
      title: "",
      textBody: ""
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form  style={Card} onSubmit={this.addNote}>
        <Title>
         Create New Note:
        </Title>
        <Form>
          {" "}
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Note Title"
          />
        </Form>
        <Form>
        <textarea
          rows="8"
          cols="80"
          type="text"
          name="textBody"
          id="textBody"
          value={this.state.textBody}
          onChange={this.handleChange}
          placeholder="Note Content"
        />
         </Form>

      <Button> <button style={ButtonNoStyle} type="submit">Create</button></Button>
      </form>
    );
  }
}

export default CreateNote;
