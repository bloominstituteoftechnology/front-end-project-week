import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotes } from '../REDUX/actions';
import { Card, CardTitle, CardBody, CardText, Col, Button } from 'reactstrap';
import { CardFactory } from './card-factory';
import { handleReorder } from '../REDUX/actions';

import createAbsoluteGrid from 'react-absolute-grid';

const Comp = props => {
  const contentLength = props.item.content.split(" ");
  return (
    <Col 
      // md="12" 
      // lg="6"
      // xl="4"
      className="col-12" 
    >
      <div className="CardTitle">{props.item.title}</div>
    </Col>
  )
}

let notes = [
  {
    key: 0,
    title: "Custom Note #0",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 0,
    sort: 1
  },
  {
    key: 1,
    title: "Custom Note #1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 1,
    sort: 2
  },
  {
    key: 2,
    title: "Custom Note #2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 2,
    sort: 3
  },
  {
    key: 3,
    title: "Custom Note #3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 3,
    sort: 4
  },
  {
    key: 4,
    title: "Custom Note #4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 4,
    sort: 5
  },
  {
    key: 5,
    title: "Custom Note #5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 5,
    sort: 6
  },
  {
    key: 6,
    title: "Custom Note #6",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 6,
    sort: 7
  },
  {
    key: 7,
    title: "Custom Note #7",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 7,
    sort: 8
  },
  {
    key: 8,
    title: "Custom Note #8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat massa id lorem fermentum sodales sed at lacus. Quisque lobortis bibendum purus. Mauris molestie venenatis fringilla. Vivamus at neque tempor, ultrices sapien quis, tempus erat. Integer tincidunt orci at viverra laoreet. Vestibulum pretium nisi tellus, at elementum dolor rhoncus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nibh non ante facilisis, vel elementum justo accumsan. Aliquam eu neque a magna volutpat lobortis quis eget augue. Maecenas vulputate fringilla ex, ac fringilla est fermentum et. Curabitur eget erat id velit vulputate malesuada. Quisque dapibus ligula at leo blandit, sed placerat nulla elementum. Nunc vulputate felis vel aliquet lobortis. Ut eget leo ut nisi tincidunt aliquet. Etiam ut mollis risus, et suscipit metus. Integer nec purus sollicitudin, elementum lectus sit amet, placerat tellus.",
    id: 8,
    sort: 9
  }
];

class DragSort extends Component {

  render() {
    const AbsoluteGrid = createAbsoluteGrid(Comp);
    return (
      <AbsoluteGrid items={notes} dragEnabled={true} responsive={true} />
    )
  }
}

const mapStateToProps = state => ({ notes: state.notes })

export default connect(mapStateToProps, { getNotes, handleReorder })(DragSort);
// export default DragSort;

/* 
import DragSortableList from 'react-drag-sortable';
*/