import React from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Button, LinkWrapper } from '../styles';
import { DragSource, DropTarget } from 'react-dnd';

import { Tag } from '../styles';

const StyledCard = styled.div`
  padding: 3rem;
  box-shadow: ${props =>
    props.isDragging ? 'none' : '0 2rem 4rem rgba(0, 0, 0, 0.2)'};
  background-color: #fafafa;
  width: 32rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  opacity: ${props => (props.isDragging ? 0 : 1)};
`;

const HideOverflow = styled.div`
  margin-bottom: 1rem;
  padding: 0;
  flex-basis: 100%; /* important to have a fixed dimension on its immediate parent */
  overflow: hidden;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #bdbdbd;
`;

const CardBody = styled.div`
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const collectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const cardTarget = {
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) return;

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

    const clientOffset = monitor.getClientOffset();
    const hoverClientX = clientOffset.x - hoverBoundingRect.left;

    if (hoverClientX > hoverMiddleX) {
      props.moveAfter(hoverIndex, dragIndex);
    } else if (hoverClientX < hoverMiddleX) {
      if (hoverIndex - 1 === dragIndex) return;
      props.moveBefore(hoverIndex, dragIndex);
    }
    monitor.getItem().index = hoverIndex;
  },
};

const collectTarget = connect => ({
  connectDropTarget: connect.dropTarget(),
});

const Card = ({
  note: { id, title, textBody, tags },
  connectDragSource,
  isDragging,
  connectDropTarget,
}) => {
  return connectDragSource(
    connectDropTarget(
      <div>
        <StyledCard isDragging={isDragging}>
          <HideOverflow>
            <CardTitle>{title}</CardTitle>
            {tags.length > 0 && (
              <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                Tags:{' '}
                {tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
            <CardBody>
              <ReactMarkdown source={textBody.substr(0, 250)} />
            </CardBody>
          </HideOverflow>
          <div>
            <LinkWrapper
              style={{ display: 'inline-block', margin: '0 1rem 0 0' }}
              to={`/notes/${id}`}
              key={id}
            >
              <Button>View</Button>
            </LinkWrapper>
            <LinkWrapper
              style={{ display: 'inline-block', margin: 0 }}
              to={`/notes/${id}/edit`}
              key={id}
            >
              <Button>Edit</Button>
            </LinkWrapper>
          </div>
        </StyledCard>
      </div>,
    ),
  );
};

export default DropTarget('CARD', cardTarget, collectTarget)(
  DragSource('CARD', cardSource, collectSource)(Card),
);
