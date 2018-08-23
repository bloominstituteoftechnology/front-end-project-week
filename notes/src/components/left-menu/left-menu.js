import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import {getNotes } from '../../actions';
import DeleteTarget from './delete-target.js';

const LeftMenuDiv = styled.div`
    border: 1px solid lightgray;
    background-color: #D7D7D7;
    height: 100vh;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      ${'' /* border: 1px solid green; */}
      padding: 10px;
      width: 80%;
    }
    .menu-item{
      ${'' /* border: 1px solid red; */}
      width: 70%;
      padding: 15px;
      text-align: center;
      text-decoration: none;
      color: white;
      background-color: #2AC0C4;
      font-weight: bold;
      margin: 10px;
      border: 1px solid gray;
      &:hover {
        cursor: pointer;
      }
    }
    .red {
      background-color: red;
      color: black;
      height: 200px;
    }
`;

export default class LeftMenu extends Component {

  render(props){
    console.log(this)

    return (
      <LeftMenuDiv>
        <h1>Lambda Notes</h1>
        <Link draggable className="menu-item" to="/all-notes">View Your Notes</Link>
        <Link className="menu-item" to="/new-note">+ Create New Note</Link>
        <div className="menu-item" onClick={this.download} >Download CSV</div>
        <DeleteTarget action='delete' className="menu-item red" />
        {/* <div  onClick={this.delete} to="/deleted-notes">Delete Item</div> */}
      </LeftMenuDiv>
    )
  }
}
