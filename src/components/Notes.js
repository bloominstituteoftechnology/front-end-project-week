import React, { Component } from 'react';
import styled from 'styled-components';
import { updateSelected } from '../actions';
import { connect } from 'react-redux';

const NoteStyled = styled.div`
  background-color: white;
  padding: 15px;
  margin: 10px;
  width: 150px;
  height: 180px;
  h4 {
    font-weight: bold;
    border-bottom: 1px solid black;
    margin-bottom: 8px;
  }
  p {
    font-family: 'Raleway';
    font-size: 13px;
    overflow: hidden;
    position: relative;
    line-height: 16px;
    max-height: 160px;
    margin-right: -13px;
    padding-right: 13px;
    :before {
      content: '...';
      position: absolute;
      right: 8px;
      bottom: 0;
    }
    :after {
      content: '';
      position: absolute;
      right: 8px;
      width: 13px;
      height: 13px;
      margin-top: 3px;
      background: white;
    }
  }
`;

class Notes extends Component {
  render() {
    return (
      <NoteStyled>
        <h4
          onClick={() => {
            this.props.updateSelected(this.props.note._id);
          }}
        >
          {this.props.note.title}
        </h4>
        <p
          onClick={() => {
            this.props.updateSelected(this.props.note._id);
          }}
        >
          {this.props.note.text}
        </p>
      </NoteStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.notes
  };
};

export default connect(mapStateToProps, { updateSelected })(Notes);
