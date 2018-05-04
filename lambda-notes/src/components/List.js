import React, { Component } from "react";
import NoteList from "./NoteList";
import HomeLeftPanel from "./HomeLeftPanel";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledList = styled.div`
  display: flex;
  font-family: Roboto;
`;

class List extends Component {
  
  render() {
    console.log('List render this.props', this.props)
    return (
      <StyledList>
        <HomeLeftPanel />
        <NoteList _id={this.props.match.params._id} notes={this.props.notes.dummyData}/>
      </StyledList>
    );
  }
}

const mapStateToProp = state => {
  console.log('List mapStateToProp this.props', this.props)
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProp, {})(List);
