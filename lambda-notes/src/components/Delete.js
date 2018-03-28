import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleDelete, deleteNote } from '../actions';

const StyledDelete = styled.div`


`;

class Delete extends React.Component {

render() {
    return (
  <StyledDelete>
      <div className="delete-modal">
        <p>Are you sure you want to delete this?</p>
        <Link to={"/"}>
            <button 
                className="delete-button"
                type="button" 
                onClick={() => {this.props.deleteNote(this.props.id)}} 
                >Delete
            </button>
        </Link>
        <button 
            className="no-button" 
            type="button" 
            onClick={() => {this.props.toggleModal()}} 
            >No
        </button>
      </div>
  </StyledDelete>
    );
  }
}

const mapStateToProp = (state) => {
    return {
      notes: state.notes,
    }
  }

export default connect(null, { toggleDelete, deleteNote })(Delete);