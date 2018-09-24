import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';






const EachNote = (props) => {
    return (<div className="eachNote">
      {/* <Link to={`/note/${props.note._id}`}>
      <div key={props.note._id} 
      noteView={props} > 
      {props.note.title} ||||| 
      {props.note.textBody} </div>
      </Link> */}

      <Link to={`/note/${props.note._id}`} style={{ textDecoration: 'none' }}>
                    <div className='note' key={props.note._id}>
                        <div>
                        <br />
                            <div className="note_title">
                                {props.note.title}<br /><br />
                            </div>
                            {props.note.textBody}<br />
                        </div>
                    </div>
                </Link>
      
    </div>
    )
  } 
//<div onClick={()=>{props.deleter(props.note._id)}}> {props.note.title} ||||| {props.note.textBody} x</div>
  








  export default EachNote;