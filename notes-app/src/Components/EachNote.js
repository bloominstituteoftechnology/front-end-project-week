import React from 'react';

const EachNote = (props) => {
    return (<div>
      <div onClick={()=>{props.deleter(props.note._id)}}> {props.note.title} ||||| {props.note.textBody} x</div>
    </div>
    )
  } 

  export default EachNote;