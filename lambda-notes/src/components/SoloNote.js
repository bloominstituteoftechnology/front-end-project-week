import React from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { deleteNote, editNote } from "../actions";
import Form from "./Form";

const NoteBox = styled.div`
  box-sizing: border-box;
  margin: 23px 14px 0 0;
  padding: 12px 15px 28px;
  position: relative;
  width: 500px;
  word-wrap: break-word;
  max-width: 750px;
  h5 {
    font-size: 24px;
    font-weight: bold;
    word-wrap: break-word;
    padding-bottom: 10px;
  }
  p {
    margin: 10px 0 20px;
    line-height: 2;
    word-wrap: break-word;
    font-size: 14px;
    overflow: hidden;
    padding-bottom: 10px;
  }
  .note-display{
    display: flex;
    flex-direction: column;
  }
  .note-control {
    position: absolute;
    top: -30px;
    right: 5px;
    display: flex;
    p {
      text-decoration: underline;
      font-size: 14px;
      margin: 0 5px;
      cursor: pointer;
    }
  }
  .delete-modal{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 25;
    background: #D3D2D3a6;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    .delete-box{
      width:530px;
      height: 178px;
      border: 1px solid #AFAFAF;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 167px;
      h4{
        margin: 15px;   
        font-size: 16px;
      }
      .button-row{
        width:400px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

class SoloNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      tags: [],
      formView: false,
      deleteView:false
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.props.id}`)
      .then(({ data }) => this.setState({ ...data }))
      .catch(err => console.log(err));
  };

  deleteHandler = () => {
    this.props.deleteNote(this.props.id);
    this.props.history.push("/");
  };

  toggleForm = () => {
    this.setState({ formView: !this.state.formView });
  };

  toggleDelete = () =>{
    this.setState({deleteView: !this.state.deleteView})
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    let edited = {
      title: this.state.title,
      textBody: this.state.textBody,
      tags: this.state.tags
    };
    this.props.editNote(this.props.id, edited);
    this.toggleForm();
  };

  render() {
    if (this.state.message || this.state.errorMessage) {
      this.props.history.push("/");
    }
    return (
      <NoteBox>
        <div className={this.state.title ? "none" : ""}>
          <h3>Fetching Note</h3>
        </div>
        <div className={this.state.formView ? "none" : "note-display"}>
          <h5>{this.state.title}</h5>
          <p>{this.state.textBody}</p>
        </div>
        <div className="note-control">
          <p onClick={this.toggleForm}>edit</p>
          <p onClick={this.toggleDelete}>delete</p>
        </div>
        <div className={this.state.formView ? "" : "none"}>
          <Form
            header='Edit Note:'
            state={this.state}
            submitHandler={this.submitHandler}
            changeHandler={this.changeHandler}
          />
        </div>
        <div className={this.state.deleteView ? 'delete-modal': 'none'}>
        <div className='delete-box'>
          <h4>Are you sure you want to delete this?</h4>
          <div className='button-row'>
          <div onClick={this.deleteHandler} className='button delete'>Delete</div>
          <div onClick={this.toggleDelete} className='button'>No</div>
          </div>
        </div>
        
        </div>
      </NoteBox>
    );
  }
}

export default connect(
  null,
  { deleteNote, editNote }
)(SoloNote);
