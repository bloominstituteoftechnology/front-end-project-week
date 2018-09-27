import React from 'react';
import { DropTarget } from 'react-dnd';

const DeleteTarget = (props) => (
// const Target = ({ connectDropTarget, highlighted, shape }) => (
  //these are all props  -- I dont know where the come form
    //connectDropTarget - (magic)function that sets up DOM node
    //highlighted - what happens when source is dragged
    // props on target - in this case it is the type of shape props.shape
  props.connectDropTarget(
    <div
      className={"menu-item"}
      style={{
        height: props.highlighted ? "200px" : null,
        background: props.highlighted ? "red" : null,
        textDecoration: "none",
        cursor: "default"
      }}
      >
      Drag to Delete
    </div>
  )
);

const specObj = {
  //this object is for defining how different targets react to sources

  //in this example the target's shape is (attached? combined?)

  //this is a good place to call redux(flux) actions
  hover(props, component){
    // console.log(props.highlighted)
  },

  drop(props) {
    console.log('target props', props)//target props //square or circle
    const { action, index } = props;
    return ({
      action,
      index
      //drop() must return undefined or an object that represents drop result
    });
  }
  //other actions can be defined here as well
  //such as
      //hover(props,monitor, component)
      //canDrop(props,monitor) --- used to specify if item is not allowed
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
});

export default DropTarget('item', specObj, collect)(DeleteTarget);//HOC that combines Target


// export default DropTarget(types('string'), spec('object'), collect("object"))(MyComponent);

//types - string, array or function that return a string or array.
//spec - object with methods on it defining what happens when the target and the source meet.
//collect - a function that recieves connect(magic) and monitor(also magic)
