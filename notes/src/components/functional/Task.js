import React from 'react';
import styled from 'styled-components';

import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  font-size: 1.4rem;
  padding: 8px;
  margin-bottom: 8px;
  background: white;

  input ~ label {
    text-decoration: ${props => props.children[0].props.checked? 'line-through': 'none'}
  }

  label {
    margin-left: 1%;
  }
`

class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            <input 
              type='checkbox' 
              checked={this.props.task.complete} 
              onChange={() => this.props.handleComplete(this.props.task.id)} 
            /> 
              <label>{this.props.task.content}</label>
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task;