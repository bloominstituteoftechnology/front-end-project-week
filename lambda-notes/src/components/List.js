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
    return (
      <StyledList>
        <HomeLeftPanel />
        <NoteList id={this.props.match.params.id} />
      </StyledList>
    );
  }
}

const mapStateToProp = state => {
  console.log(this.props)
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProp, {})(List);
