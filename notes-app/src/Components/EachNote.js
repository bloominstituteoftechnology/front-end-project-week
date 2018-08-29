import React from 'react';
import {Link} from 'react-router-dom';






const EachNote = (props) => {
    return (<div className="eachNote">
      <Link to={`/note/${props.note._id}`}><div key={props.note._id} noteView={props} > {props.note.title} ||||| {props.note.textBody} </div></Link>
      
    </div>
    )
  } 
//<div onClick={()=>{props.deleter(props.note._id)}}> {props.note.title} ||||| {props.note.textBody} x</div>
  








  export default EachNote;