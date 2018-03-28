import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleDelete, deleteNote } from '../actions';

const StyledDelete = styled.div`

`;

class Delete extends React.Component {
    handleDelete = () => {
      this.props.deleteNote({
        id: this.props.id,
      });
      this.props.history.push('/');
      this.props.toggleDelete();
    }

render() {
    return (
  <StyledDelete>
    
  </StyledDelete>
    );
  }
}

export default connect(null, { toggleDelete, deleteNote })(Delete);