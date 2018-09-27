import React from 'react';
import styled from 'styled-components';

import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  font-size: 1.4rem;
  padding: 8px;
  margin-bottom: 8px;
  background: white;
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
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task;