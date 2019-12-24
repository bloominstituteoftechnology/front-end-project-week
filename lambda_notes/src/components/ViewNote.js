import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DeleteModal from './DeleteModal';

const SideButton = styled.button`
  width: 80%;
  padding: 1rem;
  margin:0 10px;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #fafafa;
  background-color: rgb(55.8%, 54.1%, 53.8%);
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  /* &:not(:last-child) {
    margin-bottom: 1rem;
  } */
`;

const StyledNote = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 320px;
  width: 300px;
  padding-bottom: 20px;
`;

const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
  margin-left: 320px;
  z-index: 10;
  text-decoration: none;
  color: black;

  `;

class ViewNote extends Component {
  constructor(props) {
    super(props);
    //   const note  = this.props;
    this.state = {
      _id: "",
      title: "",
      textBody: ""

    };
  }
  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(response => this.setState(response.data));
  }
  helper = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
      <SecondaryHeading style={{marginTop: '100px'}}>{this.state.title}</SecondaryHeading>

        <StyledNote>
          <form onSubmit={this.handleSubmit}>
          <input style={{width: '500px', padding:'15px', marginBottom:'40px'}}
          value={this.state.title}
          placeholder='Title'
          type="text"
          name="title"
          id=""
          cols="100"
          rows="5"
          onChange={this.handleChange}
        />


            <textarea style={{fontSize: '1rem'}}
              value={this.state.textBody}
              placeholder='Write Something'
              name="textBody"
              id=""
              cols="80"
              rows="20"
              onChange={this.handleChange}
            />
            <div style={{display:'flex', marginTop: '20px'}}>
              <SideButton style={{backgroundColor: '#00A3FF'}}>
                <Link to={`/editnote/${this.state._id}`} style={{color:'white'}}>EDIT</Link>
              </SideButton>
              <SideButton style={{backgroundColor: '#DA0000'}} onClick={this.helper}>DELETE</SideButton>
            </div>
          </form>
        </StyledNote>
      </div>
    );
  }
}

export default ViewNote;
