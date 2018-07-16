import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';


const ViewNote = props => {
    
        return (
            <div> 
                {/* <Sidebar /> */}
            <div className="ViewNote">
            <h3>{props.note.title}</h3>
            <p>{props.note.body}</p>    
            </div>
            </div>
        )
    }



export default ViewNote;