import React from 'react';
import { DropTarget } from 'react-dnd';

const DeleteTarget = (props) => (

  props.connectDropTarget(
    <div
      className={"menu-item"}
      style={{
        height: props.highlighted ? "200px" : null,
        background: props.highlighted ? "red" : null,
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
  drop(props) {
    console.log('target props', props)//target props //square or circle
    const { action } = props;
    return ({
      action,
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
