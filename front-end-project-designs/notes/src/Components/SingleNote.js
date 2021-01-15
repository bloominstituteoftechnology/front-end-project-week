import React from 'react';
import './Style.css';
import {Link} from 'react-router-dom';
import ReactMarkdown from "react-markdown";


const SingleNote = (props) => {
    console.log("Single-note-props : ", props);
    return (
        <div className = "note-card">
            <Link to = {`/notes/${props.data.id}`} className = "no-decoration">
                <h4 /*onClick = {alert(props.data._id)}*/>  {props.data.title} </h4>  </Link>
                <p className =  "line"></p>
                <ReactMarkdown source={props.data.content} />
                {/*<p> {props.data.textBody} </p>*/}
           
        </div>
    )
}


export default SingleNote;      