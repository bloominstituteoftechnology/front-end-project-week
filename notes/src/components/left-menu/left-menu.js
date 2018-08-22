import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import {getNotes } from '../../actions';

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
    }
`;

class LeftMenu extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    this.props.getNotes();
    this.setState({
      notes: this.props.state.notes
    })
  }

  download = () => {
    console.log("download clicked", this.props.state.notes)
  }

  delete = () => {
    console.log("download clicked", this)
  }

  render(){
    console.log(this)
    var status = {
      deleted: [],
      active: [],
    }

    return (
      <LeftMenuDiv>
        <h1>Lambda Notes</h1>
        <Link draggable className="menu-item" to="/all-notes/">View Your Notes</Link>
        <Link className="menu-item" to="/new-note">+ Create New Note</Link>
        <div className="menu-item" onClick={this.download} >Download CSV</div>
        {this.props.location.pathname === "/all-notes/" ?
          <Link onDrop={this.drop_handler} onDragOver={this.dragover_handler} className="menu-item red" onClick={this.delete} to="/deleted-notes">Delete Item</Link> :
          null}

      </LeftMenuDiv>
    )
  }
}

const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {
  getNotes,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftMenu));
